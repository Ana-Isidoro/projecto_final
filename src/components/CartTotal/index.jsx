import React from 'react';
import './styles.css';

const CartTotal = (props) => {
  return (
    <div className="cartTotal_container">
      <p className="cartTotal_info">
        Total ({props.quantity} items):{' '}
        <span className="cartTotal_price">{props.price}€ </span>
      </p>
      <p className="cartTotal_checkout">Proceed to checkout</p>
    </div>
  );
};

export default CartTotal;
