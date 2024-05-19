import { useEffect, useRef } from "react";
import { setRef } from "../features/scroll/scrollSlice";
import { useDispatch } from "react-redux";

const About = () => {
  const dispatch = useDispatch();
  const aboutRef = useRef(null);

  useEffect(() => {
    dispatch(setRef({ name: "aboutRef", ref: aboutRef }));
  }, []);

  return (
    <section className="section" id="about" ref={aboutRef}>
      <div className="section-inner">
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, natus?
          Quidem quos a pariatur vero et suscipit eius ducimus eum, eveniet
          laborum dolorum quis iste, dolor quaerat, eligendi officia provident?
        </p>
      </div>
    </section>
  );
};
export default About;
