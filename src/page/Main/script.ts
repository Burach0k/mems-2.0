import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Main extends Vue {
  public tags: string[] = ['Математика', 'Физика', 'Информатика'];
  public tag: string = '';
}
