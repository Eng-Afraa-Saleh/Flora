import FilterGallery from "./FilterComponents/FilterGallery";
import DreamHomeComponent from "./HomeComponents/DreamHomeComponent";
import RoomsSection from "./RoomsComponents/RoomsSection";
import HowItWorks from "./WorksComponents/HowItWorks";

const Body: React.FC = () => {
  return (
    <div>
      <HowItWorks/>
      <DreamHomeComponent/>
      <RoomsSection/>
      <FilterGallery/>
    </div>
  );
};

export default Body;