import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Card extends Vue {
  @Prop(String) title: string;
  @Prop(Array) authors: Array<string>;
  @Prop(Array) author_cor: Array<string>;
  @Prop(Array) keywords: Array<string>;

  public cardAuthors: string;
  public cardAuthorCor: string;
  public cardKeywords: string;

  constructor() {
    super();
    this.cardAuthors = this.authors.join();
    this.cardAuthorCor = this.author_cor.join();
    this.cardKeywords = this.keywords.join();
  }
}
