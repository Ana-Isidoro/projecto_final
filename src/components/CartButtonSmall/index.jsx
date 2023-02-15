import React from 'react';
import './styles.css';

const CartButtonSmall = () => {
  return (
    <button
      className="cartButtonSmall_container"
      onClick={() => alert('navegar para a pagina carrinho')}
    >
      <img
        src={require('../../images/cart_icon.png')}
        className="cartButtonSmall_icon"
        alt="cart"
      />
    </button>
  );
};

export default CartButtonSmall;
