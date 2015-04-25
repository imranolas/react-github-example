import React from 'react';
import SearchResult from './search-result';

export default React.createClass({
  displayName: 'SearchResults',
  render: function() {
    var users = this.props.items.map(function(user) {
      return (
        <li key={user.id}>
          <SearchResult user={user} />
        </li>
      );
    });

    return (
      <div className='search-results'>
        <ul>{users}</ul>
      </div>
    );
  }
});
