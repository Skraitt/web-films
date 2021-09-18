/* eslint-disable import/no-unresolved */
import React from 'react';
import '@styles/components/Header.scss';
import logo from '@images/logo-platzi.png';
import userIcon from '@images/user-icon.png';

const Header = () => (
  <header className='header'>
    <img className='header__img' src={logo} alt='platziLogo' />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={userIcon} alt='perfil' />
        <h3>Perfil</h3>
      </div>
      <nav>
        <ul>
          <li><a href='/logIn/logIn.html'>Log in</a></li>
          <li><a href='/signIn/signIn.html'>Sign up</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
