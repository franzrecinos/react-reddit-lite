import Config from '../config';
import axios from 'axios';
import {isNil} from 'lodash';

export const RECEIVE_SUBREDDITS = 'RECEIVE_SUBREDDITS';
export const RECEIVE_SUBREDDITS_ERROR = 'RECEIVE_SUBREDDITS_ERROR';

export const recievePostsError = error => ({
  type: RECEIVE_SUBREDDITS_ERROR,
  error,
});

export const recievePosts = subreddits => ({
  type: RECEIVE_SUBREDDITS,
  subreddits,
});

export function fetchPosts(dispatch, token, search) {
  return function(dispatch) {
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
          let payload = response.data;
          dispatch(recievePosts(payload.data.children));
        }
      })
      .catch((error) => {
        dispatch(recievePostsError(error));
      });
  }
}