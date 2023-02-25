import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import './style.css';

const HomePage = () => {
  return (
    <div className="homePage_container">
      <div className="homePage_content_container">
        <Link to="/menu">
          <FontAwesomeIcon icon={faBars} size={'5x'} color="white" />{' '}
        </Link>
        <h1 className="homePage_title">Comida Boa</h1>
      </div>
    </div>
  );
};

export default HomePage;
