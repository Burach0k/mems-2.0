import Vue from 'vue';
import Component from 'vue-class-component';
import Card from 'Components/Card/index.vue';

@Component({
  components: {
    card: Card,
  },
})

export default class Main extends Vue {
  public message = 'Hello there, Vue works!';
}
