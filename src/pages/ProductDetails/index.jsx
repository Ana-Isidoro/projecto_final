import React from 'react';
import SearchBar from '../../components/SearchBar';
import CartButton from '../../components/CartButton';
import ExtraProductDropdown from '../../components/ExtraProductDropdown';
import CartButtonSmall from '../../components/CartButtonSmall';
import './styles.css';

const ProductDetails = (props) => {
  return (
    <div>
      <div className="productDetails_header">
        <SearchBar />
        <CartButton />
      </div>
      <div>
        <img
          src={props.image}
          className="productDetails_image"
          alt="product"
        />
        <h1>
          <strong>Panquecas</strong>
        </h1>
        <ExtraProductDropdown />
        <div className="productDetails_cartButtonSmall">
          <CartButtonSmall />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
