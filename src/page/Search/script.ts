import Vue from 'vue';
import Component from 'vue-class-component';
import TagList from 'Components/TagList/index.vue';

@Component({
  components: {
    'tag-list': TagList,
  },
})
export default class Search extends Vue {
  public authTags: Array<String> = ['Ландау', 'Сивухин', 'Коши', 'Свербут'];
  public authTag: String = '';

  public discTags: Array<String> = ['Математика', 'Физика', 'Информатика'];
  public discTag: String = '';

  public dateTags: Array<String> = ['31/12/1996', '12/03/2002'];
  public dateTag: String = '';
}
