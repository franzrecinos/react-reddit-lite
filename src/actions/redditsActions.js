// @flow
import axios from 'axios';
import Config from '../config';

export const RECEIVE_REDDITS = 'RECEIVE_REDDITS';
export const INVALIDATE_REDDITS = 'INVALIDATE_REDDITS';
export const SET_REDDITS_SEARCH_TERM = 'SET_REDDITS_SEARCH_TERM';

// set reddits state with an array of reddits
export const recievePosts = (reddits: []) => ({
  type: RECEIVE_REDDITS,
  reddits,
});

// reset reddits state
export const invalidateReddits = (reddits: []) => ({
  type: INVALIDATE_REDDITS,
  reddits,
});

// set reddits search term
export const setRedditsSearchTerm = (search: string) => ({
  type: SET_REDDITS_SEARCH_TERM,
  search,
});

/**
 * fetchReddits() gets a list of reddits based on the passed search term
 * @param dispatch
 * @param token
 * @param search
 * @returns {function()}
 */
export function fetchReddits(dispatch: () => {}, token: string, search: string) {
  dispatch(setRedditsSearchTerm(search));
  return () => {
    axios({
      method: 'get',
      url: Config.api.posts.domain + Config.api.posts.path,
      headers: {
        'Authorization': 'bearer ' + token,
      },
      params: {
        q: search,
        limit: 25,
        sort: 'relevance',
      },
    })
    .then((response) => {
      if (response.data || response.status === 200) {
        const payload = response.data;
        dispatch(recievePosts(payload.data.children));
      }
    })
    .catch((error) => {
      // TODO make global error handler
    });
  };
}
