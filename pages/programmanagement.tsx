import React from "react";
import DoItProgram from "./components/DoItProgram";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HowProgram from "./components/HowProgram";
import ProgramButtons from "./components/ProgramButtons";
import ProgramHero from "./components/ProgramHero";
import StillUnsure from "./components/StillUnsure";

const programmanagement = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />

      <ProgramHero />

      <ProgramButtons />

      <HowProgram />

      <DoItProgram />

      <StillUnsure />

      <Footer />
    </div>
  );
};

export default programmanagement;
