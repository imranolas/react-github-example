import React from 'react';

export default React.createClass({
  displayName: 'SearchResult',
  render: function() {
    var user = this.props.user;
    return (
      <div className='search-result'>
        <img src={user.avatar_url} />
        <span>{user.login}</span>
      </div>
    );
  }
});
