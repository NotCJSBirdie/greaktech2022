import React from "react";
import AppHero from "./components/AppHero";
import DoIt from "./components/DoIt";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HowApp from "./components/HowApp";
import ServiceButtons from "./components/ServiceButtons";
import StillUnsure from "./components/StillUnsure";

const applicationdevelopment = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />

      <AppHero />

      <ServiceButtons />

      <HowApp />

      <DoIt />

      <StillUnsure />

      <Footer />
    </div>
  );
};

export default applicationdevelopment;
