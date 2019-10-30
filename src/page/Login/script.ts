import { Vue, Component } from 'vue-property-decorator';

@Component
export default class AuthorizationField extends Vue {
  public login: string = '';
  public password: string = '';
}
