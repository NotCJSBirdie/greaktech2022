import React from "react";
import CloudButtons from "./components/CloudButtons";
import CloudHero from "./components/CloudHero";
import Header from "./components/Header";
import HowCloud from "./components/HowCloud";

const clouddevelopment = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />

      <CloudHero />

      <CloudButtons />

      <HowCloud />
    </div>
  );
};

export default clouddevelopment;
