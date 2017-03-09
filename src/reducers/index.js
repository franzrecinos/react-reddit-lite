import { combineReducers } from 'redux';
import { RECIEVE_TOKEN, RECIEVE_TOKEN_ERROR } from '../actions';

const apitoken = (state = '', action) => {
  switch (action.type) {
    case RECIEVE_TOKEN:
      return action.token;
    default:
      return state;
  }
};

const apierror = (state = '', action) => {
  switch (action.type) {
    case RECIEVE_TOKEN_ERROR:
      return action.error;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  apitoken,
  apierror,
});

export default rootReducer;
