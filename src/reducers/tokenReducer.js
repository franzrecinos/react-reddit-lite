// @flow
import { RECEIVE_TOKEN } from '../actions/tokenActions';
import initialState from './initialState';

export default function tokenReducer(state: string = initialState.token, action: tokenReducer) {
  switch (action.type) {
    case RECEIVE_TOKEN:
      return action.token;
    default:
      return state;
  }
}
