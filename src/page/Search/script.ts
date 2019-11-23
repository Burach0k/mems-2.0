import { Vue, Component } from 'vue-property-decorator';
import Axios from 'axios';
import { journalSearchResponse } from 'mocks/models';

@Component
export default class Search extends Vue {
  public cards: journalSearchResponse[] = [];

  public authTags: string[] = [];
  public authTag: string = '';

  public wordsTags: string[] = [];
  public wordsTag: string = '';

  public titleTags: string[] = [];
  public titleTag: string = '';

  public testObject: string = '';

  ckeckRequest(): void {
    Axios.get<journalSearchResponse[]>('http://imaph.bas-net.by:81/project.local/scripts/api_search.php').then(response => {
      console.warn(response);
      this.cards = response.data
    });
  }

  public updateTags(event: any): void {
    console.warn(event.target);
  }
}
