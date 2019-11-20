<template>
  <div class="login-page page">
    <div class="auth-container">
    <div class='login-form'>
      <h3>Личный кабинет</h3>

      <new-input name="Логин"  v-model="login" />
      <new-input name="Пароль" type="password" v-model="password" />

      <button class="button success-button" @click.prevent="onSubmit()">Вход</button>
    </div>

      <p>Вы еще не зарегестрированы? <router-link to="/registration">Зарегестрироваться!</router-link></p>
    </div>
  </div>
</template>

<script src="./script.ts" lang="ts"></script>

<style scoped>
.login-page {
  background-image: -webkit-linear-gradient(30deg, #23aebc, #990000);
  background-image: linear-gradient(30deg, #0D0D0D, #EAF205);

  min-height: 100vh;
  display: flex;
}
.auth-container {
  display: flex;
  flex-direction: column;

  width: 600px;
  height: 300px;
  padding: 40px;
  margin: auto;

  box-shadow: 0 2px 20px 9px rgba(0,0,0,0.1);
}
h3 {
  margin: 0;
  color: #0D0D0D;
  text-align: center;
}
a {
  color: #F2E205;
  text-decoration: none;
}
.login-form {
  flex-grow: 1;
}
</style>