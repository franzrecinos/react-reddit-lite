import Config from '../config';
import axios from 'axios';

export const REQUEST_TOKEN = 'REQUEST_TOKEN';
export const RECIEVE_TOKEN = 'RECIEVE_TOKEN';

export const requestToken = token => ({
  type: REQUEST_TOKEN,
  token,
});

export const recieveToken = token => ({
  type: RECIEVE_TOKEN,
  token,
});

const fetchToken = dispatch => {
  // return fetch(
  //   Config.domain + Config.api.token.path, {
  //     method: 'post',
  //     headers: Config.api.token.headers,
  //     body: Config.api.token.params,
  //   },
  // )
  // .then(response => response.json())
  // .then(json => dispatch(recieveToken(json)));
  axios.post('${Config.domain Config.api.token.path}', {
    headers: Config.api.token.headers,
    data: Config.api.token.params,
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const fetchTokenIfNeeded = token => (dispatch, getState) => {
  if(typeof token === 'undefined') {
    return dispatch(fetchToken());
  }
}
