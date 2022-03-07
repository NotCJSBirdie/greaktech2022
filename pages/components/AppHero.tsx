import React from "react";
import styles from "../../styles/AppHero.module.css";

const AppHero = () => {
  return (
    <div className="h-full w-full">
      <div id={styles.appherobackground} className="">
        <div className="flex flex-col px-12 pt-72 pb-32 md:px-28">
          <h1 className="text-4xl font-bold text-white ">
            Application Development
          </h1>

          <h6 className="text-2xl font-bold text-white">
            Our elite team builds custom web applications for many industries
            such as construction, healthcare, start-ups, non-profits, government
            organizations, and many more. We work tirelessly to stay up to date
            with the latest technologies and industry standards so you don’t
            have to.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default AppHero;
