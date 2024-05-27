import GroceryForm from "./components/GroceryForm";
import GroceryList from "./components/GroceryList";
import { useSelector, useDispatch } from "react-redux";
import { clearItems, setAlertWitReset } from "./features/grocery/grocerySlice";

const App = () => {
  const {
    groceryItems,
    alert: { show, text, alertType },
    timeoutId,
  } = useSelector((state) => state.grocery);
  const dispatch = useDispatch();

  const handleClearItems = () => {
    dispatch(clearItems());
    clearTimeout(timeoutId);
    dispatch(
      setAlertWitReset({ show: true, text: "Empty list", alertType: "danger" })
    );
  };

  return (
    <section className="grocery-bud">
      <div className="grocery-bud-center">
        {show && <p className={`form-alert ${alertType}`}>{text}</p>}
        <h2>Grocery Bud</h2>
        <GroceryForm />
        <GroceryList />
        {groceryItems.length > 0 && (
          <button className="clear-btn" onClick={handleClearItems}>
            Clear Items
          </button>
        )}
      </div>
    </section>
  );
};
export default App;
