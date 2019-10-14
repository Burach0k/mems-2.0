import Vue from 'vue';
import Component from 'vue-class-component';
import Input from 'Components/Input/index.vue';
import TextArea from 'Components/TextArea/index.vue';
import Select from 'Components/Select/index.vue';

@Component({
  components: {
    'new-input': Input,
    'new-text-area': TextArea,
    'new-select': Select,
  },
})
export default class Main extends Vue {
  languages: Array<String> = ['ru', 'en'];
  sex: Array<String> = ['Мужчина', 'Женщина'];
  country: Array<String> = ['Беларусь', 'Россия'];

  login: String = '';
  password: String = '';
  secondPassword: String = '';
  firsName: String = '';
  thirdName: String = '';
  lastName: String = '';
  initials: String = '';
  specialization: String = '';
  email: String = '';
  telephone: String = '';
  fax: String = '';

  institutions: String = '';
  signature: String = '';
  addres: String = '';
  aboutMe: String = '';
}
