// @flow
import { RECEIVE_REDDITS, INVALIDATE_REDDITS, SET_REDDITS_SEARCH_TERM } from '../actions/redditsActions';
import initialState from './initialState';

export function redditsReducer(state: [] = initialState.reddits, action: redditsReducer) {
  switch (action.type) {
    case RECEIVE_REDDITS:
    case INVALIDATE_REDDITS:
      return action.reddits;
    default:
      return state;
  }
}

export function searchReducer(state: [] = initialState.search, action: searchReducer) {
  switch (action.type) {
    case SET_REDDITS_SEARCH_TERM:
      return action.search;
    default:
      return state;
  }
}
