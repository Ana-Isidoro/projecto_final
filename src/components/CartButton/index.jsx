import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

const CartButton = (props) => {
  return (
    <Link to="/cart" className="cartButton_link">
      <button className="cartButton_container">
        <img
          src={require('../../images/cart_icon.png')}
          className="cartButton_icon"
          alt="cart"
        />
        <div className="cartButton_text">
          Carrinho ● {props.cartItemsQuantity || 0}
        </div>
      </button>
    </Link>
  );
};

export default CartButton;
