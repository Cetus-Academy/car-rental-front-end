import React from 'react';
import './ShoppingCart.scss';

const ShoppingCart = () => {
  return (
    <main className='shopping-cart'>
      <section className='cart-products'>
        <div className='labels'>
          <span>Produkt</span>
          <span></span>
          <span>Cena</span>
          <span>Ilość</span>
          <span>Razem</span>
        </div>
        <div className='cart-items'>
          <div className='cart-single-item'>
            <div className='cart-item-img'>
              <img
                src='https://image.ceneostatic.pl/data/products/104650493/i-giftwow-pies-z-kiwajaca-glowa.jpg'
                alt=''
              />
            </div>
            <div className='cart-item-name'>
              <p>Nazwa produktu</p>
            </div>
            <div className='cart-item-price'>
              <p>123zł</p>
            </div>
            <div className='cart-item-quantity'>
              <p>1</p>
            </div>
            <div className='cart-item-fullprice'>
              <p>123zł</p>
            </div>
          </div>
          <div className='cart-single-item'>
            <div className='cart-item-img'>
              <img
                src='https://image.ceneostatic.pl/data/products/104650493/i-giftwow-pies-z-kiwajaca-glowa.jpg'
                alt=''
              />
            </div>
            <div className='cart-item-name'>
              <p>Nazwa produktu</p>
            </div>
            <div className='cart-item-price'>
              <p>123zł</p>
            </div>
            <div className='cart-item-quantity'>
              <p>1</p>
            </div>
            <div className='cart-item-fullprice'>
              <p>123zł</p>
            </div>
          </div>
        </div>
      </section>
      <section className='cart-summary'>
        <h3>Koszyk razem</h3>
        <p>Suma: 123 zł</p>

        <button className='button'>Przejdź do kasy</button>
      </section>
    </main>
  );
};

export default ShoppingCart;
