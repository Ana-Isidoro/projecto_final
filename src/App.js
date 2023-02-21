import {useState} from 'react';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import CartCheckout from './pages/CartCheckout';
import './App.css';
import ProductCard from './components/ProductCard';
import Contacts from './pages/Contacts';

function App() {
  const image = require('./images/food/salade.jpg');
  return (
    <div className="app_container">
      <Contacts />
    </div>
  );
}

export default App;
