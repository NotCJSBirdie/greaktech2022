import React from "react";
import AppHero from "./components/AppHero";
import DoIt from "./components/DoIt";
import Header from "./components/Header";
import HowApp from "./components/HowApp";
import ServiceButtons from "./components/ServiceButtons";

const applicationdevelopment = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />

      <AppHero />

      <ServiceButtons />

      <HowApp />

      <DoIt />
    </div>
  );
};

export default applicationdevelopment;
