import { useState, useRef } from "react";
import Links from "./Links";
import LinksIcon from "./LinksIcon";
import { FaBarsStaggered } from "react-icons/fa6";

const App = () => {
  const [linksHeight, setLinksHeight] = useState(0);
  const [linksIconHeight, setLinksIconHeight] = useState(0);
  const [showLinks, setShowLinks] = useState(false);
  const linksElRef = useRef(null);
  const linksIconElRef = useRef(null);

  const handleLinksHeight = () => {
    let newLinksHeight = 0;
    let newLinksIconHeight = 0;
    let newShowLinks = false;
    if (showLinks) {
      newLinksHeight = 0;
      newLinksIconHeight = 0;
      newShowLinks = false;
    } else {
      newLinksHeight = `${linksElRef.current.scrollHeight}px`;
      newLinksIconHeight = `${linksIconElRef.current.children[0].scrollHeight}px`;
      newShowLinks = true;
    }
    setLinksHeight(newLinksHeight);
    setLinksIconHeight(newLinksIconHeight);
    setShowLinks(newShowLinks);
  };

  return (
    <nav className="nav">
      <div className={showLinks ? "nav-center show-links" : "nav-center"}>
        <div className="logo__nav-toggle">
          <h4 className="logo">Logo</h4>
          <button className="nav-toggle" onClick={handleLinksHeight}>
            <FaBarsStaggered />
          </button>
        </div>
        <Links linksHeight={linksHeight} linksElRef={linksElRef} />
        <LinksIcon
          linksIconHeight={linksIconHeight}
          linksIconElRef={linksIconElRef}
        />
      </div>
    </nav>
  );
};
export default App;
