import { combineReducers } from 'redux';
import tokenReducer from './tokenReducer';
import postsReducer from './postsReducer';

const rootReducer = combineReducers({
  token: tokenReducer,
  posts: postsReducer,
});

export default rootReducer;
