import Vuex, { StoreOptions } from 'vuex';
import Vue from 'vue';
import { JournalStore } from 'Model/journal-store.model';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

Vue.use(Vuex);

const storeProps: StoreOptions<JournalStore> = {
  state: {
    loading: false,
    search: {
      authTags: [],
      wordsTags: [],
      titleTags: [],
    }
  },
  getters, // Глобальные функции не меняющие стор, но делающие что-либо
  mutations, // Функции изменения состояния хранилища
  actions, // Асинхронные мутации
};

export const store = new Vuex.Store<JournalStore>(storeProps);
