import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setSubredditUrl } from '../actions/subredditActions';
import '../styles/subredditsList.scss';

class SubredditsList extends Component {
  constructor(props) {
    super(props);
    this.setSubreddit = this.setSubreddit.bind(this);
  }
  setSubreddit(url) {
    const { dispatch, token } = this.props;
    //dispatch(setSubredditUrl(dispatch, url));
  }
  render() {
    const { dispatch, token } = this.props;
    return (
      <li className="mdl-list__item mdl-list__item--three-line">
        <span className="mdl-list__item-primary-content">
          <i className="fa fa-reddit"></i>
          <a href="#" onClick={dispatch(setSubredditUrl(dispatch, this.props.post.data.url))}>
            {this.props.post.data.title}
            </a>
          <span className="mdl-list__item-text-body">
            { this.props.post.data.public_description }
          </span>
        </span>
        </li>
    )
  }
}
SubredditsList.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(SubredditsList);