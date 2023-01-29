import React from "react";
import Contact from "../../components/Contact";
import Introduction from "../../components/Introduction";
import Navbar from "../../components/Navbar";
import SpaceDivider from "../../components/SpaceDivider";
import TechStack from "../../components/TechStack";
import WhatIDo from "../../components/WhatIDo";
import WorkSamples from "../../components/WorkSamples";

const Home = () => {
  return (
    <div className="min-h-screen w-screen bg-[#16161d] items-center flex flex-col">
      <Navbar />

      {/* Divider */}
      <SpaceDivider />

      <Introduction />

      {/* Divider */}
      <SpaceDivider extendedStyles={{ height: "200px" }} />

      <WhatIDo />

      {/* Divider */}
      <SpaceDivider extendedStyles={{ height: "200px" }} />

      <TechStack />

      {/* Divider */}
      <SpaceDivider extendedStyles={{ height: "200px" }} />

      <WorkSamples />

      {/* Divider */}
      <SpaceDivider extendedStyles={{ height: "200px" }} />

      <Contact />
    </div>
  );
};

export default Home;
