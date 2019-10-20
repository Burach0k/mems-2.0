import { Vue } from 'vue-property-decorator'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserLock, faBook, faHashtag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import * as shareComponents from '../components';

library.add(faUserLock, faBook, faHashtag);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('new-header',shareComponents.header);
Vue.component('new-select',shareComponents.select);
Vue.component('new-input',shareComponents.input);
Vue.component('tag-list',shareComponents.tagList);
Vue.component('new-text-area',shareComponents.textArea);