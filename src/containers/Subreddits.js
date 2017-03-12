import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SubredditsList from '../components/SubredditsList';
import { fetchPosts } from '../actions/subredditsActions';

class Posts extends Component {
  componentDidMount() {
    const { dispatch, token } = this.props;
    dispatch(fetchPosts(dispatch, token, 'movies'));
  }

  render() {
    return (
      <ul className="reddit-list-three mdl-list">
        {this.props.subreddits.map(subredditmain =>
          <SubredditsList key={subredditmain.data.id} subredditmain={subredditmain}></SubredditsList>
        )}
      </ul>
    );
  }
}

Posts.propTypes = {
  //subreddits: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  //token: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Posts);
