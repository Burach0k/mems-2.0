import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class TextArea extends Vue {
  @Prop(String) name: string;
  @Prop(String) value: string;
  @Prop(String) placeholder: string;

  public emitInput(event: any): void {
    this.$emit('input', event.target.value)
  }
}