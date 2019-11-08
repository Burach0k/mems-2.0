import { Vue } from 'vue-property-decorator';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserLock, faBook, faHashtag, faMapMarkerAlt, faTty, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueI18n from 'vue-i18n';

import * as shareComponents from '../components';
import { DEFAULT_LOCALE, FALLBACK_LOCALE } from './localization/constants';
import ru from './localization/ru.json';

library.add(faUserLock, faBook, faHashtag, faMapMarkerAlt, faTty, faMailBulk);

// add shared component
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('new-select', shareComponents.select);
Vue.component('new-input', shareComponents.input);
Vue.component('tag-list', shareComponents.tagList);
Vue.component('new-text-area', shareComponents.textArea);

//setting locale
Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: DEFAULT_LOCALE,
  fallbackLocale: FALLBACK_LOCALE,
  messages: {
    ru,
  },
});
