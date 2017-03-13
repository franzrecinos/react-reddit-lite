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
    const { token, isLoading } = this.props;
    if (!token && isLoading) {
      <div className="mdl-spinner mdl-js-spinner is-active" />
    }
    if (token && !isLoading) {
      return (
        <Home />
      );
    }
    return (
      <div>Error</div>
    );
  }
}

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    token: state.token,
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps)(App);
