import React from 'react';
import '/src/Css/BodyCss/WorkCss/WorksCardCss/workscard.css';
import type { WorksCardProps } from '../../../Data/BodyData/WorksSectionData/WorksCardData';



const WorksCard: React.FC<WorksCardProps> = ({icon, title, descreption}) => {
    return(
        <div className="how-it-works-card">
            <div className="card-icon">
                {icon}
            </div>
            <h3 className='card-title'>
                {title}
            </h3>
            <p className='card-description'>
                {descreption}
            </p>
        </div>

    );
};

export default WorksCard;