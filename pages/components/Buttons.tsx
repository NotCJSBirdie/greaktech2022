import React from "react";
import styles from "../../styles/Buttons.module.css";
import Link from "next/link";

const Buttons = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center px-20 md:flex-row">
        <Link href="/letsgetstarted">
          <button id={styles.buttonA} className="mb-6 mt-12  md:my-0">
            Lets Get Started
          </button>
        </Link>

        <Link href="/applicationdevelopment">
          <button id={styles.buttonB} className="mt-6 mb-12  md:my-0">
            Our Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Buttons;
