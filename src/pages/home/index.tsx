import SectionCollab from './SectionCollab';
import SectionEvent from './SectionEvent';
import SectionHero from './SectionHero';
import SectionService from './SectionService';

const HomePage: React.FC = () => {
  return (
    <>
      <SectionHero />
      <SectionEvent />
      <SectionService />
      <SectionCollab />
    </>
  );
};

export default HomePage;
