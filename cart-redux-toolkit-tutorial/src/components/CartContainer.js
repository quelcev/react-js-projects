import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { clearCart, setAmount, setTotal } from "../features/cart/cartSlice";
import { useEffect } from "react";
import { formatter } from "../utils";

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector(({ cart }) => cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAmount());
    dispatch(setTotal());
    // eslint-disable-next-line
  }, [cartItems]);

  if (amount === 0) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
        <div>
          {cartItems.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
        </div>
        <footer>
          <hr />
          <div className="cart-total">
            <h4>
              total <span>{formatter.format(total)}</span>
            </h4>
          </div>
          <button
            className="btn clear-btn"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </footer>
      </header>
    </section>
  );
};
export default CartContainer;
