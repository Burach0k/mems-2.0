import Vue from 'vue';
import Component from 'vue-class-component';
import VueTagsInput from '@johmun/vue-tags-input';

@Component({
  components: {
    'tag-list': VueTagsInput,
  },
  props: {
    value: String,
    tags: Array,
    onChange(): void {},
  },
})
export default class TagList extends Vue {}
