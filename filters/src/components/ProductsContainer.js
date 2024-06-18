import { formatter } from "../utils";

const ProductsContainer = ({ filteredProducts }) => {
  if (filteredProducts.length === 0) {
    return <h2>No Products Found</h2>;
  }

  return (
    <div className="products-container">
      {filteredProducts.map((product) => {
        const { id, company, title, image, price } = product;
        return (
          <article className="single-product" key={id}>
            <img src={image} className="product-img" alt={title} />
            <div>
              <h5 className="product-name">{title}</h5>
              <span className="product-price">{formatter.format(price)}</span>
            </div>
          </article>
        );
      })}
    </div>
  );
};
export default ProductsContainer;
