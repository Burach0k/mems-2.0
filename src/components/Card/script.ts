import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Card extends Vue {
  private publickName: String; 
  private publickImg: String;
  private postingTime: String;
  private content: String;
}
