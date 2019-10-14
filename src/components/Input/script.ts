import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    name: String,
    value: String,
    placeholder: String,
  },
})
export default class Input extends Vue {}
