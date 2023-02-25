import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import './style.css';

const Menu = () => {
  return (
    <div>
      <Link to="/">
        <FontAwesomeIcon icon={faXmark} size={'5x'} color="black" />
      </Link>
      <div className="menu_buttons">
        <Link className="menu_button" to="/product-list">
          Encomenda online
        </Link>
        <Link className="menu_button">Reservas</Link>
        <Link className="menu_button" to="/contacts">
          Contactos
        </Link>
      </div>
    </div>
  );
};

export default Menu;
