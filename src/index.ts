import Vue from 'vue';
import Main from './page/Main/index.vue';

class AppCore {
  private instance!: Vue;

  private init() {
    this.instance = new Vue({
      el: '#app',
      render: (h) => h(Main),
    });
  }

  constructor() {
    this.init();
  }
}

new AppCore();
