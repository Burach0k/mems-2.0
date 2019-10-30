declare module '*.vue' {
    import Vue from 'vue'
    export default Vue
}

declare module '*.json' {
    import { LocaleMessages } from 'vue-i18n';
    const translations: LocaleMessages; 
    export default translations;
}

declare module '@johmun/vue-tags-input';