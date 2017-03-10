import React, { Component } from 'react';
import Header from '../components/Header';
import Subreddits from '../containers/Subreddits';

class Home extends Component {

  render() {
    console.log(this.props)
    return (
    <div className="demo-layout-waterfall mdl-layout mdl-js-layout">
      <Header></Header>
      <main className="mdl-layout__content">
        <div className="page-content">
          <div className="mdl-grid">
            <div className="mdl-layout-spacer"></div>
            <div className="mdl-cell--middle mdl-cell--6-col">
              <Subreddits></Subreddits>
            </div>
            <div className="mdl-layout-spacer"></div>
          </div>
        </div>
      </main>
    </div>
    );
  }
}

export default Home;