import { IoCartOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import shirt from "../../assets/shirt.png";
import { IoHeartOutline } from "react-icons/io5";
import { IoShuffle } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";

function ProductCard() {
  return (
    <div className="product-card">
      <div className="pc-container">
        <div className="product-card-image">
          <img src={shirt} alt="" />
          <div className="product-hover-options">
            <Tooltip
              title="Wishlist"
              placement="top"
              arrow
              TransitionComponent={Zoom}
            >
              <button className="wishlist">
                <span>
                  <IoHeartOutline />
                </span>
              </button>
            </Tooltip>
            <Tooltip
              title="Compare"
              placement="top"
              arrow
              TransitionComponent={Zoom}
            >
              <button className="compare">
                <span>
                  <IoShuffle />
                </span>
              </button>
            </Tooltip>
            <Tooltip
              title="Quick view"
              placement="top"
              arrow
              TransitionComponent={Zoom}
            >
              <button className="quick-view">
                <span>
                  <IoEyeOutline />
                </span>
              </button>
            </Tooltip>
          </div>
        </div>
        <div className="product-card-informations">
          <div className="pci-top">
            <p className="cat">Snack</p>
            <p className="title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              alias.
            </p>
            <div className="rating">
              <span>
                <FaStar />
              </span>
              <span>(4.0)</span>
            </div>
          </div>
          <div className="pci-bottom">
            <p className="price">$52.50</p>
            <button className="add-to-cart">
              <span>
                <IoCartOutline />
              </span>
              <span>Add</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
