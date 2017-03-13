// @flow
import Config from '../config';
import axios from 'axios';
import {isNil} from 'lodash';
import { loadingApiToggle } from './apiActions';

export const RECEIVE_SUBREDDITS = 'RECEIVE_SUBREDDITS';
export const RECEIVE_SUBREDDITS_ERROR = 'RECEIVE_SUBREDDITS_ERROR';

export const recievePostsError = (error: string) => ({
  type: RECEIVE_SUBREDDITS_ERROR,
  error,
});

export const recievePosts = (subreddits: []) => ({
  type: RECEIVE_SUBREDDITS,
  subreddits,
});

export function fetchPosts(dispatch: () => void, token: string, search: string) {
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
      dispatch(recievePostsError(error));
    });
  };
}
