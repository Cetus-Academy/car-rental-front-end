import React from 'react';
import './ShoppingCart.scss';

const ShoppingCart = () => {
  return (
    <main className='shopping-cart'>
      <div className='cart-products'>
        <div className='labels'>
          <span>Produkt</span>
          <span>Cena</span>
          <span>Ilość</span>
          <span>Razem</span>
        </div>
        <div className='cart-items'>
          <div className='cart-single-item'>
            <div className='cart-item-img'>
              <img
                src='https://a.allegroimg.com/original/11ce9c/6d70593b4015b139321a2344b6cf/Zestaw-naklejek-na-samochod-LAMINOWANE-UV'
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
                src='https://a.allegroimg.com/original/11ce9c/6d70593b4015b139321a2344b6cf/Zestaw-naklejek-na-samochod-LAMINOWANE-UV'
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
      </div>
    </main>
  );
};

export default ShoppingCart;
