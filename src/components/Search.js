import React, { Component } from 'react';
// import './Header.scss';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { isExpanded: false, expandedClass: '', searchTerm: '' };
    this.expandSearchInput = this.expandSearchInput.bind(this);
    this.getSearchTermValue = this.getSearchTermValue.bind(this);
    this.getSearchTerm = this.getSearchTerm.bind(this);
  }

  getSearchTerm(event) {
    console.log(event.target.value)
    if (event.key === 'Enter' && event.target.value !== '') {
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
