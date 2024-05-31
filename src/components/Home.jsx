import Navbar from "./Navbar/Navbar";
import "./home.css";
import Sliders from "./Sliders/Sliders";
import Categories from "./categories/Categories";
import Products from "./products/Products";

function Home() {
  return (
    <>
      <Navbar />
      <Sliders />
      <Categories />
      <Products />
    </>
  );
}

export default Home;
