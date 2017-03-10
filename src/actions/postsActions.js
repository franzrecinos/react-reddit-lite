import Config from '../config';
import axios from 'axios';
import {isNil} from 'lodash';

export const RECIEVE_POSTS = 'RECIEVE_POSTS';
export const RECIEVE_POSTS_ERROR = 'RECIEVE_POSTS_ERROR';

export const recievePostsError = error => ({
  type: RECIEVE_POSTS_ERROR,
  error,
});

export const recievePosts = posts => ({
  type: RECIEVE_POSTS,
  posts,
});

// export const shouldFetchPosts = (dispatch, search, posts) => {
//
// }

export const fetchPosts = (dispatch, token, search) => {
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
        console.log('we here')
        dispatch(recievePosts(response.data.children));
      }
    })
    .catch((error) => {
      dispatch(recievePostsError(error));
    });
}
export const fetchPostsIfNeeded = (dispatch, token, search, posts) => {
  return dispatch(fetchPosts(dispatch, token, search));
}