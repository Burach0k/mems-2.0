import { Vue, Component } from 'vue-property-decorator';
import { TOGGLE_LOADING } from 'Store/action_names';

@Component({
  name: 'App',
})
export default class App extends Vue {
  loading: boolean = false;

  created() {
    this.$store.subscribe((store) => {
      if (store.type === TOGGLE_LOADING) {
        this.loading = store.payload;
      }
    });
  }
}
