// @flow
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { Subreddits } from '../containers/Subreddits';
import Subreddit from '../containers/Subreddit';

export class Home extends Component {

  render() {

    const pageContent = (this.props.subreddit === '') ? <Subreddits></Subreddits> : <Subreddit></Subreddit>;
    return (
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <Header></Header>
      <main className="mdl-layout__content">
        <div className="page-content">
          <div className="mdl-grid">
            <div className="mdl-layout-spacer"></div>
            <div className="mdl-cell--middle mdl-cell--6-col">
              { pageContent }
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