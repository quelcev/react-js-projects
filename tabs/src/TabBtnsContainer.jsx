import { tabBtns } from "./data";

const TabBtnsContainer = ({ toggleTab, activeTab }) => {
  return (
    <div className="tab-btns-container">
      {tabBtns.map((btn) => {
        const { id, label, dataId } = btn;
        return (
          <button
            key={id}
            onClick={() => toggleTab(dataId)}
            className={dataId === activeTab ? "tab-btn active" : "tab-btn"}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};
export default TabBtnsContainer;
