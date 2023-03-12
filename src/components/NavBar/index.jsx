import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

const NavBar = () => {
  return (
    <div className="nav_bar_container">
      <Link className="nav_bar_homeLink" to="/">
        <div className="nav_bar_icon_container">
          <img
            className="nav_bar_image"
            src={
              'https://res.cloudinary.com/dxqc90trp/image/upload/v1678231735/unnamed-removebg-preview_wmwzv9.png'
            }
            alt="icon"
          />
          <span className="nav_bar_title">Comida Boa</span>
        </div>
      </Link>
      <ul className="nav_bar_list">
        <li>
          <Link className="nav_bar_listItem" to="/product-list">
            Encomendar
          </Link>
        </li>
        <li>
          <Link className="nav_bar_listItem" to="/reservations">
            Reservas
          </Link>
        </li>
        <li>
          <Link className="nav_bar_listItem" to="/contacts">
            Contactos
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
