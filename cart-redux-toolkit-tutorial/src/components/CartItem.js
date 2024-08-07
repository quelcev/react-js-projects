import { removeCartItem, toggleAmount } from "../features/cart/cartSlice";
import { ChevronDown, ChevronUp } from "../icons";
import { useDispatch } from "react-redux";
import { formatter } from "../utils";

const CartItem = ({ item }) => {
  const { id, img, title, price, amount } = item;
  const dispatch = useDispatch();

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">{formatter.format(price)}</h4>
        <button
          className="remove-btn"
          onClick={() => dispatch(removeCartItem({ id }))}
        >
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => dispatch(toggleAmount({ type: "increase", id }))}
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => dispatch(toggleAmount({ type: "decrease", id }))}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};
export default CartItem;
