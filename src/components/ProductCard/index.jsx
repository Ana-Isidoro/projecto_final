import {Link} from 'react-router-dom';
import './styles.css';

const ProductCard = ({title, price, image, extras, onAddItem}) => {
  return (
    <div className="productCard_container">
      <span
        className="productCard_buttonAdd"
        onClick={() => onAddItem({title, image, price})}
      >
        +
      </span>
      <Link
        className="productCard_link"
        to="/product-details"
        state={{title, price, image, extras}}
      >
        <img src={image} className="productCard_image" alt="product" />
        <p className="productCard_title">{title}</p>
        <p className="productCard_price">{price?.toFixed(2)}€</p>
      </Link>
    </div>
  );
};

export default ProductCard;
