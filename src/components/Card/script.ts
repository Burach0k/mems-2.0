import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Card extends Vue {
  @Prop(String) title: string;
  @Prop(String) author_cor: string;
  @Prop(String) email: string;
  @Prop(String) number: string;
  @Prop(String) year: string;
  @Prop(Array) authors: string[];
  @Prop(Array) keywords: string[];
}
