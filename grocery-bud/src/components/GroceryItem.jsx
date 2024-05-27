import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteItem,
  editItem,
  setAlertWitReset,
  setIsEditing,
} from "../features/grocery/grocerySlice";

const GroceryItem = ({ id, value }) => {
  const dispatch = useDispatch();
  const {
    refs: { groceryInputRef },
    editingItemId,
    isEditing,
    timeoutId,
  } = useSelector((state) => state.grocery);

  const handleEdit = () => {
    dispatch(editItem(value));
    dispatch(setIsEditing({ editing: true, id }));
    groceryInputRef.current.focus();
  };

  const handleDelete = () => {
    dispatch(deleteItem(id));
    clearTimeout(timeoutId);
    dispatch(
      setAlertWitReset({
        show: true,
        text: "Item removed",
        alertType: "danger",
      })
    );
  };

  return (
    <li
      className={`grocery-item ${
        id === editingItemId && isEditing ? "editing" : ""
      }`}
    >
      <p>{value}</p>
      <div className="btn-container">
        <button className="edit-btn" onClick={handleEdit}>
          <FaEdit />
        </button>
        <button className="delete-btn" onClick={handleDelete}>
          <MdDelete />
        </button>
      </div>
    </li>
  );
};
export default GroceryItem;
