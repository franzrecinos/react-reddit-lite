const Config = {
  api: {
    domain: 'https://www.reddit.com',
    token: {
      path: '/api/v1/access_token',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa('-teRGaca-xWwVg' + ':'),
      },
      params: {
        grant_type: 'https://oauth.reddit.com/grants/installed_client',
        device_id: 'DO_NOT_TRACK_THIS_DEVICE',
      },
    },
    posts: {},
  },
};

export default Config;
