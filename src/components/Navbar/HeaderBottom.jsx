import { IoIosArrowDown } from "react-icons/io";
import { Button } from "@mui/material";
import { LuLayoutGrid } from "react-icons/lu";
import { PiFireBold } from "react-icons/pi";
import { LuHeadphones } from "react-icons/lu";

function HeaderBottom() {
  return (
    <div className="header-bottom">
      <div className="container">
        <div className="all-cetegories-button">
          <Button variant="contained">
            <span>
              <LuLayoutGrid />
            </span>
            <span>Browse All Categories</span>
            <span>
              <IoIosArrowDown />
            </span>
          </Button>
        </div>
        <div>
          <nav className="menu">
            <ul>
              <li>
                <a href="#" className="deals">
                  <span>
                    <PiFireBold />
                  </span>
                  <span>Deals</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Home</span>
                  <span>
                    <IoIosArrowDown />
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>About</span>
                  <span>
                    <IoIosArrowDown />
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Shop</span>
                  <span>
                    <IoIosArrowDown />
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Vendors</span>
                  <span>
                    <IoIosArrowDown />
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Mega Menu</span>
                  <span>
                    <IoIosArrowDown />
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Blog</span>
                  <span>
                    <IoIosArrowDown />
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Pages</span>
                  <span>
                    <IoIosArrowDown />
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Contact</span>
                  <span>
                    <IoIosArrowDown />
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-bottom-support">
          <div className="suport-icon">
            <span>
              <LuHeadphones />
            </span>
          </div>
          <div className="support-content">
            <h1>1900 - 888</h1>
            <p>24/7 Support Center</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;
