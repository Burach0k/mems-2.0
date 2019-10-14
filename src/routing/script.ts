import Vue from 'vue';
import Router from 'vue-router';
import Main from 'Page/Main/index.vue';
import NotFound from 'Page/NotFound/index.vue';
import Registration from 'Page/Registration/index.vue';
import Search from 'Page/Search/index.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration,
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
    },
    {
      path: '*',
      name: 'Not found',
      component: NotFound,
    },
  ],
});
