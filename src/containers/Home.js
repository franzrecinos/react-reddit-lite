// @flow
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Reddits from './Reddits';
import Subreddits from '../containers/Subreddits';

export class Home extends Component {

  render() {
    // If we have no subreddit path (/r/subreddit) we display a list of Reddits base on search term
    const pageContent = (this.props.subreddit === '') ? <Reddits></Reddits> : <Subreddits></Subreddits>;
    return (
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <Header></Header>
      <main className="mdl-layout__content">
        <div className="page-content">
          <div className="mdl-grid">
            <div className="mdl-layout-spacer"></div>
            <div className="mdl-cell--middle mdl-cell--6-col">
              {pageContent}
            </div>
            <div className="mdl-layout-spacer"></div>
          </div>
        </div>
      </main>
    </div>
    );
  }
}
Home.propTypes = {
  subreddit: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    subreddit: state.subreddit,
  };
};

export default connect(mapStateToProps)(Home);
