import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentImageIndex,
  setShowModal,
} from "../features/gallery/gallerySlice";

const GalleryImage = ({ src, name, imgClass, triggerModal = false, index }) => {
  const dispatch = useDispatch();
  const { currentImageIndex } = useSelector((state) => state.gallery);

  const handleClick = (e) => {
    if (triggerModal) {
      dispatch(setShowModal({ show: true }));
    }
    dispatch(setCurrentImageIndex(index));
  };

  const className = `${imgClass} ${
    currentImageIndex === index && imgClass === "modal-img" ? "active" : ""
  }`;

  return (
    <img src={src} className={className} alt={name} onClick={handleClick} />
  );
};
export default GalleryImage;
