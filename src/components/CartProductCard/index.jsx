import React, {useState} from 'react';
import './styles.css';

const CartProductCard = ({price, title, image}) => {
  const [value, setValue] = useState(100);
  const priceWithQuantity = price * value;

  return (
    <div className="cartProductCard_container">
      <img src={image} className="cartProductCard_image" alt="product" />
      <div>
        <h2>{title}</h2>
        <div className="cartProductCard_itemInfo">
          <input
            className="cartProductCard_input"
            value={value}
            type="number"
            id="quantity"
            name="quantity"
            min="0"
            max="100"
            onChange={(event) => setValue(event.target.value)}
          ></input>
          <button className="cartProductCard_remove">Eliminar</button>
        </div>
      </div>
      <div className="cartProductCard_total">{priceWithQuantity}€</div>
    </div>
  );
};

export default CartProductCard;
