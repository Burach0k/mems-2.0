import Vue from 'vue';
import Component from 'vue-class-component';
import Card from '../Card/index.vue';

@Component({
  components: {
    card: Card,
  },
})

export default class CardList extends Vue {
    
}
