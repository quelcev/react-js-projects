import { useSelector } from "react-redux";
import GroceryItem from "./GroceryItem";

const GroceryList = () => {
  const { groceryItems } = useSelector((state) => state.grocery);

  return (
    <ul className="grocery-list-container">
      {groceryItems.map((item) => {
        return <GroceryItem key={item.id} {...item} />;
      })}
    </ul>
  );
};
export default GroceryList;
