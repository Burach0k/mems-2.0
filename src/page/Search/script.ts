import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Search extends Vue {
  public authTags: string[] = ['Ландау', 'Сивухин', 'Коши', 'Свербут'];
  public authTag: string = '';

  public discTags: string[] = ['Математика', 'Физика', 'Информатика'];
  public discTag: string = '';

  public dateTags: string[] = ['31/12/1996', '12/03/2002'];
  public dateTag: string = '';

  private cards = [
    { title: 'title', authors: 'andrei, vlad', info: 'lalalallalalalalal lalalallalal' },
    {},
  ];
}
