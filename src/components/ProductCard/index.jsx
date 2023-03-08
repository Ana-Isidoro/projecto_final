import React from 'react';
import './styles.css';

const ProductCard = (props) => {
  const addItemToCart = async () => {
    const cart = window.localStorage.getItem('cart');
    if (cart) {
      const cartItems = JSON.parse(cart);
      const itemIndex = cartItems.findIndex(
        (item) => item.title === props.title
      );

      if (itemIndex !== -1) {
        cartItems[itemIndex].quantity = cartItems[itemIndex].quantity + 1;
        const newCartItems = JSON.stringify(cartItems);
        window.localStorage.setItem('cart', newCartItems);
      } else {
        const newItem = {
          title: props.title,
          price: props.price,
          quantity: 1,
        };
        const newCartItems = JSON.stringify([...cartItems, newItem]);
        window.localStorage.setItem('cart', newCartItems);
      }
    } else {
      const item = JSON.stringify([
        {title: props.title, price: props.price, quantity: 1},
      ]);
      window.localStorage.setItem('cart', item);
    }
  };

  return (
    <div className="productCard_container">
      <span className="productCard_buttonAdd" onClick={addItemToCart}>
        +
      </span>
      <img src={props.image} className="productCard_image" alt="product" />
      <p className="productCard_title">{props.title}</p>
      <p className="productCard_price">{props.price}€</p>
    </div>
  );
};

export default ProductCard;
