import React from 'react';

import './styles.css';

const SearchBar = () => {
  return (
    <div className="search_bar_container">
      <div>
        <img
          src={require('../../images/search_icon.png')}
          className="search_bar_image"
          alt="Search"
        />
        <input
          type="text"
          className="search_bar_input"
          placeholder="Affordable Meals"
        />
      </div>
      <button className="search_bar_button" onClick={() => alert('test')}>
        Limpar
      </button>
    </div>
  );
};

export default SearchBar;
