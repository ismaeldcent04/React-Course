import { cartSliceActions } from "../../store/cart-slice";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddtoCart = () => {
    const item = {
      id: product.id,
      description: product.description,
      price: product.price,
      title: product.title,
    };
    dispatch(cartSliceActions.addItem(item));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{product.title}</h3>
          <div className={classes.price}>${product.price.toFixed(2)}</div>
        </header>
        <p>{product.description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddtoCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
