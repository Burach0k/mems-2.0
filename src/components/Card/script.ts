import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Card extends Vue {
  @Prop(String) title: string;
  @Prop(Array) authors: string[];
  @Prop(Array) author_cor: string[];
  @Prop(Array) keywords: string[];

  public cardAuthors: string;
  public cardAuthorCor: string;
  public cardKeywords: string;

  constructor() {
    super();
    this.cardAuthors = this.authors.join(', ');
    this.cardAuthorCor = this.author_cor.join(', ');
    this.cardKeywords = this.keywords.join(', ');
  }
}
