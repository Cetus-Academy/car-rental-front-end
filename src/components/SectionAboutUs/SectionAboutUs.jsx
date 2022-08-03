import React from "react";
import { routes } from '../../config/routes/routes';
import './scss/styles.scss'
import phonecallicon from './img/phone-call.png';
import openicon from './img/open.png';

const SectionAboutUs = () => {
    return (
        <>
            {/* <div className="section"> */}
                <h2 className="fonto">KIM JESTEŚMY?</h2>
                <h3>-  CarRental  -</h3>
            <p className="tt">
            Jesteśmy firmą, która oferuje ci najlepsze opcje wypożyczania samochodów.
                Swoją firme założyliśmy w 2015 roku.
                Zaczynaliśmy jako mała firma, teraz jesteśmy jedną z napopularniejszych wypożyczalini w Rzeszowie.
                Nasze samochody zawsze były zadbane i bezpieczne.
                Po każdym wypożyczaniu, gdy samochód trafia z powrotem do firmy, jest czyszczony,odkurzany i sprawdzany czy nie ma jakieś usterki.
                Dbamy aby każdy z naszych klientów był zawsze zadowolony, dlatego dzięki kontaktom zamieszczonym poniżej, mogą państwo skątaktować się z nami i podzielić się swoimi sugestiami uwagami.
                Mamy nadzieję, że wspólnie udoskonalimy do perfekcji tą firmę.
                Z góry dziękujemy.
            </p>
            {/* </div> */}
            <h2 className="fontt">Masz Pytanie?</h2>
            <div className="section-call">
                <img src={phonecallicon} alt="" className="icon" /> <p className="call">+48 000-000-000</p>
                <img src={openicon} alt="" className="icon" /> <p className="call">usługi@carRental.pl</p>
                
            </div>
            
        </>
    );
};
export default SectionAboutUs;