// @flow
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchReddits } from '../actions/redditsActions';
import { setSubredditUrl, setPollInterval, getSubredditPosts } from '../actions/subredditsActions';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { isExpanded: false, expandedClass: '', searchTerm: '' };
    this.expandSearchInput = this.expandSearchInput.bind(this);
    this.getSearchTermValue = this.getSearchTermValue.bind(this);
    this.getSearchTerm = this.getSearchTerm.bind(this);
  }

  // This is for flow since is a local state not part of store
  state: {
    isExpanded: boolean,
    expandedClass: string,
    searchTerm: string,
  };

  /**
   * getSearchTerm() fetches reddits based on searchTerm state
   * and resets the global url, interval and subreddits
   * based on the passed-in event from input field
   * @param event
   */
  getSearchTerm(event) {
    const { dispatch, token } = this.props;

    if (event.key === 'Enter' && event.target.value !== '') {
      dispatch(setSubredditUrl(dispatch, ''));
      dispatch(fetchReddits(dispatch, token, this.state.searchTerm));
      dispatch(setPollInterval(0));
      dispatch(getSubredditPosts([]));
      this.setState({
        isExpanded: false,
        expandedClass: '',
      });
    }
  }

  /**
   * getSearchTermValue() sets the searchTerm state
   * based on the passed-in event from input field
   * @param event
   */
  getSearchTermValue(event: EventTarget) {
    const eventValue = event.target;
    if (eventValue instanceof HTMLInputElement) {
      this.setState({
        searchTerm: eventValue.value,
      });
    }
  }

  /**
   * expandSearchInput() expands the search field by setting it's states
   */
  expandSearchInput() {
    this.setState({
      isExpanded: true,
      expandedClass: 'is-focused',
      searchTerm: '',
    });
  }
  render() {
    return (
      <div className={`mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label
       mdl-textfield--align-right ${this.state.expandedClass}`}>
        <label className="mdl-button mdl-js-button mdl-button--icon"
               htmlFor="subbredit">
          <i className="material-icons"
             onClick={this.expandSearchInput}
          >
            search
          </i>
        </label>
        <div className="mdl-textfield__expandable-holder">
          <input className="mdl-textfield__input"
                 type="text"
                 name="subreddit"
                 id="subbredit"
                 value={this.state.searchTerm}
                 onChange={this.getSearchTermValue}
                 onKeyPress={this.getSearchTerm}
          />
        </div>
      </div>
    );
  }
}
Search.propTypes = {
  token: PropTypes.string.isRequired,
  subreddit: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    token: state.token,
    subreddit: state.subreddit,
  };
};
export default connect(mapStateToProps)(Search);
