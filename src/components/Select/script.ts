import { Vue, Component, Prop } from 'vue-property-decorator'
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

@Component({
  components: {
    'new-select': vSelect,
  }
})
export default class Select extends Vue {
  @Prop(String) name: string;
  @Prop(Array) options: string[];
}
