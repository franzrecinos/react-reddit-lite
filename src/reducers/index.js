import { combineReducers } from 'redux';
import tokenReducer from './tokenReducer';
import subredditsReducer from './subredditsReducer';
import subredditReducer from './subredditReducer';

const rootReducer = combineReducers({
  token: tokenReducer,
  subreddits: subredditsReducer,
  subreddit: subredditReducer,
});

export default rootReducer;
