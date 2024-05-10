import { useContext } from "react";
import AppContext from "../context";

const Contact = () => {
  const { contactRef } = useContext(AppContext);

  return (
    <section className="section" id="contact" ref={contactRef}>
      <div className="section-inner">
        <h2>Contact</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, natus?
          Quidem quos a pariatur vero et suscipit eius ducimus eum, eveniet
          laborum dolorum quis iste, dolor quaerat, eligendi officia provident?
        </p>
      </div>
    </section>
  );
};
export default Contact;
