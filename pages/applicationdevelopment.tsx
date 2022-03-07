import React from "react";
import AppHero from "./components/AppHero";
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
    </div>
  );
};

export default applicationdevelopment;
