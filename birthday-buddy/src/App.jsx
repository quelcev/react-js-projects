import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);

  const handleRemovePerson = (id) => {
    const peopleNew = people.filter((person) => person.id !== id);
    setPeople(peopleNew);
  };

  return (
    <section className="birthday-buddy-section">
      <div className="birthday-buddy-container">
        <h3 className="title">{people.length} Birthdays Today</h3>
        <List people={people} handleRemovePerson={handleRemovePerson} />
        {people.length > 0 && (
          <button className="clear-all-btn" onClick={() => setPeople([])}>
            Clear All
          </button>
        )}
      </div>
    </section>
  );
};
export default App;
