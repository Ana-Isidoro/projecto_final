import React from 'react';
import SearchBar from '../../components/SearchBar';
import CartButton from '../../components/CartButton';
import ProductCard from '../../components/ProductCard';
import ExtraProductDropDown from '../../components/ExtraProductDropdown';
import './styles.css';

const Home = () => {
  const image = require('../../images/food/salade.jpg');
  return (
    <div className="home_container">
      {/* <SearchBar />
      <ProductCard image={image} title="Salada de Frango" price={3.1} />
      <CartButton cartItemsQuantity={8} />
      <CartButton hideText={true} />
   */}
      <ExtraProductDropDown />
    </div>
  );
};

export default Home;
