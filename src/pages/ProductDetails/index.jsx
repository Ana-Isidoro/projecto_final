import {useLocation} from 'react-router-dom';
import SearchBar from '../../components/SearchBar';
import CartButton from '../../components/CartButton';
import ExtraProductDropdown from '../../components/ExtraProductDropdown';
import './styles.css';

const ProductDetails = () => {
  const location = useLocation();
  const item = location.state;

  const cart = window.localStorage.getItem('cart');
  const cartItems = JSON.parse(cart);
  const totalItems = cartItems?.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0
  );

  const handleAddExtra = (extra) => {
    if (cart) {
      const itemIndex = cartItems.findIndex(
        (cartItem) => cartItem.title === item.title
      );

      if (itemIndex !== -1) {
        cartItems[itemIndex].extra = extra;
        const newCartItems = JSON.stringify(cartItems);
        window.localStorage.setItem('cart', newCartItems);
      } else {
        const newItem = {
          title: item.title,
          price: item.price,
          image: item.image,
          quantity: 1,
          extra,
        };
        const newCartItems = JSON.stringify([...cartItems, newItem]);
        window.localStorage.setItem('cart', newCartItems);
      }
    } else {
      const newItem = {
        title: item.title,
        price: item.price,
        image: item.image,
        quantity: 1,
        extra,
      };
      const newCartItems = JSON.stringify([newItem]);
      window.localStorage.setItem('cart', newCartItems);
    }
  };

  return (
    <div>
      <div className="productDetails_header">
        <SearchBar />
        <CartButton cartItemsQuantity={totalItems} />
      </div>
      <div>
        <img
          src={item.image}
          className="productDetails_image"
          alt="product"
        />
        <h1>
          <strong>{item.title} - </strong>
          <strong> {item.price}€</strong>
        </h1>
        {item?.extras?.length ? (
          <ExtraProductDropdown
            extras={item.extras}
            onAddExtra={handleAddExtra}
          />
        ) : null}
      </div>
    </div>
  );
};

export default ProductDetails;
