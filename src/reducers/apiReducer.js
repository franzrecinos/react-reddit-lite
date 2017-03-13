// @flow
import { LOADING_API } from '../actions/apiActions';
import initialState from './initialState';

export default function apiReducer(state = initialState.isLoading, action) {
  switch (action.type) {
    case LOADING_API:
      return action.isLoading;
    default:
      return state;
  }
}
