import { Button } from "@mui/material";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function CategoriesBottom() {
  return (
    <div className="categories-bottom">
      <div className="category-bottom-card">
        <div className="container">
          <h2>Everyday Fresh & Clean with Our Products </h2>
          <Button variant="contained">
            <span>Shop Now</span>
            <span>
              <FaArrowRightLong />
            </span>
          </Button>
        </div>
      </div>
      <div className="category-bottom-card">
        <div className="container">
          <h2>Make your Breakfast Healthy and Easy</h2>
          <Button variant="contained">
            <span>Shop Now</span>
            <span>
              <FaArrowRightLong />
            </span>
          </Button>
        </div>
      </div>
      <div className="category-bottom-card">
        <div className="container">
          <h2>The best Organic Products Online</h2>
          <Button variant="contained">
            <span>Shop Now</span>
            <span>
              <FaArrowRightLong />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CategoriesBottom;
