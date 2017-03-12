import { combineReducers } from 'redux';
import tokenReducer from './tokenReducer';
import subredditsReducer from './subredditsReducer';
import { subredditReducer, subredditPostsReducer, intervalReducer } from './subredditReducer';

const rootReducer = combineReducers({
  token: tokenReducer,
  subreddits: subredditsReducer,
  subreddit: subredditReducer,
  subredditPosts: subredditPostsReducer,
  interval: intervalReducer,
});

export default rootReducer;
