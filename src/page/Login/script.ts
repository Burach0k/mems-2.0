import { Vue, Component } from 'vue-property-decorator';

@Component
export default class AuthorizationField extends Vue {
  public login: string = '';
  public password: string = '';

  public onSubmit(): void {
    console.warn(JSON.stringify({
      login: this.login,
      password: this.password
    }, null, ' '))
  }
}
