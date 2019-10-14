import Vue from 'vue';
import Component from 'vue-class-component';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

@Component({
  components: {
    'new-select': vSelect,
  },
  props: {
    name: String,
    options: Array,
  },
})
export default class Select extends Vue {}
