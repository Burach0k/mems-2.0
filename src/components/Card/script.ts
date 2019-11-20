import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Card extends Vue {
  @Prop(String) title: string;
  @Prop(String) authors: string;
  @Prop(String) info: string;
}
