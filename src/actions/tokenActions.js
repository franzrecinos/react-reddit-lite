// @flow
import axios from 'axios';
import { isNil } from 'lodash';
import Config from '../config';

export const RECEIVE_TOKEN = 'RECEIVE_TOKEN';

// receive token from oauth to make further requests
export const recieveToken = (token: string) => ({
  type: RECEIVE_TOKEN,
  token,
});

/**
 * fetchAPIToken gets the API token needed to make secure requests
 * @param dispatch
 * @returns {Promise<R>|Promise.<T>}
 */
export const fetchAPIToken = (dispatch: () => void) => {
  return axios({
    method: 'post',
    url: Config.api.token.domain + Config.api.token.path,
    headers: Config.api.token.headers,
    params: Config.api.token.params,
  })
    .then((response) => {
      if (response.data || response.status === 200) {
        switch (true) {
          case !isNil(response.data.access_token):
            dispatch(recieveToken(response.data.access_token));
            break;
          case !isNil(response.data.error):
            dispatch(recieveTokenError(response.data.error));
            break;
          default:
            dispatch(recieveTokenError('Unable to get API key'));
        }
      }
    })
    .catch((error) => {
      // TODO make global error handler
    });
};
