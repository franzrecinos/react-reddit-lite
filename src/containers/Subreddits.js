// @flow
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SubredditsList from '../components/SubredditsList';
import { fetchPosts } from '../actions/subredditsActions';

export class Subreddits extends Component {
  componentDidMount() {
    const { dispatch, token } = this.props;
    dispatch(fetchPosts(dispatch, token, 'movies'));
  }

  render() {
    if (this.props.subreddits.length > 0) {
      return (
        <ul className="reddit-list-three mdl-list">
          {this.props.subreddits.map(subr =>
            <SubredditsList key={subr.data.id} subr={subr.data}></SubredditsList>
          )}
        </ul>
      );
    }
    if (this.props.subreddits.length === 0) {
      return (
        <div>Sorry... No reddits were found with search term... ¯\_(ツ)_/¯</div>
      );
    }
  }
}

Subreddits.propTypes = {
  subreddits: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    subreddits: state.subreddits,
    token: state.token,
  };
};

export default connect(mapStateToProps)(Subreddits);
