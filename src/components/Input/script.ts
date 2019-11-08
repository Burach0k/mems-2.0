import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Input extends Vue {
  @Prop(String) name: string;
  @Prop(String) value: string;
  @Prop(String) placeholder: string;
  @Prop(String) type: string;
}
