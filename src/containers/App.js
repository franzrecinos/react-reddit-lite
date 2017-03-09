// @flow
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchAPIToken } from '../actions';

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAPIToken);
  }

  render() {
    const { apitoken } = this.props;
    return (
      <div>{ apitoken }</div>
    );
  }
}

App.propTypes = {
  apitoken: PropTypes.string.isRequired,
  error: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    apitoken: state.apitoken,
    error: state.error,
  };
};

export default connect(mapStateToProps)(App);
