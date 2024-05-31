import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

function CategoriesTop({ handleNextClick, handlePrevClick }) {
  return (
    <div className="categories-menu">
      <div className="featured-categories">
        <h1>Featured Categories</h1>
        <div>
          <nav>
            <ul>
              <li>
                <a href="#">cake & milk</a>
              </li>
              <li>
                <a href="#">coffee & teas</a>
              </li>
              <li>
                <a href="#">pet foods</a>
              </li>
              <li>
                <a href="#">vegetables</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="categories-navigation-buttons">
        <button className="prev-button" onClick={handlePrevClick}>
          <span>
            <FaArrowLeftLong />
          </span>
        </button>
        <button className="next-button" onClick={handleNextClick}>
          <span>
            <FaArrowRightLong />
          </span>
        </button>
      </div>
    </div>
  );
}

export default CategoriesTop;
