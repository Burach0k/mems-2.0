import { Vue, Component, Prop } from 'vue-property-decorator'
import VueTagsInput from '@johmun/vue-tags-input';

@Component({
  components: {
    'tag-list': VueTagsInput,
  },
})
export default class TagList extends Vue {
  @Prop(Array) tags: string[];
  value: string = '';

  public tagsChanged(event: any) {
    console.warn(this.tags);
    this.$emit('tags-changed', event.target)
  }
}
