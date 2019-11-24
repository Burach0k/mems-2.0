import { Vue, Component } from 'vue-property-decorator';
import { SET_KEYWORD_TAG, GET_TAGS_CLOUD } from 'Store/action_names';

@Component
export default class Main extends Vue {
  public tags: string[] = [];

  created() {
    this.$store.dispatch(GET_TAGS_CLOUD).then((response) => this.tags.push(...response.data));
  }

  public searchByTag(tag: string) {
    this.$store.commit(SET_KEYWORD_TAG, tag);
    this.$router.push('/search');
  }
}
