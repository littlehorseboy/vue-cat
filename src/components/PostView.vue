<template>
  <form>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--8-col">
        <div class="card-image__pictrure">
          <img :src="this.catUrl">
        </div>
      </div>
      <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
          <input id="username" v-model="title" type="text" class="mdl-textfield__input"/>
          <label for="username" class="mdl-textfield__label">Describe me</label>
        </div>
        <div class="actions">
          <a @click.prevent="postCat" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
            POST A CAT
          </a>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import xmlParse from 'xml-parser';

export default {
  data () {
    return {
      catUrl: null,
      title: '',
    };
  },
  mounted () {
    const httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          this.catUrl = xmlParse(httpRequest.responseText).root.children['0'].children['0'].children['0'].children['0'].content;
        } else {
          console.log('There was a problem with the request.');
        }
      }
    };
    httpRequest.open('GET', 'https://thecatapi.com/api/images/get?format=xml&results_per_page=1');
    httpRequest.send();
  },
  methods: {
    postCat () {
      this.$root.$firebaseRefs.cat.push({
        url: this.catUrl,
        comment: this.title,
        info: 'Posted by horse on today',
        created_at: -1 * new Date().getTime(),
      })
      .then(this.$router.push('/'));
    },
  },
};
</script>

<style scoped>
  .waiting {
    padding: 10px;
    color: #555,
  }
</style>
