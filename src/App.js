import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import CartCheckout from './pages/CartCheckout';
import Contacts from './pages/Contacts';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      <div className="app_container">
        <Routes>
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/cart-checkout" element={<CartCheckout />} />
          <Route path="/test" element={<CartCheckout />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
