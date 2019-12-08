import { Vue, Component } from 'vue-property-decorator';
import { CHECK_USER } from 'Store/action_names';

@Component
export default class AuthorizationField extends Vue {
  public login: string = '';
  public password: string = '';

  public onSubmit(): void {
    const data = {
      login: this.login,
      password: this.password
    }

    this.$store.dispatch(CHECK_USER, data).then(() => {
      this.$router.push('/');
    });
  }
}
