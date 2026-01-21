import React from 'react';
import { Parallax } from 'react-parallax';
import '/src/Css/BodyCss/HomeCss/dreamhome.css';
import { motion } from 'framer-motion';

const DreamHomeComponent: React.FC = () => {
  const img: string = '/assets/images/Home/Home.png';

  return (
    <div className="home-section">
      <Parallax bgImage={img} strength={300} bgImageAlt="Home background">

        <div className="content-home">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h1>Find Dream Home</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
            
          </motion.div>

        </div>
      </Parallax>
    </div>
  );
};

export default DreamHomeComponent;
