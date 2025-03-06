import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./components/UI/Notification";
import { sendCartData } from "./store/cart-slice";

let loadNumber = 1;

function App() {
  const dispatch = useDispatch();
  const isCartShown = useSelector((state) => state.ui.isCartShown);
  const cart = useSelector((state) => state.cart.items);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    if (loadNumber < 2) {
      loadNumber++;
      return;
    }

    dispatch(sendCartData(cart));
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
