import { TbHomeSearch, TbHomeHand, TbHomeCheck  } from "react-icons/tb";

export type WorksCardProps = {
    icon:React.ReactNode;
    title: string;
    descreption:string; 
};

export const workCards: WorksCardProps[] = [
  {
    icon: <TbHomeSearch />,
    title: 'Search Apartment',
    descreption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.',
  },
  {
    icon: <TbHomeHand />,
    title: 'Select Apartment',
    descreption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.',
  },
  {
    icon: <TbHomeCheck />,
    title: 'Confirm Apartment',
    descreption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.',
  },
];