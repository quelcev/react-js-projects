import { tabContents } from "./data";

const TabContentContainer = ({ activeTab }) => {
  return (
    <div className="tab-content-container">
      {tabContents.map((item) => {
        const { id, heading, dataId, para, list } = item;
        return (
          <div
            key={id}
            className={
              dataId === activeTab ? "tab-content active" : "tab-content"
            }
          >
            <h4>{heading}</h4>
            <p>{para}</p>
            {list && (
              <ul>
                {list.map((item) => {
                  return <li key={item}>{item}</li>;
                })}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default TabContentContainer;
