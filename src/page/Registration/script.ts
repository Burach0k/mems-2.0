import { Vue, Component } from 'vue-property-decorator';
import { IRegistationForm } from 'Model/registration.model';
import { CREATE_USER } from 'Store/action_names';

@Component
export default class Main extends Vue {
  public readonly defaultCountries = ['Беларусь', 'Россия'];
  public submitDisabled = true;

  public registrationForm: any = { //todo исправить тип
    login: '',
    password: '',
    secondPassword: '',
    lastName: '',
    firsName: '',
    thirdName: '',
    institutions: '',
    specialization: '',
    addres: '',
    email: '',
    telephone: '',
    country: '',
  };
  
  updated() {
    let isAllInputFilled = true;

    Object.keys(this.registrationForm).forEach((key) => {
      if (this.registrationForm[key].length === 0 && key !== 'specialization' && key !== 'addres' && key !== 'telephone') {
        isAllInputFilled = false;
      }
    });

    this.submitDisabled = !isAllInputFilled;
  }

  public onSubmit(): void {
    const data = this.registrationForm;

    this.$store.dispatch(CREATE_USER, data).then(() => {
      this.$router.push('/');
    });
  }
}
