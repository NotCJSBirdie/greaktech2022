import React from "react";
import styles from "../../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className="h-full w-full">
      <div id={styles.herobackground} className="">
        <div className="flex flex-col px-12 pt-72 pb-12 md:px-28">
          <h1 className="text-6xl font-bold text-white">GreakTech</h1>
          <h1 className="text-4xl font-bold text-white ">
            Technical Experts With Integrity.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
