<template>
  <div id="app">
    <new-header
      :languages="languages"
      :selectedLanguage="selectedLanguage"
      @setLanguage="setLanguage"
    />
    <router-view />
  </div>
</template>
<style>
html,
body {
  padding: 0;
  margin: 0;
}
.button {
  height: 50px;
  width: 100%;

  padding: 5px 10px;

  border-radius: 4px;
  background-color: cornflowerblue;
  border: none;

  color: #fff;

  font-size: 20px;
}
.ti-input {
  border: none !important;
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { DEFAULT_LOCALE } from './initialize-config/localization/constants';
import axios from 'axios';

@Component
export default class AppComponent extends Vue {
  public languages: string[] = ['us', 'ru'];
  public selectedLanguage: string = DEFAULT_LOCALE;

  public setLanguage(language: string) {
    this.selectedLanguage = language;
    axios.get(
      `src/initialize-config/localization/${language}.json`).then(messages=>{
        this.$i18n.setLocaleMessage(language,messages.data);
        this.$i18n.locale=language;
        });
  }
}
</script>