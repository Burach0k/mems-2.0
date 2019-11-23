import { Vue, Component } from 'vue-property-decorator'
import Axios from 'axios';

@Component
export default class Main extends Vue {
  public tags: string[] = [];

  constructor() {
    super();
    Axios.get('http://master.basnet.by/lqo/tags_cloud.php').then(response => this.tags.push(...response.data))
  }

}
