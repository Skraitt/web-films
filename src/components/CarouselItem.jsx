/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
import React from 'react';
import '@styles/components/CarouselItem.scss';

const CarouselItem = ({ backdrop_path, original_title, release_date }) => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src={`https://image.tmdb.org/t/p/w342${backdrop_path}`} alt='img' />
    <div className='carousel-item__details'>
      <div>
        <img className='carousel-item__details--img' src='https://img.icons8.com/flat-round/64/000000/play--v1.png' alt='' />
        <img className='carousel-item__details--img' src='https://img.icons8.com/flat-round/64/000000/plus.png' alt='' />
      </div>
      <p className='carousel-item__details--title'>{original_title}</p>
      <p className='carousel-item__details--subtitle'>{release_date}</p>
    </div>
  </div>
);

export default CarouselItem;
