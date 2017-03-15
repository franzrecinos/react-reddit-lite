// @flow
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SubredditList from '../components/SubredditList';
import { fetchSubredditPosts } from '../actions/subredditsActions';
import { invalidateReddits } from '../actions/redditsActions';
import Config from '../config';

export class Subreddits extends Component {
  componentDidMount() {
    const { dispatch, token, subreddit } = this.props;
    // reset reddits list and fetch subreddits posts
    dispatch(invalidateReddits([]));
    dispatch(fetchSubredditPosts(dispatch, token, subreddit, 0));
  }

  componentDidUpdate() {
    const { dispatch, token, subreddit, interval } = this.props;
    // if the state of interval is greater than 0 we set an interval and refetch subreddits posts
    if (interval > 0) {
      setInterval(() => {
        dispatch(fetchSubredditPosts(dispatch, token, subreddit, Config.poll.interval));
      }, interval);
    }
  }

  render() {
    if (this.props.subredditPosts.length > 0) {
      return (
        <ul className="posts-list-three mdl-list">
          {this.props.subredditPosts.map((post, index) =>
            <SubredditList key={index} post={post.data}></SubredditList>
          )}
        </ul>
      );
    }

    if (this.props.subredditPosts.length === 0) {
      return (
        <div>Sorry... No subreddits were found with search term... ¯\_(ツ)_/¯</div>
      );
    }

  }
}

Subreddits.propTypes = {
  token: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  interval: PropTypes.number,
  subreddit: PropTypes.string,
  subredditPosts: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    token: state.token,
    interval: state.interval,
    subreddit: state.subreddit,
    subredditPosts: state.subredditPosts,
  };
};

export default connect(mapStateToProps)(Subreddits);
