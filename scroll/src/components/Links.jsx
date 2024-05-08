import links from "../links";
import Link from "./Link";

const Links = ({ linksHeight, linksRef, handleScrollTo }) => {
  return (
    <ul className="links" ref={linksRef} style={{ height: linksHeight }}>
      {links.map((link) => {
        return (
          <Link key={link.id} link={link} handleScrollTo={handleScrollTo} />
        );
      })}
    </ul>
  );
};
export default Links;
