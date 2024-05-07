import { useRef, useState } from "react";
import video from "./assets/video.mp4";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

const App = () => {
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const toggleVideo = () => {
    let isVideoPlayingNew;
    if (isVideoPlaying) {
      videoRef.current.pause();
      isVideoPlayingNew = false;
    } else {
      videoRef.current.play();
      isVideoPlayingNew = true;
    }
    setIsVideoPlaying(isVideoPlayingNew);
  };

  return (
    <div className="video-container-overlay">
      <div className="title">
        <h1>Title</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit earum,
          consequuntur odio hic itaque modi eveniet. Quisquam natus perferendis,
          omnis doloribus sed exercitationem alias nihil unde! Pariatur illum
          eveniet quaerat.
        </p>
      </div>
      <div className="video-container">
        <video ref={videoRef} autoPlay muted loop>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="switch-btn-container">
        <div className="switch-btn-inner">
          <button className="switch-btn" onClick={toggleVideo}>
            <FaPlay />
            <FaPause />
            <span
              className={!isVideoPlaying ? "switch paused" : "switch"}
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default App;
