import {useState} from 'react';
import {Link} from 'react-router-dom';
import CartProductCard from '../../components/CartProductCard';
import CartTotal from '../../components/CartTotal';
import './styles.css';

const Cart = () => {
  const cart = localStorage.getItem('cart');
  const cartItems = JSON.parse(cart);
  const totalItems = cartItems?.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0
  );
  const totalPrice = cartItems?.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );

  const [totalItemsInCart, setTotalItemsInCart] = useState(totalItems);
  const [totalPriceInCart, setTotalPriceInCart] = useState(totalPrice);
  const [cartItemsList, setCartItemsList] = useState(cartItems);

  const handleOnChange = ({title, quantity}) => {
    const cart = window.localStorage.getItem('cart');
    const cartItems = JSON.parse(cart);

    const itemIndex = cartItems.findIndex((item) => item.title === title);

    if (itemIndex !== -1) {
      cartItems[itemIndex].quantity = quantity;
      const newCartItems = JSON.stringify(cartItems);

      const newTotalItems = cartItems.reduce(
        (accumulator, currentValue) => accumulator + currentValue.quantity,
        0
      );
      const newTotalPrice = cartItems.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.price * currentValue.quantity,
        0
      );

      setCartItemsList(cartItems);
      setTotalItemsInCart(newTotalItems);
      setTotalPriceInCart(newTotalPrice);

      window.localStorage.setItem('cart', newCartItems);
    }
  };

  const onDeleteHandler = (title) => {
    const cart = window.localStorage.getItem('cart');
    const cartItems = JSON.parse(cart);
    const newCartItems = cartItems.filter((item) => item.title !== title);

    const newTotalItems = newCartItems.reduce(
      (accumulator, currentValue) => accumulator + currentValue.quantity,
      0
    );
    const newTotalPrice = newCartItems.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.price * currentValue.quantity,
      0
    );

    setCartItemsList(newCartItems);
    setTotalItemsInCart(newTotalItems);
    setTotalPriceInCart(newTotalPrice);

    const itemsToSet = JSON.stringify(newCartItems);
    window.localStorage.setItem('cart', itemsToSet);
  };

  return (
    <div className="cart_container">
      {cartItemsList?.length > 0 ? (
        <div>
          <div>
            {cartItemsList?.map((product) => (
              <CartProductCard
                key={product.title}
                title={product.title}
                price={product.price}
                image={product.image}
                extra={product?.extra}
                quantity={product.quantity}
                onChangeQuantity={handleOnChange}
                onDelete={onDeleteHandler}
              />
            ))}
          </div>
          <div className="cart_total_container">
            <CartTotal
              quantity={totalItemsInCart}
              price={totalPriceInCart}
            />
          </div>
        </div>
      ) : (
        <div>
          <h3>Sem Itens no Cart</h3>
          <Link to="/product-list">Voltar para a lista de Produtos</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
