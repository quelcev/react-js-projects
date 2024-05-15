import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main>
      <Modal />
      <Navbar />
      <CartContainer />
    </main>
  );
};
export default App;
