import React from 'react';
import "/src/Css/FooterCss/FooterBottomCss/footerbottom.css";

const FooterBottom: React.FC = () => {
  return (
    <div className='footer-bottom'>
      <div className="copyright">
        <p>
            Copyright 2024 flora. All Rights Reserved
        </p>
      </div>
      <div className="additional-text-footer">
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
}

export default FooterBottom;
