import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import '/src/Css/FooterCss/FooterTopCss/footertop.css';
import type { LocationInfoProps } from '../../../Data/FooterData/FooterTopData/FooterTopLocationData';
import type { FooterMenuProps } from '../../../Data/FooterData/FooterTopData/FooterTopMenuData';





const FooterMenu: React.FC<FooterMenuProps> = ({title, items }) => (
  <div className="footer-top-menu">
    <h3>{title}</h3>
    <ul className="footer-menu-content">
      {items.map((item, index ) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const LocationInfo: React.FC<LocationInfoProps> = ({address}) => (
  <div className="footer-top-location">
    <h3>Our Location</h3>
    <div className="location-info">
      <p>{address}</p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, delay: 1 }}
        viewport={{ once: true }}
      >
        <div className="social-icons">
          <ul>
            <li><a href="#"><FaFacebookF /></a></li>
            <li><a href="#"><FaLinkedinIn /></a></li>
            <li><a href="#"><FaTwitter /></a></li>
          </ul>
        </div>
      </motion.div>
    </div>
  </div>
);

const FooterTop: React.FC = () => {
  const logoImg:string = "/assets/images/logo/Logo.png" ;
  const logoName: string = "/assets/images/logo/Flora.png";

  return (
    <div className="footer-top">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="logo-part">
          <div className="logo">
            <img src={logoImg} alt="Flora Logo" />
          </div>
          <div className="logo-name">
            <img src={logoName} alt="Flora" />
          </div>
        </div>
        <p className="title-section-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="footer-top-services-about">
          <FooterMenu
            title="Services"
            items={["Payment & Tax","Support","View Booking", "Support"]}
          />
          <FooterMenu
            title="About Us"
            items={[ "About","News", "Pricing", "New Property" ]}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <LocationInfo address="2972 Westheimer Rd. Santa Ana, Illinois 85486" />
      </motion.div>
    </div>
  );
};

export default FooterTop;
