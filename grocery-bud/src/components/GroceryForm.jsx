import { useDispatch, useSelector } from "react-redux";
import {
  setGroceryInput,
  setGroceryItems,
  setIsEditing,
  setRef,
  setAlertWitReset,
} from "../features/grocery/grocerySlice";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useRef } from "react";

const GroceryForm = () => {
  const dispatch = useDispatch();
  const { groceryInput, isEditing, editingItemId, timeoutId } = useSelector(
    (state) => state.grocery
  );
  const groceryInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!groceryInput) return;

    clearTimeout(timeoutId);
    if (!isEditing) {
      const newItem = {
        id: uuidv4(),
        value: groceryInput,
      };
      dispatch(setGroceryItems(newItem));
      dispatch(
        setAlertWitReset({
          show: true,
          text: "Item added to the list",
          alertType: "success",
        })
      );
    } else {
      const updatedItem = {
        id: editingItemId,
        value: groceryInput,
      };
      dispatch(setGroceryItems(updatedItem));
      dispatch(setIsEditing({ editing: false, id: "" }));
      dispatch(
        setAlertWitReset({
          show: true,
          text: "Item updated",
          alertType: "success",
        })
      );
    }
    dispatch(setGroceryInput(""));
  };

  useEffect(() => {
    dispatch(setRef({ name: "groceryInputRef", ref: groceryInputRef }));
  }, []);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="grocery-input"
        placeholder="e.g. eggs"
        value={groceryInput}
        onChange={(e) => dispatch(setGroceryInput(e.target.value))}
        ref={groceryInputRef}
      />
      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
};
export default GroceryForm;
