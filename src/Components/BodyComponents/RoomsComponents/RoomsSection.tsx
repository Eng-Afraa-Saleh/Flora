import React from "react";
import RoomsCard from "./RoomsCards/RoomsCard";
import "/src/Css/BodyCss/RoomsCss/roomssection.css"
import { motion } from 'framer-motion';
import { roomCardData } from "../../../Data/BodyData/RoomsSectionData/RoomsCardsData";


const RoomsSection: React.FC = () => {
  return(
    <section className="container rooms-section">
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="title-section">Most Trending</h2>
            <p className="title-section-desc">Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>

          </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="rooms-cards-container">
              {roomCardData.map((card) =>(
                <RoomsCard key={card.id}{...card}/>
              )
            )}

            </div>

          </motion.div>


    </section>
  );
};

export default RoomsSection