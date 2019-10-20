<template>
  <div id="app">
    <router-view />
  </div>
</template>
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

<script lang="ts"> export default { name: 'App' }; </script>