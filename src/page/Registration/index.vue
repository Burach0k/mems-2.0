<template>
  <div class="registration page">
    <h3>{{$t('registrationPage.title')}}</h3>

    <form>
      <div class="form-data">
        <new-input :requred='true' :name="$t('registrationPage.login')" v-model="registrationForm.login" />

        <div class="double-field">
          <new-input :requred='true' :name="$t('registrationPage.password')" v-model="registrationForm.password" />
          <new-input :requred='true' :name="$t('registrationPage.secondPassword')" v-model="registrationForm.secondPassword" />
        </div>

        <div class="double-field">
          <new-input :name="$t('registrationPage.specialization')" v-model="registrationForm.specialization" />
          <new-input :requred='true' :name="$t('registrationPage.lastName')" v-model="registrationForm.lastName" />
        </div>

        <div class="double-field">
          <new-input :requred='true' :name="$t('registrationPage.firsName')" v-model="registrationForm.firsName" />
          <new-input :requred='true' :name="$t('registrationPage.thirdName')" v-model="registrationForm.thirdName" />
        </div>

        <new-select :requred='true' :name="$t('registrationPage.country')" :options="defaultCountries" @input="registrationForm.country = $event" />
        <new-input :requred='true' :name="$t('registrationPage.institutions')" v-model="registrationForm.institutions" />

        <new-text-area :name="$t('registrationPage.addres')" v-model="registrationForm.addres" />
        <new-input :requred='true' name="E-mail" v-model="registrationForm.email" />
        <new-input :name="$t('registrationPage.telephone')" v-model="registrationForm.telephone" />

        <button disabled='submitDisabled' v-bind:class="{ disabled: submitDisabled }" @click.prevent="onSubmit()" class="button success-button">{{$t('registrationPage.registration')}}</button>
      </div>
    </form>

    <div>
      <span>{{$t('registrationPage.confidentiality')}}</span>
      <p>{{$t('registrationPage.confidentiality-text')}}</p>
      <p>ISSN 1561-2430 (Print)</p>
      <p>ISSN 2524-2415 (Online)</p>
    </div>
  </div>
</template>

<script src="./script.ts" lang="ts"></script>

<style scoped>
form {
}
.double-field {
  display: flex;
  justify-content: space-between;
}
.double-field > div {
  flex-grow: 0.45;
}
.form-data {
  width: 80%;
  margin: 0 auto 50px auto;
}
h3 {
  text-align: center;
}
button {
  height: 50px;
  font-size: 18px;
}
.disabled {
  opacity: 0.5;
}
</style>
