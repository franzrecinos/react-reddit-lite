import { SET_SUBREDDIT } from '../actions/subredditActions';
import initialState from './initialState';

export default function subredditReducer(state = initialState.subreddit, action) {
  switch (action.type) {
    case SET_SUBREDDIT:
      return action.subreddit;
    default:
      return state;
  }
}