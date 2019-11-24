import { Vue, Component } from 'vue-property-decorator';
import { journalSearchResponse } from 'mocks/models';
import { GET_CARD_AT_TAGS } from 'Store/action_names';

@Component
export default class Search extends Vue {
  public cards: journalSearchResponse[] = [];

  created() {
    this.updateTags();
  }

  updateTags(): void {
    const data = {
      name: this.getAuthTags,
      title: this.getTitleTags,
      keywords: this.getWordsTags,
    }
    this.$store.dispatch(GET_CARD_AT_TAGS, data).then((response: any) => {
      this.cards = response.data
    });
  }

  get getWordsTags() {
    return this.$store.state.search.wordsTags
  }
  
  get getAuthTags() {
    return this.$store.state.search.authTags
  }

  get getTitleTags() {
    return this.$store.state.search.titleTags
  }
}
