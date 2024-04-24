import Person from "./Person";

const List = ({ people, handleRemovePerson }) => {
  return (
    <div className="list">
      {people.map((person) => {
        return (
          <Person
            key={person.id}
            person={person}
            handleRemovePerson={handleRemovePerson}
          />
        );
      })}
    </div>
  );
};
export default List;
