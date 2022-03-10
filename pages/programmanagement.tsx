import React from "react";
import Header from "./components/Header";
import HowProgram from "./components/HowProgram";
import ProgramButtons from "./components/ProgramButtons";
import ProgramHero from "./components/ProgramHero";

const programmanagement = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />

      <ProgramHero />

      <ProgramButtons />

      <HowProgram />
    </div>
  );
};

export default programmanagement;
