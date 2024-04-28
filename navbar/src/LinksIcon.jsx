import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const LinksIcon = ({ linksIconHeight, linksIconElRef }) => {
  return (
    <ul
      className="links-icon"
      style={{ height: linksIconHeight }}
      ref={linksIconElRef}
    >
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
export default LinksIcon;
