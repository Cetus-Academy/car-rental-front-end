import React, { useState, useEffect } from 'react';
import './Footer.scss';
import facebookLogo from '../../img/facebook-logo.png';
import instagramLogo from '../../img/instagram-logo.png';
import linkedinLogo from '../../img/linkedin-logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [thisDate, setThisDate] = useState(null);
  useEffect(() => {
    setThisDate(new Date().getFullYear());
  }, []);

  return (
    <footer>
      <div className='footer-header'>
        <div className='footer-header-left-panel'>
          <div className='footer-info'>
            <h2>CarRental</h2>
            <h3>Najlepszy serwis z samochodami w Polsce!</h3>
            <p>Dziękujemy że nas odwiedziłeś, mamy nadzieję że niedługo wrócisz.</p>
          </div>
          <div className='footer-navigation'>
            <Link to="/polityka-prywatnosci">
              <p>Polityka prywatności</p>
            </Link>
            <Link to="/regulamin">
              <p>Regulamin</p>
            </Link>
            <Link to="/kontakt">
              <p>Kontakt</p>
            </Link>
          </div>
        </div>
        <div className='footer-header-right-panel'>
          <div className='footer-social-media'>
            <img src={facebookLogo} alt="facebook logo"/>
            <img src={instagramLogo} alt="instagram logo"/>
            <img src={linkedinLogo} alt="linkedin logo"/>
          </div>
          <div className='footer-contact-info'>
            <h1>(123) 456-78901</h1>
            <h2>support@vehica.com</h2>
            <p>West 12th Street
              New York, NY, USA
            </p>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='footer-copyright'>
          <p>Copyright &copy; {thisDate} CarRental</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
