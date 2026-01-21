import Navbar from './NavBarComponents/NavBar';
import Hero from './HeroComponents/Hero';
import { heroData } from '../../Data/HeaderData/HeroInfoBoxData/InfoBox';

const Header: React.FC = () =>  {
  return (
    <div className="container">
      <Navbar />
      <Hero {...heroData} />
    </div>
  );
}

export default Header