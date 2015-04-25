import React from 'react';
import 'fetch';

// Expose React for dev tools
window.React = React;

// Components
import SearchResults from './search-results';


//
// The App component is the root of our React application.
// Other components will be rendered into it.
//

var App = React.createClass({
  displayName: 'App',
  getInitialState: function() {
    return {
      items: []
    };
  },
  onClick: function(e) {
    e.preventDefault();
    var searchTerm = this.refs.searchBar.getDOMNode().value;

    fetch('https://api.github.com/search/users?q=' + encodeURI(searchTerm))
    .then(function(response) { return response.json(); })
    .then(function(json) { this.setState(json); }.bind(this));
  },
  render: function() {
    return (
      <div className='main'>
        <form className='search-form'>
          <input className="search-input" type='text' ref='searchBar'/>
          <button className= 'search-button' onClick={this.onClick}>Search</button>
        </form>
        <SearchResults items={this.state.items} />
      </div>
    );
  }
});

React.render(<App />, document.body);
