import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./components/UI/Notification";
import { fecthData, sendCartData } from "./store/cart-actions";

let loadNumber = 1;

function App() {
  const dispatch = useDispatch();
  const isCartShown = useSelector((state) => state.ui.isCartShown);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fecthData());
  }, [dispatch]);

  useEffect(() => {
    if (loadNumber < 2) {
      loadNumber++;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <>
      <Layout>
        {notification && (
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
        )}
        {isCartShown && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
