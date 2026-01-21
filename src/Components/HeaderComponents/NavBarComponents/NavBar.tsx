import React , {useState} from 'react'
import { motion } from 'framer-motion';
import { IoMdClose, IoMdMenu } from "react-icons/io";

import '/src/Css/HeaderCss/NavBarCss/navbar.css';

const NavBar:React.FC=()=>{
  const[isMenuOpen,setIsMenuOpen]= useState<boolean>(false);
  const toggleMenu = ()=>{
    setIsMenuOpen(!isMenuOpen)
  };

  //images
  let logoImg: string = "/assets/images/logo/Logo.png";
  let logoName: string = "/assets/images/logo/Flora.png";

  return(
      <nav className={`nav-bar ${isMenuOpen ? 'open-menu' : ''}`}>
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

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
              <div className={`menu-desktop ${isMenuOpen ? 'open' : ''}`}>
                  <ul className='menu'>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Service</a></li>
                      <li><a href="#">New Property</a></li>
                      <li><a href="#">Contact</a></li>

                  </ul>
                  <div className="btn-menu">
                   <button className='btn-login btn-mobile-menu'>Login</button>

                  </div>
              </div>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
              <div className="button-content">
                <button className="btn-login">Login</button>
              </div>
          
          
          </motion.div>

          <div className="burger-menu" onClick={toggleMenu}>
        {isMenuOpen ? (
          <span className="close-icon"><IoMdClose /></span>
        ) : (
          <>
            <span className="menu-icon"><IoMdMenu /></span>
            
            
          </>
        )}
        
      </div>
      </nav>
  );

};


export default NavBar