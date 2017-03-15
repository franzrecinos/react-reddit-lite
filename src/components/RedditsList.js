// @flow
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setSubredditUrl } from '../actions/subredditsActions';
import '../styles/subredditsList.scss';

@connect(store => ({
  token: store.token,
  interval: store.interval,
  subreddits: store.subreddits,
  subreddit: store.subreddit,
  subredditPosts: store.subredditPosts,
}))
class RedditsList extends Component {
  /**
   * setSubreddit() sets the global url path (r/subreddit) to fetch
   * based on passed-in url
   */
  setSubreddit(url) {
    const { dispatch } = this.props;
    dispatch(setSubredditUrl(dispatch, url));
  }
  render() {
    return (
      <li className="mdl-list__item mdl-list__item--three-line">
        <span className="mdl-list__item-primary-content">
          <i className="fa fa-reddit"></i>
          <a href="#" onClick={() => this.setSubreddit(this.props.subr.url)}>
            {this.props.subr.title}
          </a>
          <span className="mdl-list__item-text-body">
            { this.props.subr.public_description }
          </span>
        </span>
        </li>
    );
  }
}

export default RedditsList;
