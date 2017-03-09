// @flow
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchAPIToken } from '../actions';
import Home from '../containers/Home';

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAPIToken);
  }

  render() {
    const { apitoken } = this.props;
      if (apitoken) {
        return (
          <Home></Home>
        );
      }
    return (
      <div>{ apitoken }</div>
    );
  }
}

App.propTypes = {
  apitoken: PropTypes.string.isRequired,
  apierror: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    apitoken: state.apitoken,
    apierror: state.apierror,
  };
};

export default connect(mapStateToProps)(App);
