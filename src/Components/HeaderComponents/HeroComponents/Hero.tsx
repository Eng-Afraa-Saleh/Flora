import React from "react";
import { motion } from 'framer-motion';
import '/src/Css/HeaderCss/HeroCss/hero.css';
import type { HeroProps } from "../../../Data/HeaderData/HeroInfoBoxData/InfoBox";

const Hero: React.FC<HeroProps> = ({ titleHero, description, info =[] }) => {

    return(
        <motion.div
              initial= {{ opacity: 0, y: 0 }}
              whileInView= {{ opacity: 1, y: 0 }}
              transition= {{ duration: 1.6, delay: 0.2 }}
              viewport= {{ once: true }}
            >
            <div className="hero-section">
                <div className="image-background"/>
                <div className="content-layer">
                    <div className="content">
                        <div className="text-container">
                            <h1>{titleHero}</h1>
                            <p>{description}</p>
                        </div>

                        <motion.div
                            initial= {{ opacity: 0, x: -50 }}
                            whileInView= {{ opacity: 1, x: 0 }}
                            transition= {{ duration: 1.6, delay: 0.2 }}
                            viewport= {{ once: true }}
                            >

                            {info.length>0 &&(
                                <div className="info-box">
                                    {info.map((item,index)=>(
                                        <div className="info-items" key={index}>
                                        <div className="icon">
                                            {item.icon}
                                            </div> 

                                            <div className="item">
                                                <label>{ item.title}</label>
                                                <p>{ item.details }</p>
                                            </div>

                                        </div>
                                    ))}
                                </div>
                            )}

                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
            
    );
};


export default Hero;