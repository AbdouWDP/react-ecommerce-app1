function MobileHeaderUp() {
  return (
    <div className="mobile-header-up">
      <p>
        Grand opening, <strong>up to 15%</strong> off all items. Only{" "}
        <strong>3 days</strong> left
      </p>
    </div>
  );
}

function HeaderUp() {
  return (
    <>
      <div className="header-up">
        <div className="container">
          <div className="header-info">
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">My Account</a>
              </li>
              <li>
                <a href="#">Wishlist</a>
              </li>
              <li>
                <a href="#">Order Tracking</a>
              </li>
            </ul>
          </div>
          <div id="news-flash">
            <ul>
              <li className="list-item1">
                Supper Value Deals - Save more with coupons
              </li>
              {/* <li className="list-item2">
              Trendy 25silver jewelry, save up 35% off today
            </li>
            <li className="list-item3">
              100% Secure delivery without contacting the courier
            </li> */}
            </ul>
          </div>
          <div className="header-info-right">
            <ul>
              <li>
                Need help? Call Us: <span>+ 1800 900</span>
              </li>
              <li>English</li>
              <li>USD</li>
            </ul>
          </div>
        </div>
        <MobileHeaderUp />
      </div>
    </>
  );
}

export default HeaderUp;
