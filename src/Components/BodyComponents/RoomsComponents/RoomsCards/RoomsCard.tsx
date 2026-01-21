import React from "react";
import "/src/Css/BodyCss/RoomsCss/RoomsCardCss/roomscard.css";
import type { RoomsCardProps } from "../../../../Data/BodyData/RoomsSectionData/RoomsCardsData";

const RoomsCard: React.FC<RoomsCardProps> = ({img, title, price,description, icon }) => {
    return(

        <div className="room-card-content">
            <img src={img} alt={title} />
            <div className="room-card-info">
                <span className="price">$ {price}</span>
                <h3>{title}</h3>
                <div className="location-info">
                    <span>{icon} {description}</span>
                </div>
            </div>
        </div>
    );
};

export default RoomsCard