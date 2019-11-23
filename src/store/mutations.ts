import { JournalStore } from "Model/journal-store.model";
import { SET_KEYWORD_TAG } from "./action_names";

export const mutations = {
    [SET_KEYWORD_TAG](state: JournalStore, tag: string) {
        state.search.wordsTags = [tag];
    }
};
