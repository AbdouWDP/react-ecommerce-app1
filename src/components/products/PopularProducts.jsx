function PopularProducts() {
  return (
    <div className="popular-products">
      <div className="popular-products-menu">
        <h1>Popular Products</h1>
        <div>
          <nav>
            <ul>
              <li>
                <a href="#" className="active">
                  Featured
                </a>
              </li>
              <li>
                <a href="#">milk & diaries</a>
              </li>
              <li>
                <a href="#">coffees & teas</a>
              </li>
              <li>
                <a href="#">pet foods</a>
              </li>
              <li>
                <a href="#">meats</a>
              </li>
              <li>
                <a href="#">vegetables</a>
              </li>
              <li>
                <a href="#">fruits</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default PopularProducts;
