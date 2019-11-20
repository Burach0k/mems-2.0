import { Vue, Component } from 'vue-property-decorator';
import Header from 'Components/Header/index.vue';
import Footer from 'Components/Footer/index.vue';

@Component({
  components: {
    'new-footer': Footer,
    'new-header': Header,
  },
})
export default class PageContainer extends Vue {}
