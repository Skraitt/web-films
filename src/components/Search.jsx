/* eslint-disable import/no-unresolved */
import React from 'react';
import '@styles/components/Search.scss';

const Search = () => (
  <section className='main'>
    <h2 className='main__title'>¿What do you want to see today?</h2>
    <input className='input' type='text' placeholder='Buscar...' />
  </section>
);

export default Search;
