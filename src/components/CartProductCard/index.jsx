import {Link} from 'react-router-dom';
import './styles.css';

const CartProductCard = ({
  price,
  title,
  image,
  quantity,
  onChangeQuantity,
  onDelete,
  extra,
}) => {
  const priceWithQuantity = price * quantity;

  return (
    <div className="cartProductCard_container">
      <Link
        className="cart_cartItem_link"
        to="/product-details"
        state={{
          title,
          price,
          image,
          extra,
        }}
      >
        <img src={image} className="cartProductCard_image" alt="product" />
      </Link>
      <div>
        <Link
          className="cart_cartItem_link"
          to="/product-details"
          state={{
            title,
            price,
            image,
            extra,
          }}
        >
          <h2>{title}</h2>
          <h4>{extra}</h4>
        </Link>
        <div className="cartProductCard_itemInfo">
          <input
            className="cartProductCard_input"
            value={quantity}
            type="number"
            id="quantity"
            name="quantity"
            min="0"
            max="100"
            onChange={(event) => {
              onChangeQuantity({
                title,
                quantity: parseInt(event.target.value, 10),
              });
            }}
          ></input>
          <button
            className="cartProductCard_remove"
            onClick={() => onDelete(title)}
          >
            Eliminar
          </button>
        </div>
      </div>
      <div className="cartProductCard_total">
        {priceWithQuantity?.toFixed(2)}€
      </div>
    </div>
  );
};

export default CartProductCard;
