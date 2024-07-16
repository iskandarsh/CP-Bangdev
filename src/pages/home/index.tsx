import React from "react";

import Layout from "@layouts/Layout";
import SectionCollab from "./SectionCollab";
import SectionEvent from "./SectionEvent";
import SectionHero from "./SectionHero";
import SectionService from "./SectionService";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <SectionHero />
      <SectionEvent />
      <SectionService />
      <SectionCollab />
    </Layout>
  );
};

export default HomePage;
