import { FaBars } from "react-icons/fa6";

const SidebarToggle = ({ sidebarToggle }) => {
  return (
    <div className="sidebar-toggle-container">
      <button className="sidebar-toggle" onClick={sidebarToggle}>
        <FaBars />
      </button>
    </div>
  );
};
export default SidebarToggle;
