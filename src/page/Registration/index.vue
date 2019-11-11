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
        <new-select name='Язык' :options='languages'/>
        
        <new-input name="Логин" placeholder="Логин" v-model="registrationForm.login" />
        <new-input name="Пароль" placeholder="Пароль" v-model="registrationForm.password" />
        <new-input name="Повторить пороль" placeholder="Повторить пороль" v-model="registrationForm.secondPassword" />
        <new-input name="Имя" placeholder="Имя" v-model="registrationForm.firsName" />
        <new-input name="Отчество" placeholder="Отчество" v-model="registrationForm.thirdName" />
        <new-input name="Фамилия" placeholder="Фамилия" v-model="registrationForm.lastName" />
        <new-input name="Инициалы" placeholder="Инициалы" v-model="registrationForm.initials" />
       
        <new-select name='Пол' :options='sex'/>
       
        <new-input name="Специализация" placeholder="Специализация" v-model="registrationForm.specialization" />
       
        <new-text-area name="Учреждения" placeholder="Учреждения" v-model="registrationForm.institutions" />
        <new-text-area name="Подпись" placeholder="Подпись" v-model="registrationForm.signature" />
       
        <new-input name="E-mail" placeholder="E-mail" v-model="registrationForm.email" />
        <new-input name="Телефон" placeholder="Телефон" v-model="registrationForm.telephone" />
        <new-input name="Факс" placeholder="Факс" v-model="registrationForm.fax" />
       
        <new-text-area name="Почтовый адрес" placeholder="Почтовый адрес" v-model="registrationForm.addres" />
       
        <new-select :options='country'/>
       
        <new-text-area name="О себе" placeholder="О себе" v-model="registrationForm.aboutMe" />
       
        <button type="submit" class="button success-button">Регистрация</button>
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