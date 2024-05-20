import { useState } from "react";
import TabBtnsContainer from "./TabBtnsContainer";
import TabContentContainer from "./TabContentContainer";

const TabContainer = () => {
  const [activeTab, setActiveTab] = useState("history");

  const toggleTab = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="tabs-container">
      <TabBtnsContainer toggleTab={toggleTab} activeTab={activeTab} />
      <TabContentContainer activeTab={activeTab} />
    </div>
  );
};
export default TabContainer;
