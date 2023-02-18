import {useState} from 'react';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import CartCheckout from './pages/CartCheckout';
import './App.css';

function App() {
  return (
    <div className="app_container">
      <CartCheckout />
    </div>
  );
}

export default App;
