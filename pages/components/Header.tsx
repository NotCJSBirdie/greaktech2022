import React from "react";
import { useState } from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import { Dropdown } from "react-bootstrap";
import styles from "../../styles/Header.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

const Header = () => {
  const [mobileHeader, setMobileHeader] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileCompany, setMobileCompany] = useState(false);

  const handleMobileHeader = () => {
    setMobileHeader(!mobileHeader);
  };

  const handleMobileServices = () => {
    if (mobileServices != true && mobileCompany == true) {
      setMobileServices(!mobileServices);
      setMobileCompany(!mobileCompany);
    } else {
      setMobileServices(!mobileServices);
    }
  };

  const handleMobileCompany = () => {
    if (mobileCompany != true && mobileServices == true) {
      setMobileServices(!mobileServices);
      setMobileCompany(!mobileCompany);
    } else {
      setMobileCompany(!mobileCompany);
    }
  };

  return (
    <div>
      <div
        id="desktopheader"
        className="fixed z-10 hidden w-full items-center bg-white px-12 py-4 shadow-2xl md:grid md:grid-cols-5 md:grid-rows-1 md:items-center md:gap-4"
      >
        <div className="text-center">
          <Dropdown>
            <Dropdown.Toggle
              id={styles.servicesbutton}
              className="flex flex-row items-center border-0 bg-white   active:outline-none"
            >
              <div className="inline-block font-bold ">Services</div>
            </Dropdown.Toggle>

            <Dropdown.Menu id={styles.services}>
              <Dropdown.Item>
                <Link href="/applicationdevelopment">
                  <a className="text-black no-underline">
                    Application Development
                  </a>
                </Link>
              </Dropdown.Item>

              <Dropdown.Item>Cybersecurity</Dropdown.Item>
              <Dropdown.Item>Cloud Systems Development</Dropdown.Item>
              <Dropdown.Item>Project and Process Management</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="text-center">
          <Dropdown>
            <Dropdown.Toggle
              id={styles.companybutton}
              className="flex flex-row items-center border-0 bg-white   active:outline-none"
            >
              <div className="inline-block font-bold ">Company</div>
            </Dropdown.Toggle>

            <Dropdown.Menu id={styles.company}>
              <Dropdown.Item>About Us</Dropdown.Item>
              <Dropdown.Item>Why GreakTech?</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="text-center font-bold">
          <Link href="/">
            <a>
              <img
                src="https://greaktech.com/static/media/logoondarkbckgrnd.a1284e4e.svg"
                alt="logo"
                className="w-full"
              />
            </a>
          </Link>
        </div>

        <div className="text-center font-bold">+18334758324</div>

        <div className="text-center font-bold hover:text-white">
          <Link href="/letsgetstarted">
            <button
              id={styles.letsgetstartedbutton}
              className="rounded-lg px-6 py-3"
            >
              Lets Get Started
            </button>
          </Link>
        </div>
      </div>

      <div
        id="mobileheader"
        className="fixed z-10 w-full bg-white py-4 px-2 text-black shadow-2xl md:hidden"
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
              <div className=" flex flex-col items-start bg-white p-4 text-black md:hidden">
                <button
                  onClick={handleMobileServices}
                  className="p-8 font-bold"
                >
                  Services
                </button>

                <div className="py-4">
                  {mobileServices ? (
                    <div className="flex flex-col rounded-lg border-2 border-gray-500 bg-white p-4 text-black">
                      <h3>Application Development</h3>
                      <h3>Cybersecurity</h3>
                      <h3>Cloud Systems Development</h3>
                      <h3>Project and Process Management</h3>
                    </div>
                  ) : (
                    <div className="hidden"></div>
                  )}
                </div>

                <button onClick={handleMobileCompany} className="p-8 font-bold">
                  Company
                </button>

                <div className="py-4">
                  {mobileCompany ? (
                    <div className="flex flex-col rounded-lg border-2 border-gray-500 bg-white p-4 text-black">
                      <h3>About Us</h3>
                      <h3>Why GreakTech?</h3>
                    </div>
                  ) : (
                    <div className="hidden"></div>
                  )}
                </div>

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
