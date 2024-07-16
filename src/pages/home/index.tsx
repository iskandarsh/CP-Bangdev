import React from "react";

import SectionCollab from "./SectionCollab";
import SectionEvent from "./SectionEvent";
import SectionHero from "./SectionHero";
import SectionService from "./SectionService";

const Home: React.FC = () => {
  return (
    <>
      <SectionHero />
      <SectionEvent />
      <SectionService />
      <SectionCollab />
    </>
  );
};

export default Home;
