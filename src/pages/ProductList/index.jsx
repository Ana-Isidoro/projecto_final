import React from 'react';
import SearchBar from '../../components/SearchBar';
import CartButton from '../../components/CartButton';
import ProductCard from '../../components/ProductCard';
import ExtraProductDropDown from '../../components/ExtraProductDropdown';
import CartButtonSmall from '../../components/CartButtonSmall';
import './styles.css';

const ProductList = () => {
  const products = [
    {
      name: 'Hamburger',
      price: 3.99,
      img: 'https://res.cloudinary.com/dxqc90trp/image/upload/v1677328401/hamburguer_pf9ujw.jpg',
      extras: ['água', 'sumo'],
    },
    {
      name: 'Pizza',
      price: 9.99,
      img: 'https://res.cloudinary.com/dxqc90trp/image/upload/c_fill,h_200,w_200/v1677328401/pizza_ytzmfe.jpg',
      extras: ['extra queijo', 'sumo'],
    },
    {
      name: 'Tacos',
      price: 7.99,
      img: 'https://res.cloudinary.com/dxqc90trp/image/upload/c_fill,h_200,w_200/v1677329169/tacos_cegfnq.png',
    },
    {
      name: 'Salad',
      price: 5.99,
      img: 'https://res.cloudinary.com/dxqc90trp/image/upload/v1677328401/salade_oa868l.jpg',
    },
    {
      name: 'Fried Chicken',
      price: 8.99,
      img: 'https://res.cloudinary.com/dxqc90trp/image/upload/v1677328393/friedChiken_ry08ua.png',
    },
    {
      name: 'Sushi',
      price: 12.99,
      img: 'https://res.cloudinary.com/dxqc90trp/image/upload/c_fill,h_200,w_200/v1677328401/sushi_xlwvbt.png',
    },
    {
      name: 'Steak',
      price: 19.99,
      img: 'https://res.cloudinary.com/dxqc90trp/image/upload/c_fill,h_200,w_200/v1677328401/steak_ojpohg.png',
    },
    {
      name: 'Pasta',
      price: 11.99,
      img: 'https://res.cloudinary.com/dxqc90trp/image/upload/c_fill,h_200,w_200/v1677328401/pasta_zypsxy.png',
    },
    {
      name: 'Fish',
      price: 17.99,
      img: 'https://res.cloudinary.com/dxqc90trp/image/upload/v1678234608/fish-mappas-1-a2f0235_vibpio.webp',
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

export default ProductList;
