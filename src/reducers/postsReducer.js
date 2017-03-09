import { RECIEVE_POSTS, RECIEVE_POSTS_ERROR } from '../actions/postsActions';
import initialState from './initialState';

export default function tokenReducer(state = initialState.posts, action) {
  switch (action.type) {
    case RECIEVE_POSTS:
      return action.posts;
    case RECIEVE_POSTS_ERROR:
      return action.error;
    default:
      return state;
  }
};