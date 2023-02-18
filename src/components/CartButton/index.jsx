import React from 'react';
import './styles.css';

const CartButton = (props) => {
  return (
    <button
      className="cartButton_container"
      onClick={() => alert('navegar para a pagina carrinho')}
    >
      <img
        src={require('../../images/cart_icon.png')}
        className="cartButton_icon"
        alt="cart"
      />
      <div className="cartButton_text">
        Carrinho ● {props.cartItemsQuantity || 0}
      </div>
    </button>
  );
};

export default CartButton;
