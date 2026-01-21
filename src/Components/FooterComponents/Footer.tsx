import React from 'react'
import FooterTop from './FooterTopComponents/FooterTop'
import { motion } from 'framer-motion'
import "/src/Css/FooterCss/footer.css"
import FooterBottom from './FooterBottomComponents/FooterBottom'

const Footer: React.FC = () =>  {
  return (
    <section className='footer-section container'>
      <FooterTop/>
        <motion.div
          className="underline"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }} 
        />
        <FooterBottom/>
    </section>
  )
}

export default Footer;
