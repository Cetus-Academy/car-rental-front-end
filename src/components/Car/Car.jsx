import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import "./Car.css";
import {GetCarBySlug } from "../../services/request";


import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


const Car = () => {
    const {carSlug} = useParams();

    const [thisCar, setThisCar] = useState({});
    // const video = (url) => {
    //     const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    //     const match = url.match(regExp);

    //     return (match && match[2].length === 11) ? match[2] : null;
    // }

    // const videoId = video(thisCar.car_details.video);
    // const iframeMarkup =`//www.youtube.com/embed/${videoId} `;



    useEffect(()=> {

        GetCarBySlug(carSlug).then(response => {

            setThisCar(response);
        })
        console.log('useeffect')
    },[carSlug])

    console.log(thisCar.car_details.brand)
    console.log('render');
    return ( 

        <main className="car">
            <section className="introduction">
                <div className="photos">
                    <OwlCarousel className="owl-theme owl-carousel" items="1" loop nav>
                        {thisCar && thisCar.car_details.images.map((item,index) => 
                        <div key={index} className="item">
                            <img src={item.src} alt={item.alt} />
                        </div>
                        )}
                    </OwlCarousel>
                </div>
                <div className="car-info">
                    <h2>{thisCar.car_details.brand} {thisCar.car_details.model} {thisCar.car_details.generate}</h2>
                    <span>
                        <ul>
                            <li>{thisCar.car_details.year_of_production}</li>
                            <li className="details-list">{thisCar.car_details.mileage} km</li>
                            <li className="details-list">{thisCar.car_details.fuel}</li>
                        </ul>
                    </span>
                    <p className="price">
                        <span>{thisCar.car_details.price} PLN</span>
                        <span><a href="#">Oblicz {">"}</a></span> <br />
                        <small>Kategoria cenowa: </small>
                    </p>
                    <h3>Opis:</h3>
                    <p className="car-description">{thisCar.car_details.description}</p>
                </div>
            </section>

            <section className="car-details">
                <h3>Szczegóły pojazdu:</h3>

                    <div className="sides">
                        <div className="left">
                            <p><b>Marka:</b> {thisCar.car_details.brand}</p>
                            <p><b>Model:</b> {thisCar.car_details.model}</p>
                            <p><b>Generacja:</b> {thisCar.car_details.generate}</p>
                            <p><b>Rok produkcji:</b> {thisCar.car_details.year_of_production}</p>
                            <p><b>Przebieg:</b> {thisCar.car_details.mileage} km</p>
                            <p><b>Pojemność skokowa:</b> {thisCar.car_details.displacement} cm<sup>3</sup></p>
                            <p><b>Rodzaj paliwa:</b> {thisCar.car_details.fuel}</p>
                            <p><b>Moc:</b> {thisCar.car_details.power}</p>

                        </div>
                        <div className="right">
                            <p><b>Napęd:</b> {thisCar.car_details.drive}</p>
                            <p><b>Liczba drzwi:</b> {thisCar.car_details.number_of_doors}</p>
                            <p><b>Liczba miejsc:</b> {thisCar.car_details.number_of_places}</p>
                            <p><b>Kolor:</b> {thisCar.car_details.color}</p>
                            <p><b>Kraj pochodzenia:</b> {thisCar.car_details.country_of_origin}</p>
                            <p><b>Data pierwszej rejestracji:</b> {thisCar.car_details.first_registration}</p>
                            <p><b>Stan:</b> {thisCar.car_details.car_condition}</p>
                        </div>
                    </div>
            </section>
            <section className="car-equipment">
                <h3>Wyposażenie:</h3>
                    <ol className="list-equipment">
                        {thisCar && thisCar.car_equipment.map((item,index) =>
                            <li key={index}>{item}</li>
                        )}
                    </ol>


                
            </section>
            <section className="video">
                <h3>Hej, chcesz zobaczyć samochód w akcji? Oto on!</h3>
                {/* <div className="container">
                    <iframe src={iframeMarkup} frameBorder="0" allowFullScreen title="Prezentacja samochodu">Twoja przeglądarka nie wspiera iframe!</iframe>
                </div> */}
            </section>
            <section className="other-info">
                    <div className="left">
                        <h3>Dowiedz się na jakiej zasadzie produkt jest wyceniany</h3>
                        <p>Analizujemy wszystkie cechy pojazdu i porównujemy je z podobnymi ogłoszeniami. Jeżeli chcesz dowiedzieć się więcej kliknij w przycisk!</p>
                        <button className="button-first">Nasz kalkulator</button>
                    </div>
                    <div className="right">
                        <h3>Zasięgnij rady eksperta</h3>
                        <p>Zadaj nam pytanie a my postaramy się na nie odpowiedzieć. Możesz również umówić się na oględziny pojazdu oraz na jazdę próbną!</p>
                        <button className="button-second">Skontaktuj się z nami</button>
                    </div>
            </section>  
        
    </main>
     );
}
 
export default Car;