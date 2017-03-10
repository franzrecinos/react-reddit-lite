import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SubredditsList from '../components/SubredditsList';
import { fetchPosts } from '../actions/subredditsActions';

class Posts extends Component {
  componentWillMount() {
    const { dispatch, token } = this.props;
    dispatch(fetchPosts(dispatch, token, 'movies'));
  }

  render() {
    return (
      <ul className="demo-list-three mdl-list">
        {this.props.subreddits.map(subreddit =>
          <SubredditsList key={subreddit.data.id} post={subreddit}></SubredditsList>
        )}
      </ul>
    );
  }
}

Posts.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Posts);
