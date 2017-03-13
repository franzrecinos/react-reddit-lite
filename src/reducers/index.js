// @flow
import { combineReducers } from 'redux';
import apiReducer from './apiReducer';
import tokenReducer from './tokenReducer';
import subredditsReducer from './subredditsReducer';
import { subredditReducer, subredditPostsReducer, intervalReducer } from './subredditReducer';

const rootReducer = combineReducers({
  isLoading: apiReducer,
  token: tokenReducer,
  subreddits: subredditsReducer,
  subreddit: subredditReducer,
  subredditPosts: subredditPostsReducer,
  interval: intervalReducer,
});

export default rootReducer;
