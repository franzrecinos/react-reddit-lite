// @flow
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchAPIToken } from '../actions/tokenActions';
import Home from '../containers/Home';

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAPIToken);
  }

  render() {
    const { token, subreddit } = this.props;
      if (token) {
        return (
          <Home></Home>
        );
      }
    return (
      <div>Error</div>
    );
  }
}

App.propTypes = {
  token: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

export default connect(mapStateToProps)(App);
