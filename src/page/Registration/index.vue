<template>
  <div class="registration">
    <h3>Регистрация</h3>
    <p>
      Заполните, пожалуйста, форму регистрации.
      <router-link to="/otherPage">Нажать здесь</router-link>, если Вы зарегистрированы в качестве пользователя этого журнала.
    </p>

    <form>
      <h3>Профиль</h3>
      <div class="form-data">
        <new-select name='Язык' :options='languages'/>
        
        <new-input name="Логин" placeholder="Логин" v-model="login" />
        <new-input name="Пароль" placeholder="Пароль" v-model="password" />
        <new-input name="Повторить пороль" placeholder="Повторить пороль" v-model="secondPassword" />
        <new-input name="Имя" placeholder="Имя" v-model="firsName" />
        <new-input name="Отчество" placeholder="Отчество" v-model="thirdName" />
        <new-input name="Фамилия" placeholder="Фамилия" v-model="lastName" />
        <new-input name="Инициалы" placeholder="Инициалы" v-model="initials" />
       
        <new-select name='Пол' :options='sex'/>
       
        <new-input name="Специализация" placeholder="Специализация" v-model="specialization" />
       
        <new-text-area name="Учреждения" placeholder="Учреждения" v-model="institutions" />
        <new-text-area name="Подпись" placeholder="Подпись" v-model="signature" />
       
        <new-input name="E-mail" placeholder="E-mail" v-model="email" />
        <new-input name="Телефон" placeholder="Телефон" v-model="telephone" />
        <new-input name="Факс" placeholder="Факс" v-model="fax" />
       
        <new-text-area name="Почтовый адрес" placeholder="Почтовый адрес" v-model="addres" />
       
        <new-select :options='country'/>
       
        <new-text-area name="О себе" placeholder="О себе" v-model="aboutMe" />
       
        <button type="submit" class="button">Регистрация</button>
      </div>
    </form>

    <span>Конфиденциальность</span>
    <p>Имена и адреса электронной почты, введенные на сайте этого журнала, будут использованы исключительно для целей, обозначенных этим журналом, и не будут использованы для каких-либо других целей или предоставлены другим лицам и организациям.</p>
    <p>ISSN 1561-2430 (Print)</p>
    <p>ISSN 2524-2415 (Online)</p>
  </div>
</template>

<script src="./script.ts" lang="ts"></script>

<style scoped>
.registration {
  padding: 40px;
}
form {
  width: 60%;

  text-align: center;
}
.form-data {
  width: 40%;
  margin: auto;
}
</style>