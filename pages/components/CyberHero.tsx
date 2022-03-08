import React from "react";
import styles from "../../styles/CyberHero.module.css";

const CyberHero = () => {
  return (
    <div className="h-full w-full">
      <div id={styles.cyberherobackground} className="">
        <div className="flex flex-col px-12 pt-72 pb-32 md:px-28">
          <h1 className="text-4xl font-bold text-white ">Cyber Security</h1>

          <h6 className="text-2xl font-bold text-white">
            At GreakTech, our team has decades worth of experience in
            Application and System’s security. We stay up to date with industry
            trends and the latest security breaches to make sure we are fully
            capable of handling any potential security threats our clients face.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default CyberHero;
