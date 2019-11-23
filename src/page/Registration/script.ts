import { Vue, Component } from 'vue-property-decorator'
import { IRegistationForm } from 'Model/registration.model';

@Component
export default class Main extends Vue {
  public readonly defaultLanguages=['ru', 'en'];
  public readonly defaultSex=['Мужчина', 'Женщина'];
  public readonly defaultCountries=['Беларусь', 'Россия'];


  public registrationForm: IRegistationForm = {
    language:'' ,
    sex: '',
    country: '',
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

  public onSubmit(): void {
    console.warn(JSON.stringify(
      this.registrationForm, null, ' '
    ))
  }
}