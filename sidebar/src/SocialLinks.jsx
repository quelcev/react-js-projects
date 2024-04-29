import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <ul className="social-links-container">
      <li>
        <a href="#">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="#">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="#">
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a href="#">
          <FaGithub />
        </a>
      </li>
    </ul>
  );
};
export default SocialLinks;
