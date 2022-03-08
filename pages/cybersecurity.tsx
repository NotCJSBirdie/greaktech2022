import React from "react";
import CyberButtons from "./components/CyberButtons";
import CyberHero from "./components/CyberHero";
import Header from "./components/Header";

const cybersecurity = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />

      <CyberHero />

      <CyberButtons />
    </div>
  );
};

export default cybersecurity;
