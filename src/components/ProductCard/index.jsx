import React from 'react';
import './styles.css';

const ProductCard = (props) => {
  return (
    <div
      className="productCard"
      onClick={() => alert('navegar para a pagina produto')}
    >
      <img src={props.image} className="productCard_image" alt="product" />
      <p className="title">{props.title}</p>
      <p className="price">{props.price}€</p>
    </div>
  );
};

export default ProductCard;
