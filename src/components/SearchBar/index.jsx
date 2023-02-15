import React from 'react';
import './styles.css';

const SearchBar = (props) => {
  console.log(props.children);
  return (
    <div className="searchBar_container">
      <div className="searchBar_input_container">
        <img
          src={require('../../images/search_icon.png')}
          className="searchBar_image"
          alt="Search"
        />
        <input
          type="text"
          className="searchBar_input"
          placeholder="Affordable Meals"
        />
      </div>
      <button className="searchBar_button" onClick={() => alert('test')}>
        Limpar
      </button>
    </div>
  );
};

export default SearchBar;
