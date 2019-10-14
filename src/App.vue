<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserLock, faBook, faHashtag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUserLock, faBook, faHashtag);
Vue.component('font-awesome-icon', FontAwesomeIcon);

export default {
  name: 'app',
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
}
.button {
  height: 50px;
  width: 100%;

  padding: 5px 10px;

  border-radius: 4px;
  background-color: cornflowerblue;
  border: none;

  color: #fff;

  font-size: 20px;
}
.ti-input {
  border: none!important;
}
</style>