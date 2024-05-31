import { IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { FaRotate } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

function MobileHeaderMiddle() {
  return (
    <div className="mobile-header-middle">
      <div className="container"></div>
    </div>
  );
}

function HeaderMiddle() {
  const logoSvg =
    "http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/logo.svg";
  return (
    <>
      <div className="header-middle">
        <div className="container">
          <div className="nest-logo">
            <a href="#">
              <img src={logoSvg} alt="" />
            </a>
          </div>
          <div className="search-input">
            <div className="choose-category">
              <button>
                <p>All Categories</p>
                <span>
                  <IoIosArrowDown />
                </span>
              </button>
            </div>
            <div className="s-inp">
              <input type="search" placeholder="Search for items..." />
            </div>
            <div className="search-icon">
              <span>
                <IoSearchSharp />
              </span>
            </div>
          </div>
          <div className="header-actions">
            <ul>
              <li>
                <a href="#">
                  <span>
                    <FaRotate />
                  </span>
                  <p>Compare</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <FaRegHeart />
                  </span>
                  <p>Wishlist</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <FiShoppingCart />
                  </span>
                  <p>Cart</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <FaRegUser />
                  </span>
                  <p>Account</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <MobileHeaderMiddle />
    </>
  );
}

export default HeaderMiddle;
