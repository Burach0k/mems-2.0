import Vue from 'vue';
import Component from 'vue-class-component';
import Header from 'Components/Header/index.vue';
import TagList from 'Components/TagList/index.vue';

@Component({
  components: {
    'new-header': Header,
    'tag-list': TagList,
  },
})
export default class Main extends Vue {
  public tags: Array<String> = ['Математика', 'Физика', 'Информатика'];
  public tag: String = '';
}
