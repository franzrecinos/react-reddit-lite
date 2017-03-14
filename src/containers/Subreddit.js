// @flow
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SubredditList from '../components/SubredditList';
import { fetchSubredditPosts } from '../actions/subredditActions';
import { invalidateSubreddits } from '../actions/subredditsActions';
import Config from '../config';

class Subreddit extends Component {
  componentDidMount() {
    const { dispatch, token, subreddit } = this.props;
    dispatch(invalidateSubreddits([]));
    dispatch(fetchSubredditPosts(dispatch, token, subreddit, 0));
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps)
    // const filledSubredditPosts = nextProps.subredditPosts;
    // const { dispatch } = this.props;
    // console.log(filledSubredditPosts)
    // if (filledSubredditPosts.length > 0) {
    //   dispatch(invalidateSubreddits([]));
    // }
  }

  componentDidUpdate() {
    const { dispatch, token, subreddit, interval } = this.props;
    if (interval > 0) {
      setInterval(() => {
        dispatch(fetchSubredditPosts(dispatch, token, subreddit, Config.poll.interval));
      }, interval);
    }
  }

  render() {
    return (
      <ul className="posts-list-three mdl-list">
        {this.props.subredditPosts.map((post, index) =>
          <SubredditList key={index} post={post.data}></SubredditList>
        )}
      </ul>
    );
  }
}

Subreddit.propTypes = {
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

export default connect(mapStateToProps)(Subreddit);
