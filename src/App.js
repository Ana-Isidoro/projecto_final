import {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import CartCheckout from './pages/CartCheckout';
import Menu from './pages/Menu';
import ProductCard from './components/ProductCard';
import Contacts from './pages/Contacts';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
      <div className="app_container">
        <Routes>
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/cart-checkout" element={<CartCheckout />} />
          <Route path="/test" element={<CartCheckout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
