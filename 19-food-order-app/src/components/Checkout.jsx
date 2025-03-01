import { useContext } from "react";
import { Modal } from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import { Input } from "./UI/Input";
import { Button } from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import useHttp from "../hooks/useHttp";
import Error from "./Error";
import { useActionState } from "react";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
};

export const Checkout = () => {
  const { items, clearCart } = useContext(CartContext);
  const { progress, hideCheckout } = useContext(UserProgressContext);
  const cartTotal = items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  const {
    data,
    error,

    sendRequest,
    clearData,
  } = useHttp("http://localhost:3000/orders", requestConfig);

  const checkoutAction = async (prevState, fd) => {
    const customerData = Object.fromEntries(fd.entries());

    sendRequest(
      JSON.stringify({
        order: {
          items,
          customer: customerData,
        },
      })
    );
  };

  const [formState, formAction, pending] = useActionState(checkoutAction, null);

  const handleFinish = () => {
    hideCheckout();
    clearCart();
    clearData();
  };

  let actions = (
    <>
      <Button textOnly type="button" onClick={hideCheckout}>
        Close
      </Button>
      <Button>Submit order</Button>
    </>
  );

  if (pending) {
    actions = <span>Sending order data...</span>;
  }

  if (data && !error) {
    return (
      <Modal open={progress === "checkout"} onClose={hideCheckout}>
        <h2>Success!</h2>
        <p>Your order was submitted successfully.</p>
        <p>
          We will get back to you with more details via email within the next
          few minutes.
        </p>
        <p className="modal-actions">
          <Button onClick={handleFinish}>Okay</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal open={progress === "checkout"} onClose={hideCheckout}>
      <form action={formAction}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
        <Input label={"Full Name"} type="text" id="name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Post" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        {error && <Error title={"Failed to submit order"} message={error} />}
        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
};
