/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import '@styles/App.scss';
import Header from '@components/Header';
import Search from '@components/Search';
import Categories from '@components/Categories';
import Carousel from '@components/Carousel';
import CarouselItem from '@components/CarouselItem';
import Footer from '@components/Footer';

const KEYAPI = 'c7dcdd10534cce4ba270cb140c089255';

const App = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${KEYAPI}`);
        const data = await response.json();
        return setFilms(data.results);
      } catch {
        console.log(error);
      }
    };
    fetchFilms();
  }, []);

  console.log(films);
  console.log(KEYAPI);

  return (
    <div className='app'>
      <Header />
      <Search />
      <Categories title='Film premieres'>
        <Carousel>
          {films.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
