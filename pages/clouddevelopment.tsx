import React from "react";
import CloudButtons from "./components/CloudButtons";
import CloudHero from "./components/CloudHero";
import DoItCloud from "./components/DoItCloud";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HowCloud from "./components/HowCloud";
import StillUnsure from "./components/StillUnsure";

const clouddevelopment = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />

      <CloudHero />

      <CloudButtons />

      <HowCloud />

      <DoItCloud />

      <StillUnsure />

      <Footer />
    </div>
  );
};

export default clouddevelopment;
