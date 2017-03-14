// @flow
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/subredditsActions';
import { setSubredditUrl } from '../actions/subredditActions';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { isExpanded: false, expandedClass: '', searchTerm: '' };
    this.expandSearchInput = this.expandSearchInput.bind(this);
    this.getSearchTermValue = this.getSearchTermValue.bind(this);
    this.getSearchTerm = this.getSearchTerm.bind(this);
  }
  state: {
    isExpanded: boolean,
    expandedClass: string,
    searchTerm: string,
  };
  getSearchTerm(event) {
    const { dispatch, token, posts } = this.props;

    if (event.key === 'Enter' && event.target.value !== '') {
      dispatch(setSubredditUrl(dispatch, ''));
      dispatch(fetchPosts(dispatch, token, this.state.searchTerm, posts));
      this.setState({
        isExpanded: false,
        expandedClass: '',
      });
    }
  }
  getSearchTermValue(event: EventTarget) {
    const eventValue = event.target;
    if (eventValue instanceof HTMLInputElement) {
      this.setState({
        searchTerm: eventValue.value,
      });
    }
  }
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
  subreddit: PropTypes.string,
  token: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    subreddit: state.subreddit,
    token: state.token,
  };
};

export default connect(mapStateToProps)(Search);
