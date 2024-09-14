import React, { useState, useRef } from "react";
import { IoAlbums } from "react-icons/io5";
import CarouselSlider from "../Components/CarouselSlider";

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
    infinite: false,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "0",
    arrows: false,
    afterChange: (current) => {
      const totalSlides = MenuList.length;
      setShowPrevArrow(current !== 0);
      setShowNextArrow(current !== totalSlides - 2);
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
<CarouselSlider />
    </div>
  );
};

export default LeftMenuList;
