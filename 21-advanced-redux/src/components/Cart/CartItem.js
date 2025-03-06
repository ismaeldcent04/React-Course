import { cartSliceActions } from "../../store/cart-slice";
import classes from "./CartItem.module.css";

import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const { name: title, quantity, totalPrice: total, price, id } = item;

  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(cartSliceActions.removeItem(id));
  };

  const handleAddItem = (item) => {
    dispatch(cartSliceActions.addItem(item));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => handleRemoveItem(id)}>-</button>
          <button onClick={() => handleAddItem(item)}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
