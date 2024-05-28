import slides from "../data";
import { setCurrIndex } from "../features/slider/sliderSlice";
import SingleSlide from "./SingleSlide";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const SlidesContainer = () => {
  const dispatch = useDispatch();
  const { currIndex } = useSelector((state) => state.slider);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndX = useRef(0);
  const touchEndY = useRef(0);

  const minSwipeDistance = 10;

  const onTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchStartY.current = e.targetTouches[0].clientY;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
    touchEndY.current = e.targetTouches[0].clientY;
  };

  const onTouchEnd = () => {
    handleSwipe();
  };

  const onMouseDown = (e) => {
    touchStartX.current = e.clientX;
    touchStartY.current = e.clientY;
  };

  const onMouseMove = (e) => {
    touchEndX.current = e.clientX;
    touchEndY.current = e.clientY;
  };

  const onMouseUp = () => {
    handleSwipe();
  };

  const handleSwipe = () => {
    const deltaX = touchEndX.current - touchStartX.current;
    const deltaY = touchEndY.current - touchStartY.current;

    if (
      Math.abs(deltaX) > Math.abs(deltaY) &&
      Math.abs(deltaX) > minSwipeDistance
    ) {
      if (deltaX > 0 && currIndex > 0) {
        dispatch(setCurrIndex({ type: "prev" }));
      } else if (deltaX < 0 && currIndex < slides.length - 1) {
        dispatch(setCurrIndex({ type: "next" }));
      }
    }
  };

  return (
    <div
      className="slider-container"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
    >
      {slides.map((slide, index) => {
        return <SingleSlide key={slide.id} {...slide} index={index} />;
      })}
    </div>
  );
};
export default SlidesContainer;
