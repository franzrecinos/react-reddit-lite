import Config from '../config';
import axios from 'axios';
import { loadingApiToggle } from './apiActions';

export const SET_SUBREDDIT = 'SET_SUBREDDIT';
export const SET_SUBREDDIT_ERROR = 'SET_SUBREDDIT_ERROR';
export const GET_SUBREDDIT_POSTS = 'GET_SUBREDDIT_POSTS';
export const SET_POLL_INTERVAL = 'SET_POLL_INTERVAL';

export const setSubredditError = error => ({
  type: SET_SUBREDDIT_ERROR,
  error,
});

export const setSubreddit = subreddit => ({
  type: SET_SUBREDDIT,
  subreddit,
});

export const getSubredditPosts = subredditPosts => ({
  type: GET_SUBREDDIT_POSTS,
  subredditPosts,
});

export const setPollInterval = interval => ({
  type: SET_POLL_INTERVAL,
  interval,
});

export function fetchSubredditPosts(dispatch, token, subreddit, setinterval) {
  //dispatch(loadingApiToggle(dispatch, true));
  return () => {
    axios({
      method: 'get',
      url: Config.api.posts.domain + subreddit,
      headers: {
        Authorization: 'bearer ' + token,
      },
      params: {
        limit: 25,
      },
    })
    .then((response) => {
      if (response.data || response.status === 200) {
        const payload = response.data;
        dispatch(getSubredditPosts(payload.data.children));
        //dispatch(loadingApiToggle(dispatch, false));
        if (setinterval) {
          dispatch(setPollInterval(Config.poll.interval));
          //dispatch(loadingApiToggle(dispatch, false));
        }
      }
    })
    .catch((error) => {
      dispatch(setSubredditError(error));
    });
  };
}

export function setSubredditUrl(dispatch, url) {
  return dispatch(setSubreddit(url));
}
