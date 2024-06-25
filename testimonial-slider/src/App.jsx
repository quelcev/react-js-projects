import { useEffect, useState } from "react";
import testimonials from "./data";

const App = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const { name, text, photoUrl } = testimonials[testimonialIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      let newTestimonialIndex = testimonialIndex + 1;
      if (newTestimonialIndex === testimonials.length) {
        newTestimonialIndex = 0;
      }
      setTestimonialIndex(newTestimonialIndex);
    }, 7000);
    return () => clearInterval(interval);
  }, [testimonialIndex]);

  return (
    <div className="container">
      <div className="testimonial-container">
        <img src={photoUrl} alt="user image" />
        <p className="text">{text}</p>
        <h4 className="username">{name}</h4>
      </div>
    </div>
  );
};
export default App;
