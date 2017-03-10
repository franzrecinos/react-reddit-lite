import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPostsIfNeeded } from '../actions/postsActions';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { isExpanded: false, expandedClass: '', searchTerm: '' };
    this.expandSearchInput = this.expandSearchInput.bind(this);
    this.getSearchTermValue = this.getSearchTermValue.bind(this);
    this.getSearchTerm = this.getSearchTerm.bind(this);
  }

  getSearchTerm(event) {
    const { dispatch, token, posts } = this.props;

    if (event.key === 'Enter' && event.target.value !== '') {
      dispatch(fetchPostsIfNeeded(dispatch, token, this.state.searchTerm, posts));

      this.setState(prevState => ({
        isExpanded: false,
        expandedClass: '',
      }));
    }
  }
  getSearchTermValue() {
    this.setState(prevState => ({
      searchTerm: event.target.value,
    }));
  }
  expandSearchInput() {
    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded,
      expandedClass: prevState.isExpanded ? 'is-focused' : '',
      searchTerm: '',
    }));
  }
  render() {
    return (
      <div className={`mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label
       mdl-textfield--align-right ${this.state.expandedClass}`}>
        <label className="mdl-button mdl-js-button mdl-button--icon"
               htmlFor="subbredit">
          <i className="material-icons"
             onClick={this.expandSearchInput}>
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
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Search);