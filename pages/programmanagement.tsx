import React from "react";
import Header from "./components/Header";
import ProgramButtons from "./components/ProgramButtons";
import ProgramHero from "./components/ProgramHero";

const programmanagement = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />

      <ProgramHero />

      <ProgramButtons />
    </div>
  );
};

export default programmanagement;
