import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import CartCheckout from './pages/CartCheckout';
import Contacts from './pages/Contacts';
import Reservations from './pages/Reservations';
import NavBar from './components/NavBar';
import './App.css';

const PageWrapper = ({children}) => {
  return <div className="app_container">{children}</div>;
};

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      <Routes>
        <Route
          path="/product-list"
          element={
            <PageWrapper>
              <ProductList />
            </PageWrapper>
          }
        />
        <Route
          path="/product-details"
          element={
            <PageWrapper>
              <ProductDetails />
            </PageWrapper>
          }
        />
        <Route
          path="/contacts"
          element={
            <PageWrapper>
              <Contacts />
            </PageWrapper>
          }
        />
        <Route
          path="/cart-checkout"
          element={
            <PageWrapper>
              <CartCheckout />
            </PageWrapper>
          }
        />
        <Route
          path="/cart"
          element={
            <PageWrapper>
              <Cart />
            </PageWrapper>
          }
        />
        <Route
          path="/reservations"
          element={
            <PageWrapper>
              <Reservations />
            </PageWrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
