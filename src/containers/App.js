// @flow
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { fetchAPIToken } from '../actions/tokenActions';
import Home from '../containers/Home';

export class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAPIToken);
  }

  const store = configureStore();

  render() {
    const { token } = this.props;
    if (token) {
      return (
        <Provider store={store}>
          <Home />
        </Provider>
      );
    }
    return (
      <div className="mdl-spinner mdl-js-spinner is-active" />
    );
  }
}

App.propTypes = {
  //isLoading: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    token: state.token,
    //isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps)(App);
