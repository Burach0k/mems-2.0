import { Vue, Component } from 'vue-property-decorator';
import CountryFlag from 'vue-country-flag';
import axios from 'axios';
import { DEFAULT_LOCALE } from '../../initialize-config/localization/constants';

@Component({
  components: {
    'country-flag': CountryFlag,
  },
})
export default class HeaderComponent extends Vue {
  public languages: string[] = ['us', 'ru'];
  public selectedLanguage: string = DEFAULT_LOCALE;

  public setLanguage(language: string): void {
    axios.get(`src/initialize-config/localization/${language}.json`).then((messages) => {
      this.$i18n.setLocaleMessage(language, messages.data);
      this.$i18n.locale = language;
    });
  }
}
