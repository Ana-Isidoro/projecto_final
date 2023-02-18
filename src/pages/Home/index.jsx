import React from 'react';
import SearchBar from '../../components/SearchBar';
import CartButton from '../../components/CartButton';
import ProductCard from '../../components/ProductCard';
import ExtraProductDropDown from '../../components/ExtraProductDropdown';
import CartButtonSmall from '../../components/CartButtonSmall';
import './styles.css';

const Home = () => {
  const img = require('../../images/food/salade.jpg');
  const products = [
    {
      name: 'Hamburger',
      price: 3.99,
      img,
      extras: ['água', 'sumo'],
    },
    {
      name: 'Pizza',
      price: 9.99,
      img,
      extras: ['extra queijo', 'sumo'],
    },
    {
      name: 'Tacos',
      price: 7.99,
      img,
    },
    {
      name: 'Salad',
      price: 5.99,
      img,
    },
    {
      name: 'Fried Chicken',
      price: 8.99,
      img,
    },
    {
      name: 'Sushi',
      price: 12.99,
      img,
    },
    {
      name: 'Steak',
      price: 19.99,
      img,
    },
    {
      name: 'Pasta',
      price: 11.99,
      img,
    },
  ];
  return (
    <div className="home_container">
      <div className="home_header">
        <SearchBar />
        <CartButton />
      </div>
      <div className="home_products_container">
        {products.map((product) => (
          <ProductCard
            title={product.name}
            price={product.price}
            image={product.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
