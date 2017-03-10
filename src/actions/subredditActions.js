import Config from '../config';
import axios from 'axios';
import {isNil} from 'lodash';

export const SET_SUBREDDIT = 'SET_SUBREDDIT';
export const SET_SUBREDDIT_ERROR = 'SET_SUBREDDIT_ERROR';

export const setSubredditError = error => ({
  type: SET_SUBREDDIT_ERROR,
  error,
});

export const setSubreddit = subreddit => ({
  type: SET_SUBREDDIT,
  subreddit,
});

export function setSubredditUrl(dispatch, url) {
  return dispatch(setSubreddit(url));
};