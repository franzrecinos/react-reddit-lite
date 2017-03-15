// @flow
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import RedditsList from '../components/RedditsList';
import { fetchReddits } from '../actions/redditsActions';

export class Reddits extends Component {
  componentDidMount() {
    const { dispatch, token, search } = this.props;
    // fetch initial reddits with default search value (movies)
    dispatch(fetchReddits(dispatch, token, search));
  }

  render() {
    // if we have no reddits we display a spinner otherwise we display a list of reddits
    if (this.props.reddits.length > 0) {
      return (
        <ul className="reddit-list-three mdl-list">
          {this.props.reddits.map(subr =>
            <RedditsList key={subr.data.id} subr={subr.data}></RedditsList>
          )}
        </ul>
      );
    }
    if (this.props.reddits.length === 0) {
      return (
        <div>Sorry... No reddits were found with search term... ¯\_(ツ)_/¯</div>
      );
    }
  }
}

Reddits.propTypes = {
  reddits: PropTypes.array.isRequired,
  search: PropTypes.string,
  token: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    reddits: state.reddits,
    search: state.search,
    token: state.token,
  };
};

export default connect(mapStateToProps)(Reddits);
