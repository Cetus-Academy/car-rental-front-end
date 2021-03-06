import React, { useState } from 'react';

import { routes } from '../../config/routes/routes';
import { Link } from 'react-router-dom';
import './CarsList.css';

import Filtering from './subcomponents/Filtering';
import Loader from '../Loader/Loader';
import { Helmet } from 'react-helmet';

const CarsList = () => {
  const [carsList, setCarsList] = useState(null);
  return (
    <>
      <Helmet>
        <title>Lista samochodów | CarRental</title>
        <meta
          name='description'
          content='Sprawdź jakie pojazdy masz możliwość u nas wypożyczyć, na pewno znajdziesz coś dla siebie!'
        />
      </Helmet>
      <main className='cars-list'>
        <Filtering setCarsList={setCarsList} />

        {carsList && carsList.length <= 0 ? (
          <section className='no-offers'>
            <div className='content'>
              <h2>
                Przykro nam, ale niestety nie mamy tego czego szukasz {':('}
              </h2>
              <h3>Prosimy poszukać innego interesującego cię samochodu!</h3>
            </div>
          </section>
        ) : carsList ? (
          carsList.map(item => (
            <Link to={routes.car(item.slug)} key={item.id}>
              <section className='single-car-card'>
                <div className='summary-of-single-car'>
                  <div className='photo-of-single-car'>
                    <img
                      src={item.car_details.images[0].src}
                      alt={item.car_details.images[0].alt}
                    />
                  </div>
                  <div className='summary'>
                    <span>
                      {item.car_details.brand} {item.car_details.model}
                    </span>
                    <span>Kat. cenowa: {item.car_details.category}</span> <br />
                    <ul>
                      <li>{item.car_details.year_of_production}</li>
                      <li className='details-list'>
                        {item.car_details.mileage} km
                      </li>
                      <li className='details-list'>{item.car_details.fuel}</li>
                    </ul>
                    <div className='car-description'>
                      <p>
                        {item.car_details.description.length > 200
                          ? `${item.car_details.description.slice(0, 200)}...`
                          : item.car_details.description}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </Link>
          ))
        ) : (
          <Loader />
        )}
      </main>
    </>
  );
};

export default CarsList;
