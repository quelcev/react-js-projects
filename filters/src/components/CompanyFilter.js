const CompanyFilter = ({ products, currentCompany, setCurrentCompany }) => {
  const companies = [
    "all",
    ...new Set(products.map((product) => product.company)),
  ];

  const handleClick = (company) => {
    setCurrentCompany(company);
  };

  return (
    <div className="company-filter">
      <h5>Company</h5>
      <ul>
        {companies.map((company) => {
          return (
            <li key={company}>
              <button
                className={currentCompany === company ? "active btn" : "btn"}
                onClick={() => handleClick(company)}
              >
                {company}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default CompanyFilter;
