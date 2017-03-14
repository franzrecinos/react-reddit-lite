// @flow
import { SET_SUBREDDIT, GET_SUBREDDIT_POSTS, SET_POLL_INTERVAL } from '../actions/subredditActions';
import initialState from './initialState';

export function subredditReducer(state: string = initialState.subreddit, action: subredditReducer) {
  switch (action.type) {
    case SET_SUBREDDIT:
      return action.subreddit;
    default:
      return state;
  }
}

export function subredditPostsReducer(
  state: [] = initialState.subredditPosts, action: subredditPostsReducer) {
  switch (action.type) {
    case GET_SUBREDDIT_POSTS:
      return action.subredditPosts;
    default:
      return state;
  }
}

export function intervalReducer(state: number = initialState.interval, action: intervalReducer) {
  switch (action.type) {
    case SET_POLL_INTERVAL:
      return action.interval;
    default:
      return state;
  }
}
