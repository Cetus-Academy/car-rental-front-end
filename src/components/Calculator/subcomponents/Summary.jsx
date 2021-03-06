import React from 'react';
import './Summary.css';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Summary = props => {
  const {
    priceBrutto,
    priceNetto,
    numberOfRentDays,
    deliveryFee,
    fuelPrice,
    priceOfFuelUsedWhileRented,
  } = props.summary;
  const { kilometersToDrive, future_location } = props.rentInfo;
  const priceForOneNight = props.priceForOneNight;
  const presentLocation = props.presentLocation;

  const vatPrice = priceNetto * 0.23;

  const rentPrice = priceForOneNight * numberOfRentDays;

  return (
    <section className='calculator-summary'>
      {/* Koszty paliwa   |   Podatek VAT   |    Cena wypożyczenia samochodu   |   Koszt dostarczenia samochodu*/}
      <div className='calculator-summary-graph'>
        <Pie
          data={{
            labels: [
              'Koszty paliwa',
              'Podatek VAT',
              'Cena wypożyczenia samochodu',
              'Koszt dostarczenia samochodu',
            ],
            datasets: [
              {
                label: '# of votes',
                data: [
                  priceOfFuelUsedWhileRented,
                  vatPrice,
                  rentPrice,
                  deliveryFee,
                ],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
              },
            ],
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false,
            legend: {
              labels: {
                fontSize: 25,
              },
            },
          }}
        />
      </div>
      <div className='calculator-summary-info'>
        <p>
          <span className='price-brutto'>
            <b>Wyliczona cena brutto:</b> {priceBrutto} zł
          </span>
          <span className='price-netto'> (netto: {priceNetto} zł)</span>
        </p>

        <p>
          <b>Ilość dni wypożyczenia:</b> {numberOfRentDays}
        </p>
        <p>
          <b>Bazowa cena wypożyczenia za dzień: </b>
          {priceForOneNight} zł
        </p>
        <p>
          <b>Szacunkowy dystans jaki chce pokonać klient:</b>{' '}
          {kilometersToDrive} km
        </p>
      </div>
    </section>
  );
};

export default Summary;
