import Vue from 'vue';
import Router from 'vue-router';
// import Home from '@/pages/Home';
import DetailView from '@/components/DetailView';
import HomeView from '@/components/HomeView';
import PostView from '@/components/PostView';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
    },
    {
      path: '/detail/:id',
      name: 'DetailView',
      component: DetailView,
    },
    {
      path: '/post',
      name: 'PostView',
      component: PostView,
    },
  ],
});
