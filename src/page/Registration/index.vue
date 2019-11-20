<template>
  <div class="registration page">
    <h3>Регистрация</h3>
    <p>
      Заполните, пожалуйста, форму регистрации.
      <router-link to="/otherPage">Нажать здесь</router-link>, если Вы зарегистрированы в качестве пользователя этого журнала.
    </p>

    <form>
      <h3>Профиль</h3>
      <div class="form-data">
        
        <new-select
          name="Язык"
          :options="registrationForm.defaultLanguages"
          @input="registration.language=$event"
        />

        <new-input name="Логин" v-model="registrationForm.login" />
        <new-input name="Пароль" v-model="registrationForm.password" />
        <new-input name="Повторить пороль" v-model="registrationForm.secondPassword" />
        <new-input name="Имя" v-model="registrationForm.firsName" />
        <new-input name="Отчество" v-model="registrationForm.thirdName" />
        <new-input name="Фамилия" v-model="registrationForm.lastName" />
        <new-input name="Инициалы" v-model="registrationForm.initials" />

        <new-select name="Пол" :options="defaultSex" @input="registrationForm.sex=$event" />

        <new-input name="Специализация" v-model="registrationForm.specialization" />

        <new-text-area name="Учреждения" v-model="registrationForm.institutions" />
        <new-text-area name="Подпись" v-model="registrationForm.signature" />

        <new-input name="E-mail" v-model="registrationForm.email" />
        <new-input name="Телефон" v-model="registrationForm.telephone" />
        <new-input name="Факс" v-model="registrationForm.fax" />

        <new-text-area name="Почтовый адрес" v-model="registrationForm.addres" />

        <new-select :options="defaultCountries" @input="registrationForm.country=$event" />

        <new-text-area name="О себе" v-model="registrationForm.aboutMe" />

        <button @click.prevent="onSubmit()" class="button success-button">Регистрация</button>
      </div>
    </form>

    <div>
      <span>Конфиденциальность</span>
      <p>Имена и адреса электронной почты, введенные на сайте этого журнала, будут использованы исключительно для целей, обозначенных этим журналом, и не будут использованы для каких-либо других целей или предоставлены другим лицам и организациям.</p>
      <p>ISSN 1561-2430 (Print)</p>
      <p>ISSN 2524-2415 (Online)</p>
    </div>
  </div>
</template>

<script src="./script.ts" lang="ts"></script>

<style scoped>
form {
}
.form-data {
  width: 40%;
  margin: auto;
}
h3 {
  text-align: center;
}
</style>