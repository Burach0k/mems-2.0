import Vue from 'vue';
import Router from 'vue-router';
import Main from 'Page/Main/index.vue';
import NotFound from 'Page/NotFound/index.vue';
import Registration from 'Page/Registration/index.vue';
import Header from 'Components/Header/index.vue';
import Search from 'Page/Search/index.vue';
import Login from 'Page/Login/index.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Header,
      children: [
        {
          path: '',
          name: 'Main',
          component: Main,
        },
        {
          path: 'search',
          name: 'Search',
          component: Search,
        },
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration,
    },
    {
      path: '*',
      name: 'Not found',
      component: NotFound,
    },
  ],
});
