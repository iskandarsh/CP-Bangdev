import heroImg from "../../assets/images/hero.png";
import SectionCollab from "./SectionCollab";
import SectionEvent from "./SectionEvent";
import SectionHero from "./SectionHero";
import SectionService from "./SectionService";

const Home = () => {
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
