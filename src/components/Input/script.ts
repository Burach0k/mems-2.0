import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Input extends Vue {
  @Prop(String) name: string;
  @Prop(String) value: string;
  @Prop(String) type: string;
  @Prop(Boolean) requred: boolean;

  public emitInput(event: any): void {
    this.$emit('input', event.target.value)
  }
} 
