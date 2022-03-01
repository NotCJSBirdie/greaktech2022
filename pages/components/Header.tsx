import React from "react";
import { useState } from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

const Header = () => {
  const [mobileHeader, setMobileHeader] = useState(false);

  const handleMobileHeader = () => {
    setMobileHeader(!mobileHeader);
  };

  return (
    <div>
      <div
        id="desktopheader"
        className="fixed hidden w-full items-center bg-white p-12 text-black md:flex md:flex-row"
      >
        <div className="w-1/5 text-center font-bold">Services</div>

        <div className="w-1/5 text-center font-bold">Company</div>

        <div className="w-1/5 text-center font-bold">GreakTech</div>

        <div className="w-1/5 text-center font-bold">+18334758324</div>

        <div className="w-1/5 text-center font-bold">Let's Get Started</div>
      </div>

      <div
        id="mobileheader"
        className="w-full bg-white py-4 px-2 text-black shadow-2xl"
      >
        <div className="flex flex-row justify-between">
          <button
            onClick={handleMobileHeader}
            className="border-2 border-gray-400 bg-white p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-menu-2"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#9e9e9e"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>

          <div className="invisible p-6"></div>
        </div>

        <SlideDown>
          <div>
            {mobileHeader ? (
              <div className="flex flex-col items-start bg-white p-4 text-black md:hidden">
                <button className="p-8 font-bold">Services</button>
                <button className="p-8 font-bold">Company</button>
                <button className="bg-lime-600 p-8 font-bold">
                  Let's Get Started
                </button>
              </div>
            ) : (
              <div className="hidden"></div>
            )}
          </div>
        </SlideDown>
      </div>
    </div>
  );
};

export default Header;

// https://www.npmjs.com/package/react-slidedown
// react-slidedown

// React component which uses CSS to animate a child from its current height to height: auto when mounting/updating/unmounting.

// Overview

// CSS does not currently support animating element height to height: auto and so normally javascript is used to achieve this effect.

// This component uses CSS to perform the animation, following an algorithm (first described here). The desired height of the element is calculated, and then css is used to transition that height. After the transition has completed the height is set to height: auto.

// react-slidedown is perfect for dropdown lists, popup menus, accordions and closeable panels which have varying sized content.

// I am not aware of any cross-browser issues from IE10 and onwards.
