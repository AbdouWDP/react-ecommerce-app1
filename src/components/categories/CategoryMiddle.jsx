import banner from "../../assets/react.svg";
import milk from "../../assets/images/milk.png";
import kiwi from "../../assets/images/kiwi.png";
import peach from "../../assets/images/peach.png";
import snack from "../../assets/images/snack.png";
import strawbery from "../../assets/images/strawbery.png";
import coffee from "../../assets/images/coffee.png";
import apple from "../../assets/images/apple.png";
import vegetables from "../../assets/images/vegetables.png";
import headphone from "../../assets/images/headphone.png";
import custard_apple from "../../assets/images/custard apple.png";
import black_plum from "../../assets/images/black plum.png";

function CategoryCard({ img, title, items, color }) {
  return (
    <div className="category-card" style={{ backgroundColor: color }}>
      <div className="category-card-cont">
        <div className="category-card-img">
          <img src={img} alt={title} />
        </div>
        <div>
          <h2 className="category-card-title"> {title} </h2>
          <p className="items-count"> {items} </p>
        </div>
      </div>
    </div>
  );
}

function CategoryMiddle({ categoriesContainer }) {
  return (
    <div className="category-cards" ref={categoriesContainer}>
      <CategoryCard
        img={milk}
        title="Cake & Milk"
        items={"26 items"}
        color={"#f2fce4"}
      />
      <CategoryCard
        img={kiwi}
        title="oganic kiwi"
        items={"28 items"}
        color={"#FFFCEB"}
      />
      <CategoryCard
        img={peach}
        title="peach"
        items={"14 items"}
        color={"#ECFFEC"}
      />
      <CategoryCard
        img={apple}
        title="red apple"
        items={"54 items"}
        color={"#FEEFEA"}
      />
      <CategoryCard
        img={snack}
        title="snack"
        items={"56 items"}
        color={"#FFF3EB"}
      />
      <CategoryCard
        img={vegetables}
        title="vegetables"
        items={"72 items"}
        color={"#FFF3FF"}
      />
      <CategoryCard
        img={strawbery}
        title="strawberry"
        items={"36 items"}
        color={"#F2FCE4"}
      />
      <CategoryCard
        img={black_plum}
        title="black plum"
        items={"123 items"}
        color={"#FEEFEA"}
      />
      <CategoryCard
        img={custard_apple}
        title="custard apple"
        items={"34 items"}
        color={"#FFFCEB"}
      />
      <CategoryCard
        img={coffee}
        title="coffee & tea"
        items={"89 items"}
        color={"#FEEFEA"}
      />
      <CategoryCard
        img={headphone}
        title="headphone"
        items={"87 items"}
        color={"#ECFFEC"}
      />
    </div>
  );
}

export default CategoryMiddle;
