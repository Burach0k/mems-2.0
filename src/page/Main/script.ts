import { Vue, Component } from 'vue-property-decorator'
import Axios from 'axios';
import { SET_KEYWORD_TAG } from 'Store/action_names';

@Component
export default class Main extends Vue {
  public tags: string[] = [];

  constructor() {
    super();
    Axios.get('http://master.basnet.by/lqo/tags_cloud.php').then(response => this.tags.push(...response.data))
  }

  public searchByTag(tag: string) {
    this.$store.commit(SET_KEYWORD_TAG, tag);
    this.$router.push('/search');
  }

}
