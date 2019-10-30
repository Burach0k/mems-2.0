<template>
  <div>
    <div class="header">
      <img
        src="https://i-love-png.com/images/hive-hexagon-pngac3-4bf0-853a-871b34ab102f_11111.png"
        class="logo"
      />
      <div class="routing">
        <router-link to="/">Главная</router-link>
        <router-link to="/search">Поиск</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script src="./script.ts" lang="ts"></script>

<style scoped>
.header {
  display: flex;

  height: 100px;

  padding: 0 20px;

  justify-content: space-between;
  align-items: center;

  background-color: #0d0d0d;
}
.logo {
  width: 70px;
  height: 70px;
}
.routing a {
  padding: 10px 15px;

  border-radius: 3px;
  background-color: #f2e205;

  color: #0d0d0d;
  font-size: 18px;
  text-decoration: none;
}
.routing a:hover {
  background-color: #0d0d0d;
  color: #f2e205;

  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
</style>