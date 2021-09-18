/* eslint-disable import/no-unresolved */
import React from 'react';
import '@styles/components/CarouselItem.scss';
import imagen from '@images/pexels-ena-marinkovic-3640930.jpg';

const CarouselItem = () => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src={imagen} alt='img' />
    <div className='carousel-item__details'>
      <div>
        <img className='carousel-item__details--img' src='https://img.icons8.com/flat-round/64/000000/play--v1.png' alt='' />
        <img className='carousel-item__details--img' src='https://img.icons8.com/flat-round/64/000000/plus.png' alt='' />
      </div>
      <p className='carousel-item__details--title'>Titulo descriptivo</p>
      <p className='carousel-item__details--subtitle'>2021 16+ 115 min</p>
    </div>
  </div>
);

export default CarouselItem;
