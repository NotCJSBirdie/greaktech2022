import React from "react";
import CyberButtons from "./components/CyberButtons";
import CyberHero from "./components/CyberHero";
import DoItCyber from "./components/DoItCyber";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HowCyber from "./components/HowCyber";
import StillUnsure from "./components/StillUnsure";

const cybersecurity = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />

      <CyberHero />

      <CyberButtons />

      <HowCyber />

      <DoItCyber />

      <StillUnsure />

      <Footer />
    </div>
  );
};

export default cybersecurity;
