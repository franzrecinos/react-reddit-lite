// @flow
import { combineReducers } from 'redux';
import tokenReducer from './tokenReducer';
import { redditsReducer, searchReducer } from './redditsReducer';
import { subredditReducer, subredditPostsReducer, intervalReducer } from './subredditsReducer';

const rootReducer = combineReducers({
  token: tokenReducer,
  search: searchReducer,
  reddits: redditsReducer,
  subreddit: subredditReducer,
  subredditPosts: subredditPostsReducer,
  interval: intervalReducer,
});

export default rootReducer;
