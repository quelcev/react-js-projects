import GalleryImage from "./GalleryImage";
import galleryImages from "../data";
import { useSelector, useDispatch } from "react-redux";
import { FaTimes } from "react-icons/fa";
import { setShowModal } from "../features/gallery/gallerySlice";
import { hasClass } from "../utils";
import { useEffect, useState } from "react";
import ControlButtons from "./ControlButtons";

const GalleryModal = () => {
  const { showModal, currentImageIndex } = useSelector(
    (state) => state.gallery
  );
  const dispatch = useDispatch();
  const [imgAttrs, setImgAttrs] = useState(null);

  const handleModalClose = (e) => {
    const el = e.target;
    const closeModal =
      hasClass(el, "modal-container") ||
      hasClass(el, "modal-center") ||
      hasClass(el, "modal-images-container") ||
      hasClass(el, "close-btn");
    if (closeModal) {
      dispatch(setShowModal({ show: false }));
    }
  };

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("overflow-hidden");
    }

    setImgAttrs({
      src: galleryImages[currentImageIndex]?.src,
      name: galleryImages[currentImageIndex]?.name,
    });

    return function cleanup() {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showModal, currentImageIndex]);

  return (
    <aside
      className={`modal-overlay ${showModal ? "show" : ""}`}
      onClick={handleModalClose}
    >
      <div className="modal-container">
        <button className="close-btn">
          <FaTimes />
        </button>
        <div className="modal-center">
          <div className="modal-img-container">
            <img
              src={imgAttrs?.src}
              alt={imgAttrs?.name}
              className="modal-main-img"
            />
            <ControlButtons />
          </div>
          <h3>{imgAttrs?.name}</h3>
          <div className="modal-images-container">
            {galleryImages.map((img, index) => {
              const props = {
                ...img,
                index,
                imgClass: "modal-img",
              };
              return <GalleryImage key={img.id} {...props} />;
            })}
          </div>
        </div>
      </div>
    </aside>
  );
};
export default GalleryModal;
