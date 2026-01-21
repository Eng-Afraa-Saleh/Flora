import React from "react";
import '/src/Css/BodyCss/FilterCss/FilterCardsCss/filtercard.css';
import type { CardProps } from "../../../../Data/BodyData/FilterSectionData/FilterCardsData";


const FilterCard: React.FC<CardProps> = ({img,details,details2})=>{

    return(
        <div className="filter-card">
            <img src={img} alt="card" />
            <div className="details-content">
             <p className="showcase-badge">{details}</p>
             <p className="showcase-badge">{details2}</p>

            </div>
        </div>
    );
};
export default FilterCard;