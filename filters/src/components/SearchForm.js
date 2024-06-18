const SearchForm = ({ currentQuery, setCurrentQuery }) => {
  const handleChange = (e) => {
    setCurrentQuery(e.target.value.toLowerCase());
  };

  return (
    <form>
      <input
        type="search"
        id="product-search"
        placeholder="Search..."
        value={currentQuery}
        onChange={handleChange}
      />
    </form>
  );
};
export default SearchForm;
