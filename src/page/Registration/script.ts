import { Vue, Component } from 'vue-property-decorator'
import { IRegistationForm } from './registration.model'
@Component
export default class Main extends Vue {

  public registrationForm: IRegistationForm = {
    languages: ['ru', 'en'],
    sex:['Мужчина', 'Женщина'],
    country: ['Беларусь', 'Россия'],
    login: '',
    password: '',
    secondPassword: '',
    firsName: '',
    thirdName: '',
    lastName: '',
    initials: '',
    specialization: '',
    email: '',
    telephone: '',
    fax: '',
    institutions: '',
    signature: '',
    addres: '',
    aboutMe: '',
  }
}
