import React from "react";
import CyberButtons from "./components/CyberButtons";
import CyberHero from "./components/CyberHero";
import Header from "./components/Header";
import HowCyber from "./components/HowCyber";

const cybersecurity = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />

      <CyberHero />

      <CyberButtons />

      <HowCyber />
    </div>
  );
};

export default cybersecurity;
