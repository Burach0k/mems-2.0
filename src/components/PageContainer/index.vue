<template>
  <div class="page-container">
    <new-header></new-header>
    <router-view class="page"></router-view>
    <new-footer></new-footer>
  </div>
</template>

<script src="./script.ts" lang="ts"></script>

<style scoped>
.page-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.page {
  flex-grow: 1;
}
</style>