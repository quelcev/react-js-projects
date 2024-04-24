const Person = ({ person, handleRemovePerson }) => {
  const { age, id, image, name } = person;
  return (
    <article className="person-container" key={id}>
      <img src={image} alt={name} className="person-img" />
      <div className="person-info">
        <h4>{name}</h4>
        <p>{age} years</p>
        <button className="remove-btn" onClick={() => handleRemovePerson(id)}>
          Remove
        </button>
      </div>
    </article>
  );
};
export default Person;
