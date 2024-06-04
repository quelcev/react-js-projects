import { numbersData } from "./data";
import SingleNumber from "./components/SingleNumber";

const App = () => {
  return (
    <div className="numbers-container">
      <div className="numbers-center">
        {numbersData.map((number) => {
          return <SingleNumber key={number.idName} {...number} />;
        })}
      </div>
    </div>
  );
};
export default App;
