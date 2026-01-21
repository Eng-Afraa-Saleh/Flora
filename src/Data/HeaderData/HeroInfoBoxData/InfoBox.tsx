import { FaHome } from "react-icons/fa";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";


export type InfoBox = {
    icon: React.ReactNode;
    title: string;
    details: string;
};

export interface HeroProps {
    titleHero: string;
    description: string;
    info?: InfoBox[];
}

export const heroData: HeroProps = {
  titleHero: "Discover a place you will love to live",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque.",
  info: [
    {
      icon: <MdLocationOn />,
      title: "Location",
      details: "Ahmedabad, India",
    },
    {
      icon: <HiOutlineCurrencyDollar />,
      title: "Price",
      details: "$1000 - $10,000",
    },
    {
      icon: <FaHome />,
      title: "Type of Property",
      details: "Apartment",
    },
  ]
};