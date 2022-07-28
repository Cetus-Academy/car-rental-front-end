import React, { useState, useEffect } from 'react';
import './Footer.scss';

const Footer = () => {
  const [thisDate, setThisDate] = useState(null);
  useEffect(() => {
    setThisDate(new Date().getFullYear());
  }, []);

  return (
    <footer>
      <div className='footer-info'>
        <h2>CarRental</h2>
        <h3>Najlepszy serwis z samochodami w Polsce!</h3>
        <p>Dziękujemy że nas odwiedziłeś, mamy nadzieję że niedługo wrócisz.</p>
      </div>
      <div className='footer-copyright'>
        <p>Copyright &copy; {thisDate} CarRental</p>
      </div>
    </footer>
  );
};

export default Footer;
