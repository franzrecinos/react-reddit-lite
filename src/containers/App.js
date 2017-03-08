// @flow
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchTokenIfNeeded } from '../actions';

class App extends Component {

  componentDidMount() {
    const { token, dispatch } = this.props;
    dispatch(fetchTokenIfNeeded(token));
  }

  render() {
    const { token } = this.props;
    return (
      <div>{ token }</div>
    );
  }
}

App.propTypes = {
  token: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const { token } = state;
  return { token };
};

export default connect(mapStateToProps)(App);
