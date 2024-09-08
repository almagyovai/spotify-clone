import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { IoAlbums } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import these icons
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LeftMenuList = () => {
  const [showPrevArrow, setShowPrevArrow] = useState(false);
  const [showNextArrow, setShowNextArrow] = useState(true);
  const sliderRef = useRef(null);

  const MenuList = [
    {
      id: 1,
      name: "Discover",
      path: "/discover",
    },
    {
      id: 2,
      name: "Radio",
      path: "/radio",
    },
    {
      id: 3,
      name: "Artists",
      path: "/artists",
    },
    {
      id: 4,
      name: "Albums",
      path: "/albums",
    },
    {
      id: 5,
      name: "Podcasts",
      path: "/podcasts",
    },
  ];

  const settings = {
    dots: false,
    infinite: false, // This makes sure the slides don"t loop infinitely
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "0",
    arrows: false, // Hide default arrows
    afterChange: (current) => {
      const totalSlides = MenuList.length;
      setShowPrevArrow(current !== 0); // Show the left arrow only after the first slide
      setShowNextArrow(current !== totalSlides - 2); // Hide the right arrow when reaching the last visible slide
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        className="title-wrapper"
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          gap: "7px",
          marginBottom: "3em",
        }}
      >
        <IoAlbums style={{ fontSize: "24px", color: "#fff" }} />
        <h3 style={{ fontSize: "18px", color: "#fff" }}>Your Library</h3>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {MenuList.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link
              to={item.path}
              style={{ color: "inherit", textDecoration: "none", fontSize: "16px", color: "#fff",
              }}
            >
              <span style={{ backgroundColor: "#666666",
padding: "20px 15px", borderRadius: "10px",}}>{item.name}</span>
            </Link>
          </div>
        ))}
      </Slider>
      {showPrevArrow && (
        <button
          onClick={goToPrev}
          style={{
            position: "absolute",
            top: "90%",
            left: "0",
            transform: "translateY(-50%)",
            backgroundColor: "#666666",
            color: "#fff",
            borderColor: "transparent",
            borderRadius: "50px",
            boxShadow: "none",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          <FaChevronLeft />
        </button>
      )}
      {showNextArrow && (
        <button
          onClick={goToNext}
          style={{
            position: "absolute",
            top: "90%",
            right: "0",
            transform: "translateY(-50%)",
            backgroundColor: "#666666",
            color: "#fff",
            borderColor: "transparent",
            borderRadius: "50px",
            boxShadow: "none",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          <FaChevronRight />
        </button>
      )}
    </div>
  );
};

export default LeftMenuList;
