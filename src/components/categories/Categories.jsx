import "./categories.css";
import CategoriesTop from "./CategoriesTop";
import CategoryMiddle from "./CategoryMiddle";
import CategoriesBottom from "./CategoriesBottom";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Categories() {
  const categoriesContainer = useRef(null);

  // useGSAP(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   gsap.from(".categories-menu", {
  //     opacity: 0,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: ".categories",
  //       start: "top 80%",
  //       end: "bottom center",
  //     },
  //   });

  //   gsap.from(".category-card", {
  //     opacity: 0,
  //     y: 100,
  //     duration: 1,
  //     stagger: 0.2,
  //     scrollTrigger: {
  //       trigger: ".category-cards",
  //       start: "top center",
  //       end: "bottom center",
  //       markers: true,
  //     },
  //   });
  // }, {});

  const handleNextClick = () => {
    categoriesContainer.current.scrollLeft +=
      categoriesContainer.current.offsetWidth;
  };

  const handlePrevClick = () => {
    categoriesContainer.current.scrollLeft -=
      categoriesContainer.current.offsetWidth;
  };

  return (
    <section className="categories" id="categories">
      <article className="container">
        <CategoriesTop
          handleNextClick={handleNextClick}
          handlePrevClick={handlePrevClick}
        />
        <CategoryMiddle categoriesContainer={categoriesContainer} />
        <CategoriesBottom />
      </article>
    </section>
  );
}

export default Categories;
