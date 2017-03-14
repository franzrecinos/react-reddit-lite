// @flow
import Config from '../config';
import axios from 'axios';

export const SET_SUBREDDIT = 'SET_SUBREDDIT';
export const SET_SUBREDDIT_ERROR = 'SET_SUBREDDIT_ERROR';
export const GET_SUBREDDIT_POSTS = 'GET_SUBREDDIT_POSTS';
export const SET_POLL_INTERVAL = 'SET_POLL_INTERVAL';

export const setSubredditError = (error: string) => ({
  type: SET_SUBREDDIT_ERROR,
  error,
});

export const setSubreddit = (subreddit: string) => ({
  type: SET_SUBREDDIT,
  subreddit,
});

export const getSubredditPosts = (subredditPosts: []) => ({
  type: GET_SUBREDDIT_POSTS,
  subredditPosts,
});

export const setPollInterval = (interval: number) => ({
  type: SET_POLL_INTERVAL,
  interval,
});

export function fetchSubredditPosts(dispatch: () => void, token: string, subreddit: string, setinterval: number) {
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
        if (setinterval === 0) {
          dispatch(setPollInterval(Config.poll.interval));
        }
      }
    })
    .catch((error) => {
      dispatch(setSubredditError(error));
    });
  };
}

export function setSubredditUrl(dispatch: () => void, url: string) {
  return dispatch(setSubreddit(url));
}
