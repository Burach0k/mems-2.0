import { TOGGLE_LOADING } from 'Store/action_names';
import Axios from 'axios';
import { journalSearchResponse } from 'mocks/models';
import { GET_TAGS_CLOUD, GET_CARD_AT_TAGS } from 'Store/action_names';

export const actions = {
  [GET_CARD_AT_TAGS]: (context: any, data: any) => {
    context.commit(TOGGLE_LOADING, true);

    return Axios.post<journalSearchResponse[]>('http://imaph.bas-net.by:81/project.local/scripts/api_search.php', data)
    .then((data) => {
      context.commit(TOGGLE_LOADING, false);
      return data;
    });
  },

  [GET_TAGS_CLOUD]: (context: any) => {
    context.commit(TOGGLE_LOADING, true);
    return Axios.get('http://imaph.bas-net.by:81/project.local/scripts/api_tags.php').then( data => {
      context.commit(TOGGLE_LOADING, false);
      return data;
    });
  }
};
