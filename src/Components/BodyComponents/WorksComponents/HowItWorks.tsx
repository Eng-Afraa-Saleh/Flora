import { workCards } from '../../../Data/BodyData/WorksSectionData/WorksCardData';
import WorksCard from './WorksCard';
import '/src/Css/BodyCss/WorkCss/howitworkssection.css';
import { motion } from 'framer-motion';

const HowItWorks = () =>{
    return(

        <section className='how-it-works-section container'>

               <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className='title-section'>How It Works</h2>
            <p className='title-section-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

          </motion.div>

             <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
          <div className="works-card-container">
              {workCards.map((card, index) => (
                <WorksCard
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  descreption={card.descreption}
                />
              ))}
        </div>
          </motion.div>

        </section>

    );
};

export default HowItWorks