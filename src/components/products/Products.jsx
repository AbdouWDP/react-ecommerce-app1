import DailyBestSells from "./DailyBestSells";
import PopularProducts from "./PopularProducts";
import ProductCard from "./ProductCard";
import "./products.css";

function Products() {
  return (
    <section className="products" id="products">
      <div className="container">
        <PopularProducts />
        <div className="popular-products-cards">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <DailyBestSells />
      </div>
    </section>
  );
}

export default Products;
