import React from "react";
import "./scss/styles.scss";
import extraicon from "./images/extra.png";
import caricon from "./images/car.png";
import fiveicon from "./images/five.png";
import calendaricon from "./images/calendar.png";
import checkmarkicon from "./images/check-mark.png";

const SectionWithBannerAndFeatures = () => {
  return (
    <>
      <section className="differences">
        <div className="car-page">
          <img
            src="https://static.moniteurautomobile.be/imgcontrol/images_tmp/clients/moniteur/c680-d465/content/medias/images/test_drives/10000/200/20/bmw-m440i-2020-dynamisch-voorkant2.jpg"
            alt="zdjęcie aut"
            className="hire-car"
          />
        </div>

        <div className="header">
          <h3>CZYM RÓŻNIMY SIĘ OD INNYCH?</h3>
        </div>

        <div className="itemo">
          <img src={extraicon} alt="ikonka wyboru" className="iconca" />
          <p className="wpo">Szeroki wybór</p>
          <p className="wpt">Aut i oplicji dodatkowych</p>
        </div>

        <div className="itemt">
          <img src={caricon} alt="ikona samochodu" className="iconp" />
          <p className="wpo"> Samochody</p>
          <ul>
            <li>Nowe</li>
            <li>Zadbane</li>
            <li>Bezpieczne</li>
          </ul>
        </div>

        <div className="itemh">
          <img src={fiveicon} alt="ikonka piątki" className="iconf" />
          <p className="wpo">Mocna piątka</p>
          <p className="wpt">
            Kierowcy którzy posiadają więcej niż 5 lat prawo jazdy otrzymują
            zniżkę
          </p>
        </div>

        <div className="itemf">
          <img src={calendaricon} alt="ikona kalendarza" className="iconca" />
          <p className="wpo">Bezpłatna rezerwacja</p>
          <p className="wpt">Bez konieczności podawania karty</p>
        </div>
      </section>
      {/* <div class="parent">
        <div class="div1">s </div>
        <div class="div2"> a</div>
        <div class="div3">c</div>
        <div class="div4">v </div>
        <div class="div5"> q</div>
        <div class="div6"> j</div>
      </div> 
      
      
       <div className="features__items">
      
      
      */}
    </>
  );
};

export default SectionWithBannerAndFeatures;
