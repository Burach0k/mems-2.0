import { Vue, Component } from 'vue-property-decorator';
import Axios from 'axios';
import { journalSearchResponse } from 'mocks/models';

@Component
export default class Search extends Vue {
  public cards: journalSearchResponse[] = [];

  ckeckRequest(): void {
    Axios.get<journalSearchResponse[]>('http://imaph.bas-net.by:81/project.local/scripts/api_search.php').then(response => {
      this.cards = response.data
    });
  }

  get getWordsTags() {
    return this.$store.state.wordsTags
  }
  
  get getAuthTags() {
    return this.$store.state.authTags
  }

  get getTitleTags() {
    return this.$store.state.titleTags
  }
}
