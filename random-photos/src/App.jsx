import { useEffect, useState } from "react";
import SingleImage from "./SingleImage";

const App = () => {
  const [images, setImages] = useState([]);
  const [startingIndex, setStartingIndex] = useState(0);

  const addNewImage = () => {
    const newImagesToAdd = 4;
    const newImages = [];
    for (let i = 0; i < newImagesToAdd; i++) {
      newImages.push(`https://picsum.photos/300?random=${i + startingIndex}`);
      setStartingIndex((prevStartingIndex) => prevStartingIndex + 1);
    }
    setImages((prevImages) => prevImages.concat(newImages));
  };

  useEffect(() => {
    addNewImage();
  }, []);

  return (
    <div className="random-photos-container">
      <div className="image-container">
        {images.map((image, index) => {
          return <SingleImage key={index} image={image} />;
        })}
      </div>
      <button className="btn" onClick={addNewImage}>
        Load More
      </button>
    </div>
  );
};
export default App;
