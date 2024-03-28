import React from "react";
import AboutComponent from "../components/HomePage/AboutComponet";
import SkillsComponent from "../components/HomePage/SkillsComponent";
import PortfolioComponent from "../components/HomePage/PortfolioComponent";
import ContactComponent from "../components/HomePage/ContactComponent";
const HomePage = () => {
  return (
    <div className="h-full">
      <AboutComponent />
      <SkillsComponent />
      <PortfolioComponent />
      <ContactComponent />
    </div>
  );
};

export default HomePage;
