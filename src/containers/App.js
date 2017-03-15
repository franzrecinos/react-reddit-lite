// @flow
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchAPIToken } from '../actions/tokenActions';
import Home from '../containers/Home';

export class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    // Wen component is mounted we fetch the API token
    dispatch(fetchAPIToken);
  }

  render() {
    const { token } = this.props;
    // Display home only if token is set, otherwise we display spinner
    if (token && token !== '') {
      return (
        <Home />
      );
    }
    return (
      <div className="mdl-spinner mdl-js-spinner is-active" />
    );
  }
}

App.propTypes = {
  token: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  dispatch: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    token: state.token,
    search: state.search,
  };
};

export default connect(mapStateToProps)(App);
