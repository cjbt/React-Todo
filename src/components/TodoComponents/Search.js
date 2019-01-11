import React from 'react';

const Search = props => {
  return (
    <form>
      <input
        type='text'
        placeholder='Search'
        name='searchText'
        onChange={props.handleChange}
      />
    </form>
  );
};

export default Search;
