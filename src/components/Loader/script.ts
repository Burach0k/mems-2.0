import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Loader extends Vue {
  @Prop(Boolean) loading: boolean;
}
