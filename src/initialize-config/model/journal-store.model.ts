export interface JournalStore {
    loading: boolean,
    search: {
        titleTags: string[];
        wordsTags: string[];
        authTags: string[]; 
    }
}
