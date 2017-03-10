import React, { Component } from 'react';
import Header from '../components/Header';

class SubredditPosts extends Component {

  render() {
    return (
      <div className="demo-layout-waterfall mdl-layout mdl-js-layout">
        <Header></Header>
        <main className="mdl-layout__content">
          <div className="page-content">
            <div className="mdl-grid">
              <div className="mdl-layout-spacer"></div>
              <div className="mdl-cell--middle mdl-cell--6-col">
                Content here please
              </div>
              <div className="mdl-layout-spacer"></div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default SubredditPosts;