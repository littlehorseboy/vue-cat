<template>
  <div id="app">
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <span class="mdl-layout-title">CropChat</span>
        </div>
      </header>
      <div class="mdl-layout__drawer" ref="mdlLayoutDrawer">
        <span class="mdl-layout-title">CropChat</span>
        <nav class="mdl-navigation">
          <router-link :to="{ name: 'HomeView' }" class="mdl-navigation__link" @click.native="hideMenu">Home</router-link>
          <router-link :to="{ name: 'PostView' }" class="mdl-navigation__link" @click.native="hideMenu">Post a picture</router-link>
        </nav>
      </div>
      <main class="mdl-layout__content">
        <div class="page-content">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import 'normalize.css';
import 'material-design-lite';

export default {
  name: 'App',
  methods: {
    hideMenu () {
      this.$refs.mdlLayoutDrawer.classList.remove('is-visible');
      document.getElementsByClassName('mdl-layout__obfuscator')[0].classList.remove('is-visible');
    },
  },
};
</script>

<style>
@import url('https://js.arcgis.com/3.23/esri/css/esri.css');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');

/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
