// @flow
import axios from 'axios';
import Config from '../config';

export const SET_SUBREDDIT = 'SET_SUBREDDIT';
export const GET_SUBREDDIT_POSTS = 'GET_SUBREDDIT_POSTS';
export const SET_POLL_INTERVAL = 'SET_POLL_INTERVAL';

// set subreddits state with an array of subreddits
export const setSubreddit = (subreddit: string) => ({
  type: SET_SUBREDDIT,
  subreddit,
});

// set subreddits posts state with an array of subreddits posts
export const getSubredditPosts = (subredditPosts: []) => ({
  type: GET_SUBREDDIT_POSTS,
  subredditPosts,
});

// set the poll interval for fetching posts
export const setPollInterval = (interval: number) => ({
  type: SET_POLL_INTERVAL,
  interval,
});

/**
 * fetchSubredditPosts() gets a list of subreddits posts from API
 * based on the passed subreddit url
 * @param dispatch
 * @param token
 * @param subreddit
 * @param setinterval
 * @returns {function()}
 */
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
      // TODO make global error handler
    });
  };
}

/**
 * setSubredditUrl() sets the subreddit url for posts fetching
 * @param dispatch
 * @param url
 * @returns {*}
 */
export function setSubredditUrl(dispatch: () => void, url: string) {
  return dispatch(setSubreddit(url));
}
