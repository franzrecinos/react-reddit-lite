// @flow
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setSubredditUrl } from '../actions/subredditActions';
import '../styles/subredditsList.scss';

class SubredditsList extends Component {
  // constructor(props) {
  //   super(props);
  //   //this.setSubreddit = this.setSubreddit.bind(this);
  // }
  setSubreddit(url) {
    const { dispatch } = this.props;
    dispatch(setSubredditUrl(dispatch, url));
  }
  render() {
    return (
      <li className="mdl-list__item mdl-list__item--three-line">
        <span className="mdl-list__item-primary-content">
          <i className="fa fa-reddit"></i>
          <a href="#" onClick={() => this.setSubreddit(this.props.subr.url)}>
            {this.props.subr.title}
          </a>
          <span className="mdl-list__item-text-body">
            { this.props.subr.public_description }
          </span>
        </span>
        </li>
    )
  }
}
SubredditsList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  //subreddit: PropTypes.array,
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(SubredditsList);