import CompanyFilter from "./components/CompanyFilter";
import ProductsContainer from "./components/ProductsContainer";
import SearchForm from "./components/SearchForm";
import products from "./data";
import { useState, useEffect } from "react";

const App = () => {
  const [currentCompany, setCurrentCompany] = useState("all");
  const [currentQuery, setCurrentQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const companyFilter =
      currentCompany === "all"
        ? products
        : products.filter((product) => product.company === currentCompany);
    const newFilteredProducts = companyFilter.filter((product) =>
      product.title.includes(currentQuery)
    );
    setFilteredProducts(newFilteredProducts);
  }, [currentCompany, currentQuery]);

  return (
    <div className="filters__products-container">
      <div className="filters__products-container-center">
        <div className="filters-container">
          <SearchForm
            currentQuery={currentQuery}
            setCurrentQuery={setCurrentQuery}
          />
          <CompanyFilter
            products={products}
            currentCompany={currentCompany}
            setCurrentCompany={setCurrentCompany}
          />
        </div>
        <ProductsContainer filteredProducts={filteredProducts} />
      </div>
    </div>
  );
};
export default App;
