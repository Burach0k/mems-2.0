import { Vue, Component, Prop } from 'vue-property-decorator'
import VueTagsInput from '@johmun/vue-tags-input';

@Component({
  components: {
    'tag-list': VueTagsInput,
  },
})
export default class TagList extends Vue {
  @Prop(String) value: string;
  @Prop(Array) tags: string[];
}
