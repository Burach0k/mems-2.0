<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
html,
body {
  padding: 0;
  margin: 0;
}

.button {
  height: 30px;
  width: 100%;

  padding: 5px 10px;

  border-radius: 4px;
  border: none;

  font-size: 14px;
  color: #0D0D0D;
}
.success-button {
  background-color: #F2E205;
}
.error-button {
  background-color: #ff3737;
}

.ti-input {
  border: none !important;
}

.ti-tags .ti-tag {
  padding: 5px !important;
  color: #0D0D0D !important;
  background-color: #EAF205 !important;
  font-size: 16px !important;
}
.tags > div {
  display: inline-block;
}

.page {
  padding: 10px 40px;
}

.icon {
  font-size: 20px;
  color: #f2e205;
}
</style>

<script lang="ts">
export default { name: 'App' };
</script>