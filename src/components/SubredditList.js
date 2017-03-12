import React, { Component, PropTypes } from 'react';
import Moment from 'react-moment';
//import { connect } from 'react-redux';
//import { setSubredditUrl } from '../actions/subredditActions';
import '../styles/subredditList.scss';

class SubredditList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.setSubreddit = this.setSubreddit.bind(this);
  // }
  // setSubreddit(url) {
  //   const { dispatch } = this.props;
  //   dispatch(setSubredditUrl(dispatch, url));
  // }
  render() {
    return (
      <li className="mdl-list__item mdl-list__item--three-line">
        <span className="mdl-list__item-primary-content">
          <i className="fa fa-picture-o"></i>
          <a href={this.props.post.url} target="_blank">
            {this.props.post.title}
          </a>
          <span className="mdl-list__item-text-body">
            <ul className="mdl-list__item-details-list">
              <li>
                <Moment fromNow unix ago>{this.props.post.created_utc}</Moment>
                <span> ago by </span>
                <span className="mdl-chip">
                    <span className="mdl-chip__text">{this.props.post.author}</span>
                </span>
              </li>
              <li>
                <a href={this.props.post.url} target="_blank">
                  {this.props.post.num_comments} comments
                </a>
              </li>
            </ul>
          </span>
        </span>
      </li>
    )
  }
}
// SubredditsList.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };
//
// const mapStateToProps = (state) => {
//   return state;
// };

export default SubredditList;
