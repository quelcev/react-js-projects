import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { setAmount, setTotal } from "../features/cart/cartSlice";
import { useEffect } from "react";
import { formatter } from "../utils";
import { toggleModal } from "../features/modal/modalSlice";

const CartContainer = () => {
  const { cartItems, total, amount, isLoading } = useSelector(
    ({ cart }) => cart
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAmount());
    dispatch(setTotal());
  }, [cartItems, dispatch]);

  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
        {isLoading ? (
          <div className="loader"></div>
        ) : amount === 0 ? (
          <h4 className="empty-cart">is currently empty</h4>
        ) : (
          <>
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
                onClick={() => dispatch(toggleModal("show"))}
              >
                Clear Cart
              </button>
            </footer>
          </>
        )}
      </header>
    </section>
  );
};
export default CartContainer;
