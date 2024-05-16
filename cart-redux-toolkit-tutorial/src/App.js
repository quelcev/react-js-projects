import { useEffect } from "react";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartItems } from "./features/cart/cartSlice";

const App = () => {
  const { showModal } = useSelector(({ modal }) => modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  return (
    <main>
      {showModal && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
};
export default App;
