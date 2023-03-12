import {Link} from 'react-router-dom';
import './styles.css';

const CartTotal = (props) => {
  return (
    <div className="cartTotal_container">
      <p className="cartTotal_info">
        Total ({props.quantity} items):{' '}
        <span className="cartTotal_price">
          {props.price?.toFixed(2)}€{' '}
        </span>
      </p>
      <Link to="/cart-checkout" className="cartTotal_checkout">
        Ir para o checkout
      </Link>
    </div>
  );
};

export default CartTotal;
