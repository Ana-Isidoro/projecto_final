import React from 'react';
import './styles.css';

const ProductCard = (props) => {
  return (
    <div
      className="productCard_container"
      onClick={() => alert('navegar para a pagina produto')}
    >
      <div className="productCard_buttonAdd">+</div>
      <img src={props.image} className="productCard_image" alt="product" />
      <p className="productCard_title">{props.title}</p>
      <p className="productCard_price">{props.price}€</p>
    </div>
  );
};

export default ProductCard;
