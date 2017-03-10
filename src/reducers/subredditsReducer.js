import { RECEIVE_SUBREDDITS } from '../actions/subredditsActions';
import initialState from './initialState';

export default function subredditsReducer(state = initialState.subreddits, action) {
  switch (action.type) {
    case RECEIVE_SUBREDDITS:
      return action.subreddits;
    default:
      return state;
  }
}
