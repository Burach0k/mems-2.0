<template>
  <div class="login-page page">
    <div class="auth-container">
      <h3>Личный кабинет</h3>

      <new-input name="Логин" placeholder="Логин" v-model="login" />
      <new-input name="Пароль" placeholder="Пароль" type="password" v-model="password" />

      <button class="button success-button">Вход</button>
    </div>
  </div>
</template>

<script src="./script.ts" lang="ts"></script>

<style scoped>
.login-page {
  background-image: -webkit-linear-gradient(30deg, #23aebc, #990000);
  background-image: linear-gradient(30deg, #0D0D0D, #EAF205);

  width: 100%;
  min-height: 100vh;
  display: flex;
}
.auth-container {
  width: 600px;
  height: 300px;
  padding: 40px;
  margin: auto;

  box-shadow: 0 2px 20px 9px rgba(0,0,0,0.1);
}
h3 {
  margin: 0;
  color: #fff;
  text-align: center;
}
</style>