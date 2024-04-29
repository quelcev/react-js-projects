import { FaTimes } from "react-icons/fa";
import SidebarToggle from "./SidebarToggle";
import Links from "./Links";
import SocialLinks from "./SocialLinks";
import { useState } from "react";

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const sidebarToggle = (e) => {
    const isSidebarToggle = e.target.classList.contains("sidebar-toggle");
    const isCloseBtn = e.target.classList.contains("close-btn");
    const isSidebarOverlay = e.target.classList.contains("sidebar-overlay");
    if (isCloseBtn || isSidebarOverlay) {
      setShowSidebar(false);
    } else if (isSidebarToggle) {
      setShowSidebar(!showSidebar);
    }
  };

  return (
    <>
      <SidebarToggle sidebarToggle={sidebarToggle} />
      <div
        className={showSidebar ? "sidebar-overlay show" : "sidebar-overlay"}
        onClick={sidebarToggle}
      >
        <aside className="sidebar">
          <div className="sidebar-inner">
            <div className="logo__close-btn__links">
              <div className="logo__close-btn">
                <h4>LOGO</h4>
                <button className="close-btn" onClick={sidebarToggle}>
                  <FaTimes />
                </button>
              </div>
              <Links />
            </div>
            <SocialLinks />
          </div>
        </aside>
      </div>
    </>
  );
};
export default App;
