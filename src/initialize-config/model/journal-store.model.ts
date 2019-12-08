export class JournalStore {
  loading: boolean;
  search: {
    titleTags: string[];
    wordsTags: string[];
    authTags: string[];
  };
  buttonHeaderDisabled: boolean;
}
