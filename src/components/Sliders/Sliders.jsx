import "./sliders.css";
import { useEffect, useState } from "react";
import SubscribeInput from "./SubscribeInput";
import slide_1 from "../../assets/slide-1.png";
import slide_2 from "../../assets/slide-2.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Sliders() {
  const [navbar, setNavbar] = useState(0);
  const [index, setIndex] = useState(0);
  const paginations = document.querySelectorAll(".pagination");

  const slides = [
    {
      bg: slide_1,
      title1: "Fresh Vegetables",
      title2: "Big discount",
      para: "Save up to 50% off on your first order",
    },
    {
      bg: slide_2,
      title1: "Don’t miss amazing",
      title2: "grocery deals",
      para: "Sign up for the daily newsletter",
    },
  ];

  useEffect(() => {
    setNavbar(document.querySelector(".navbar-header").clientHeight);
  });

  useEffect(() => {
    paginations.forEach((p) => {
      p.classList.remove("active");
      paginations[index].classList.add("active");
    });
  }, [index]);

  const nextSlide = () => {
    index > 0 ? setIndex(index - 1) : setIndex(slides.length - 1);
  };
  const prevSlide = () => {
    index < slides.length - 1 ? setIndex(index + 1) : setIndex(0);
  };

  return (
    <section
      className="slider"
      style={{ height: navbar > 0 && `calc(100vh - ${navbar}px)` }}
    >
      <div className="container">
        <div
          className="slide slide-1 active"
          id="slide-1"
          style={{ backgroundImage: `url(${slides[index].bg})` }}
        >
          <div className="half-slide-container">
            <div className="half-slide">
              <h1>
                {slides[index].title1}
                <br />
                {slides[index].title2}
              </h1>
              <p> {slides[index].para} </p>
              <SubscribeInput />
            </div>
          </div>
        </div>

        <div className="paginations">
          <button
            className="pagination active"
            onClick={() => setIndex(0)}
          ></button>
          <button
            className="pagination"
            onClick={() => setIndex(slides.length - 1)}
          ></button>
        </div>
        <button className="slide-button prev-slide" onClick={nextSlide}>
          <span>
            <IoIosArrowBack />
          </span>
        </button>
        <button className="slide-button next-slide" onClick={prevSlide}>
          <span>
            <IoIosArrowForward />
          </span>
        </button>
      </div>
    </section>
  );
}

export default Sliders;
