import {useState} from 'react';
import SearchBar from '../../components/SearchBar';
import CartButton from '../../components/CartButton';
import ProductCard from '../../components/ProductCard';
import './styles.css';

const products = [
  {
    name: 'Hambúrguer',
    price: 3.99,
    img: 'https://res.cloudinary.com/dxqc90trp/image/upload/v1677328401/hamburguer_pf9ujw.jpg',
    extras: ['tomate', 'cebola'],
  },
  {
    name: 'Pizza',
    price: 9.99,
    img: 'https://res.cloudinary.com/dxqc90trp/image/upload/c_fill,h_200,w_200/v1677328401/pizza_ytzmfe.jpg',
    extras: ['extra queijo', 'sem queijo'],
  },
  {
    name: 'Tacos',
    price: 7.99,
    img: 'https://res.cloudinary.com/dxqc90trp/image/upload/c_fill,h_200,w_200/v1677329169/tacos_cegfnq.png',
    extras: ['cebola'],
  },
  {
    name: 'Salada',
    price: 5.99,
    img: 'https://res.cloudinary.com/dxqc90trp/image/upload/v1677328401/salade_oa868l.jpg',
    extras: [],
  },
  {
    name: 'Galinha frita',
    price: 8.99,
    img: 'https://res.cloudinary.com/dxqc90trp/image/upload/v1677328393/friedChiken_ry08ua.png',
    extras: [],
  },
  {
    name: 'Sushi',
    price: 12.99,
    img: 'https://res.cloudinary.com/dxqc90trp/image/upload/c_fill,h_200,w_200/v1677328401/sushi_xlwvbt.png',
    extras: [],
  },
  {
    name: 'Bife da casa',
    price: 19.99,
    img: 'https://res.cloudinary.com/dxqc90trp/image/upload/c_fill,h_200,w_200/v1677328401/steak_ojpohg.png',
    extras: [],
  },
  {
    name: 'Massa',
    price: 11.99,
    img: 'https://res.cloudinary.com/dxqc90trp/image/upload/c_fill,h_200,w_200/v1677328401/pasta_zypsxy.png',
    extras: [],
  },
  {
    name: 'Caldeirada',
    price: 17.99,
    img: 'https://res.cloudinary.com/dxqc90trp/image/upload/v1678234608/fish-mappas-1-a2f0235_vibpio.webp',
    extras: [],
  },
];

const ProductList = () => {
  const cart = window.localStorage.getItem('cart');
  const cartItems = JSON.parse(cart);
  const totalItems = cartItems?.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0
  );

  const [totalItemsInCart, setTotalItemsInCart] = useState(totalItems);

  const addItemToCart = ({title, price, image}) => {
    const cart = window.localStorage.getItem('cart');
    if (cart) {
      const cartItems = JSON.parse(cart);
      const itemIndex = cartItems.findIndex(
        (item) => item.title === title
      );

      if (itemIndex !== -1) {
        cartItems[itemIndex].quantity = cartItems[itemIndex].quantity + 1;
        const newCartItems = JSON.stringify(cartItems);
        window.localStorage.setItem('cart', newCartItems);
      } else {
        const newItem = {
          title,
          price,
          image,
          quantity: 1,
        };
        const newCartItems = JSON.stringify([...cartItems, newItem]);
        window.localStorage.setItem('cart', newCartItems);
      }

      const newTotalItems = cartItems.reduce(
        (accumulator, currentValue) => accumulator + currentValue.quantity,
        0
      );
      setTotalItemsInCart(newTotalItems);
    } else {
      const item = {
        title,
        price,
        image,
        quantity: 1,
      };
      window.localStorage.setItem('cart', JSON.stringify([item]));
      setTotalItemsInCart(1);
    }
  };

  return (
    <div className="home_container">
      <div className="home_header">
        <SearchBar />
        <CartButton cartItemsQuantity={totalItemsInCart} />
      </div>
      <div className="home_products_container">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            title={product.name}
            price={product.price}
            image={product.img}
            extras={product.extras}
            onAddItem={addItemToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
