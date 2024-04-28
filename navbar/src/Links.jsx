const Links = ({ linksHeight, linksElRef }) => {
  return (
    <ul className="links" style={{ height: linksHeight }} ref={linksElRef}>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Projects</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
      <li>
        <a href="#">Profile</a>
      </li>
    </ul>
  );
};
export default Links;
