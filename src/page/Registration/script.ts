import { Vue, Component } from 'vue-property-decorator'
import { IRegistationForm } from 'Model/registration.model';
import { CREATE_USER } from 'Store/action_names';

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
    const data = this.registrationForm;

    this.$store.dispatch(CREATE_USER, data).then(() => {
      this.$router.push('/');
    });
  }
}