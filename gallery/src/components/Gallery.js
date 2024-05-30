import galleryImages from "../data";
import GalleryImage from "./GalleryImage";

const Gallery = () => {
  return (
    <section className="gallery-container">
      <div className="gallery-center">
        {galleryImages.map((img, index) => {
          const props = {
            ...img,
            index,
            imgClass: "img",
            triggerModal: true,
          };
          return <GalleryImage key={img.id} {...props} />;
        })}
      </div>
    </section>
  );
};
export default Gallery;
