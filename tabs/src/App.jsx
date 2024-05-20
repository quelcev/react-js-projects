import ImgContainer from "./ImgContainer";
import TabContainer from "./TabContainer";
import Title from "./Title";

const App = () => {
  return (
    <section className="about-section">
      <Title />
      <div className="img__tabs-container">
        <ImgContainer />
        <TabContainer />
      </div>
    </section>
  );
};
export default App;
