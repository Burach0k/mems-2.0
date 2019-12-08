import { JournalStore } from "Model/journal-store.model";
import { SET_KEYWORD_TAG, TOGGLE_LOADING, CHANGE_HEADER_BUTTON } from "./action_names";

class st { //TODO пофиксить это)
    search: {
        wordsTags: Array<string>
    };
    buttonHeaderDisabled: boolean;
    loading: boolean
}
export const mutations = {
    [SET_KEYWORD_TAG](state: st, tag: string) {
        state.search.wordsTags = [tag];
    },
    [TOGGLE_LOADING](state: st, toggle: boolean) {
        state.loading = toggle;
    },
    [CHANGE_HEADER_BUTTON](state: st, toggle: boolean) {
        state.buttonHeaderDisabled = toggle;
    }
};
