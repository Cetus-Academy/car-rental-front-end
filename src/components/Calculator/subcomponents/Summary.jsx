import React from "react"
import "./Summary.css"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Pie } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend)

const Summary = (props) => {
  const {
    priceBrutto,
    priceNetto,
    numberOfRentDays,
    deliveryFee,
    fuelPrice,
    priceOfFuelUsedWhileRented,
  } = props.summary
  const { kilometersToDrive, future_location } = props.rentInfo
  const priceForOneNight = props.priceForOneNight
  const presentLocation = props.presentLocation

  const vatPrice = priceNetto * 0.23

  const rentPrice = priceForOneNight * numberOfRentDays

  return (
    <section className="calculator-summary">
      {/* Koszty paliwa   |   Podatek VAT   |    Cena wypożyczenia samochodu   |   Koszt dostarczenia samochodu*/}
      <div className="calculator-summary-graph">
        <Pie
          data={{
            labels: [
              "Koszty paliwa",
              "Podatek VAT",
              "Cena wypożyczenia",
              "Koszt dostarczenia",
            ],
            datasets: [
              {
                label: "# of votes",
                data: [
                  priceOfFuelUsedWhileRented,
                  vatPrice,
                  rentPrice,
                  300,
                  // deliveryFee,
                ],
                backgroundColor: [
                  "rgba(177, 70, 167, 0.4)",
                  "rgba(174, 37, 0, 0.4)",
                  "rgba(182, 9, 43, 0.4)",
                  "rgba(129, 109, 213, 0.4)",
                ],
                borderColor: [
                  "rgba(177, 70, 167, 1)",
                  "rgba(174, 37, 0, 1)",
                  "rgba(182, 9, 43, 1)",
                  "rgba(129, 109 ,213, 1)",
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
      <div className="calculator-summary-info">
        <div className="calculator-summary-info-item">
          <span>Szacunkowy dystans:</span>{" "}
          <p className="calculator-summary-info-item-value">
            {kilometersToDrive} km
          </p>
        </div>
        <div className="calculator-summary-info-item-line"></div>
        <div className="calculator-summary-info-item">
          <span>Bazowa cena za dzień: </span>
          <p className="calculator-summary-info-item-value">
            {priceForOneNight} zł
          </p>
        </div>
        <div className="calculator-summary-info-item-line"></div>
        <div className="calculator-summary-info-item">
          <span>Ilość dni:</span>
          <p className="calculator-summary-info-item-value">
            {numberOfRentDays}
          </p>
        </div>
        <div className="calculator-summary-info-item-line"></div>
        <div className="calculator-summary-info-item">
          <span className="price-brutto">
            <span>Wyliczona cena:</span>
            <br></br>
            <span className="calculator-summary-info-item-value-brutto">
              {priceBrutto} zł
            </span>
          </span>
          <p className="price-netto"> (netto: {priceNetto} zł)</p>
        </div>
      </div>
    </section>
  )
}

export default Summary
