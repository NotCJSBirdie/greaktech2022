import React from "react";
import Slider from "react-slick";
import { useRef } from "react";

const Versatile = () => {
  const slider = useRef(null);
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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

  return (
    <div className="my-10 w-full">
      <div className="flex flex-col items-center">
        <h2 className="mb-10">We Are A Versatile Company</h2>

        <p className="mb-10">
          Click on one of the services below to find out more information and
          how these services can benefit your company
        </p>
      </div>

      <div className="relative top-40 z-10 mx-6 flex flex-row justify-between md:mx-10">
        <button
          className="z-10 rounded-full bg-gray-600"
          onClick={() => slider?.current?.slickPrev()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-chevron-left"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="15 6 9 12 15 18" />
          </svg>
        </button>

        <button
          className="rounded-full bg-gray-600"
          onClick={() => slider?.current?.slickNext()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-chevron-right"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </button>
      </div>

      <div className="relative z-50 mx-14 md:mx-20">
        <Slider ref={slider} {...settings}>
          <div className="z-40 p-10">
            <div className="flex flex-col items-center">
              <h4 className="text-center">Application Development</h4>

              <p>
                Custom built web and mobile application development in both the
                public and private sectors for over ten years. Web apps for
                construction, ...
              </p>
            </div>
          </div>
          <div className="z-40 p-10">
            <div className="flex flex-col items-center">
              <h4 className="text-center">Cybersecurity</h4>

              <p>
                Custom built web and mobile application development in both the
                public and private sectors for over ten years. Web apps for
                construction, ...
              </p>
            </div>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Versatile;
