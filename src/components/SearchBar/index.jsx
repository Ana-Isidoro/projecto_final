import React, {useState} from 'react';
import './styles.css';

const SearchBar = () => {
  const [value, setValue] = useState('');

  return (
    <div className="searchBar_container">
      <div className="searchBar_input_container">
        <img
          src={require('../../images/search_icon.png')}
          className="searchBar_image"
          alt="Search"
        />
        <input
          value={value}
          type="text"
          className="searchBar_input"
          placeholder="Affordable Meals"
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
      </div>
      <button
        className="searchBar_button"
        onClick={() => {
          setValue('');
        }}
      >
        Limpar
      </button>
    </div>
  );
};

export default SearchBar;
