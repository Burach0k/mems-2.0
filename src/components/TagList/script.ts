import { Vue, Component, Prop } from 'vue-property-decorator';
import VueTagsInput from '@johmun/vue-tags-input';

@Component({
  components: {
    'tag-list': VueTagsInput,
  },
})
export default class TagList extends Vue {
  @Prop(Array) tags: string[];
  @Prop(String) label: string;

  public tagInput: string = '';
  public tagList: string[] = [];

  constructor() {
    super();
    this.tagList = this.tags || [];
  }

  public deleteTag(index: number): void {
    this.tagList.splice(index, 1);
    this.$emit('tags-changed', this.tagList);
  }

  public addTag(event: any) {
    const tagName = event.target.value;
    if (tagName) {
      this.tagList.push(tagName);
      this.$emit('tags-changed', this.tagList);
      this.tagInput = '';
    }
  }
}
