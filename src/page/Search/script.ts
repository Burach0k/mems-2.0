import { Vue, Component } from 'vue-property-decorator';
import { card } from '../../initialize-config/model/card.model';

@Component
export default class Search extends Vue {
  public authTags: string[] = ['Ландау', 'Сивухин', 'Коши', 'Свербут'];
  public authTag: string = '';

  public discTags: string[] = ['Математика', 'Физика', 'Информатика'];
  public discTag: string = '';

  public dateTags: string[] = ['31/12/1996', '12/03/2002'];
  public dateTag: string = '';

  public testObject: string;
  private cards: Array<card> = [
    {
      id: '1',
      title: 'Ширина запрещенной зоны кремния в слабых полях',
      authors: ['Андрей Ушаков', 'Павел Хмурый'],
      author_cor: ['Антон Гнедов'],
      keywords: ['Полупроводники', 'Уровень Ферми'],
    },
  ];

  ckeckTestData(): void {
    this.cards = JSON.parse(this.testObject);
  }
}
