import React from "react";
import styles from "../../styles/ProgramHero.module.css";

const ProgramHero = () => {
  return (
    <div className="h-full w-full">
      <div id={styles.programherobackground} className="">
        <div className="flex flex-col px-12 pt-72 pb-32 md:px-28">
          <h1 className="text-4xl font-bold text-white ">
            Program and Process Management
          </h1>

          <h6 className="text-2xl font-bold text-white">
            We provide assistance in setting up a better software development
            lifecycle and pipeline. This will help improve and automate the
            processes so that your team can focus on what they do best. We have
            been consistently involved in moving teams from a slow deliverable
            cycle into a highly productive Agile based incremental deliverable
            cycle.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default ProgramHero;
