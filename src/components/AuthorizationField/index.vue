<template>
  <div>
    <h3>Личный кабинет</h3>

    <new-input name="Логин" placeholder="Логин" v-model="login" />
    <new-input name="Пароль" placeholder="Пароль" type="password" v-model="password" />

    <button class="button">Вход</button>
  </div>
</template>

<script src="./script.ts" lang="ts"></script>

<style scoped>
h3 {
  margin: 0;
  color: #fff;
  text-align: center;
}
</style>