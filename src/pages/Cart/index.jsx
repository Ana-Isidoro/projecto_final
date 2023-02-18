import React from 'react';
import CartProductCard from '../../components/CartProductCard';
import CartTotal from '../../components/CartTotal';

const Cart = () => {
  return (
    <div>
      {/* <CartProductCard title={'Salad'} price={10} /> */}
      <CartTotal quantity={0} price={100} />
    </div>
  );
};

export default Cart;
