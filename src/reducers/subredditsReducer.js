// @flow
import { RECEIVE_SUBREDDITS, INVALIDATE_SUBREDDITS } from '../actions/subredditsActions';
import initialState from './initialState';

export default function subredditsReducer(state: [] = initialState.subreddits, action: subredditsReducer) {
  switch (action.type) {
    case RECEIVE_SUBREDDITS:
    case INVALIDATE_SUBREDDITS:
      return action.subreddits;
    default:
      return state;
  }
}
