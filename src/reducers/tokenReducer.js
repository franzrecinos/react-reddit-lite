import { RECIEVE_TOKEN } from '../actions/tokenActions';
import initialState from './initialState';

export default function tokenReducer(state = initialState.token, action) {
  switch (action.type) {
    case RECIEVE_TOKEN:
      return action.token;
    default:
      return state;
  }
}
