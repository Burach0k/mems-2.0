import { JournalStore } from "Model/journal-store.model";
import { SET_KEYWORD_TAG, TOGGLE_LOADING } from "./action_names";

class st { //TODO пофиксить это)
    search: {
        wordsTags: Array<string>
    };
    loading: boolean
}
export const mutations = {
    [SET_KEYWORD_TAG](state: st, tag: string) {
        state.search.wordsTags = [tag];
    },
    [TOGGLE_LOADING](state: st, toggle: boolean) {
        state.loading = toggle;
    }
};
