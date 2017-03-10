import Config from '../config';
import axios from 'axios';
import {isNil} from 'lodash';

export const RECIEVE_TOKEN = 'RECIEVE_TOKEN';
export const RECIEVE_TOKEN_ERROR = 'RECIEVE_TOKEN_ERROR';

export const recieveTokenError = error => ({
  type: RECIEVE_TOKEN_ERROR,
  error,
});

export const recieveToken = token => ({
  type: RECIEVE_TOKEN,
  token,
});

export const fetchAPIToken = dispatch => {
  return axios({
    method: 'post',
    url: Config.api.token.domain + Config.api.token.path,
    headers: Config.api.token.headers,
    params: Config.api.token.params,
  })
    .then((response) => {
      if (response.data || response.status === 200) {
        switch (true) {
          case !_.isNil(response.data.access_token):
            dispatch(recieveToken(response.data.access_token));
            break;
          case !_.isNil(response.data.error):
            dispatch(recieveTokenError(response.data.error));
            break;
          default:
            dispatch(recieveTokenError('Unable to get API key'));
        }
      }
    })
    .catch((error) => {
      dispatch(recieveTokenError(error));
    });
};
