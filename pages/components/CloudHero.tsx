import React from "react";
import styles from "../../styles/CloudHero.module.css";

const CloudHero = () => {
  return (
    <div className="h-full w-full">
      <div id={styles.cloudherobackground} className="">
        <div className="flex flex-col px-12 pt-72 pb-32 md:px-28">
          <h1 className="text-4xl font-bold text-white ">
            Cloud System Development
          </h1>

          <h6 className="text-2xl font-bold text-white">
            We specialize in building custom designed cloud infrastructure to
            help deliver your application or website to your customers quickly
            and efficiently with little to no downtime. We believe that a great
            application needs a great infrastructure to run on.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default CloudHero;
