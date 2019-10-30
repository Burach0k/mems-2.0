import { Vue, Component, Prop } from 'vue-property-decorator'
import CountryFlag from 'vue-country-flag'

@Component({
    components: {
        'country-flag': CountryFlag,
    }
})
export default class HeaderComponent extends Vue {
    @Prop(Array) languages: string[];
    @Prop(String) selectedLanguage:string;

   public setLanguage(language:string):void{
    this.$emit('setLanguage', language);
    }
}