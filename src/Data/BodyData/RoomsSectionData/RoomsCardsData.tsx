import { CiLocationOn } from "react-icons/ci";

export interface RoomsCardProps {
    img:string;
    title: string;
    price:string;
    description: string;
    icon:React.ReactNode
}

export const roomCardData= [
  {
    id:1,
    img:"/assets/images/Rooms/room1.png",
    title: "Luxury Apartment in California",
    price: "3,000,000",
    icon: <CiLocationOn  />,
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063"

  },
    {
    id:2,
    img:"/assets/images/Rooms/room2.png",
    title: "Luxury Apartment in California",
    price: "3,000,000",
    icon: <CiLocationOn  />,
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063"

  },
    {
    id:3,
    img:"/assets/images/Rooms/room3.png",
    title: "Luxury Apartment in California",
    price: "3,000,000",
    icon: <CiLocationOn  />,
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063"

  },
    {
    id:4,
    img:"/assets/images/Rooms/room4.png",
    title: "Luxury Apartment in California",
    price: "3,000,000",
    icon: <CiLocationOn  />,
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063"

  },
    {
    id:5,
    img:"/assets/images/Rooms/room5.png",
    title: "Luxury Apartment in California",
    price: "3,000,000",
    icon: <CiLocationOn  />,
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063"

  },
    {
    id:6,
    img:"/assets/images/Rooms/room6.png",
    title: "Luxury Apartment in California",
    price: "3,000,000",
    icon: <CiLocationOn  />,
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063"

  }
]
