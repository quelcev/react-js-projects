import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = (e) => {
    const isOpenModal = e.target.classList.contains("open-modal");
    const isModalOverlay = e.target.classList.contains("modal-overlay");
    const isCloseBtn = e.target.classList.contains("close-btn");
    let newShowModal = showModal;
    if (isOpenModal) {
      newShowModal = true;
    }
    if (isModalOverlay || isCloseBtn) {
      newShowModal = false;
    }
    setShowModal(newShowModal);
  };

  return (
    <>
      <div className="btn-container">
        <button className="open-modal" onClick={handleModalToggle}>
          Open Modal
        </button>
      </div>
      <div
        className={showModal ? "modal-overlay show" : "modal-overlay"}
        onClick={handleModalToggle}
      >
        <div className="modal">
          <div className="modal-inner">
            <button className="close-btn">
              <FaTimes />
            </button>
            <h2 className="title">Modal</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus modi sed illo quibusdam aut ipsa, nulla possimus,
              exercitationem in voluptates sequi voluptate explicabo vel
              mollitia eveniet animi, obcaecati consectetur perferendis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
