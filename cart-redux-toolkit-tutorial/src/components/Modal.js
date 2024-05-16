import { useDispatch } from "react-redux";
import { toggleModal } from "../features/modal/modalSlice";
import { clearCart } from "../features/cart/cartSlice";

const Modal = () => {
  const dispatch = useDispatch();

  const handleModalCancel = (e) => {
    const isModalContainer = e.target.classList.contains("modal-container");
    const isCancelBtn = e.target.classList.contains("clear-btn");
    if (isModalContainer || isCancelBtn) {
      dispatch(toggleModal("hide"));
    }
  };

  const handleModalConfirm = () => {
    dispatch(clearCart());
    dispatch(toggleModal("hide"));
  };

  return (
    <aside className="modal-container" onClick={handleModalCancel}>
      <div className="modal">
        <h4>Remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={handleModalConfirm}
          >
            Confirm
          </button>
          <button type="button" className="btn clear-btn">
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
};
export default Modal;
