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
    <div className="static z-50 my-10 w-full">
      <div className="flex flex-col items-center">
        <h2 className="mb-10">We Are A Versatile Company</h2>

        <p className="mb-10">
          Click on one of the services below to find out more information and
          how these services can benefit your company
        </p>
      </div>

      <div className="relative top-40 mx-6 flex flex-row justify-between md:mx-10">
        <button
          className="rounded-full bg-gray-600"
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

      <div className="relative mx-14 md:mx-20">
        <Slider ref={slider} {...settings} className="relative">
          <div className=" p-10">
            <div className=" flex flex-col items-center border-2 border-gray-400">
              <img
                src="data:image/png;base64,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"
                alt="applicationdevelopment"
                className="p-16"
                width={275}
                height={275}
              />

              <h6 className="text-center font-bold">Application Development</h6>

              <p className="p-6">
                Custom built web and mobile application development in both the
                public and private sectors for over ten years. Web apps for
                construction, ...
              </p>
            </div>
          </div>

          <div className=" p-10">
            <div className="flex flex-col items-center border-2 border-gray-400">
              <img
                src="https://greaktech.com/static/media/cybersecurity.849879a1.png"
                alt="cybersecurity"
                className="p-16"
                width={275}
                height={275}
              />

              <h6 className="text-center font-bold">Cybersecurity</h6>

              <p className="p-6">
                Custom built web and mobile application development in both the
                public and private sectors for over ten years. Web apps for
                construction, ...
              </p>
            </div>
          </div>

          <div className=" p-10">
            <div className="flex flex-col items-center border-2 border-gray-400">
              <img
                src="data:image/png;base64,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"
                alt="cloudsystemdevelopment"
                className="p-16"
                width={220}
                height={220}
              />

              <h6 className="text-center font-bold">
                Cloud System Development
              </h6>

              <p className="p-6">
                Our experts help with a number of data related issues such as
                data migrations, data modeling, database development, database
                security to ...
              </p>
            </div>
          </div>

          <div className="p-10">
            <div className="flex flex-col items-center border-2 border-gray-400">
              <img
                src="data:image/png;base64,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"
                alt="cybersecurity"
                className="p-16"
                width={240}
                height={240}
              />

              <h6 className="text-center font-bold">
                Program & Process Management
              </h6>

              <p className="p-6">
                We provide a technical audit from the systems that the
                application runs on, to the databases and data sources that
                drive the system to the ...
              </p>
            </div>
          </div>
        </Slider>
      </div>

      <div className=""></div>
    </div>
  );
};

export default Versatile;
