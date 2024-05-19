import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setRef } from "../features/scroll/scrollSlice";

const Services = () => {
  const servicesRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRef({ name: "servicesRef", ref: servicesRef }));
  }, []);

  return (
    <section className="section" id="services" ref={servicesRef}>
      <div className="section-inner">
        <h2>Services</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, natus?
          Quidem quos a pariatur vero et suscipit eius ducimus eum, eveniet
          laborum dolorum quis iste, dolor quaerat, eligendi officia provident?
        </p>
      </div>
    </section>
  );
};
export default Services;
