import React from 'react';

import '../assets/styles/components/Header.scss';
import logo from '../assets/img/logo-platzi-video.png';
import logUser from '../assets/img/user-icon.png';
export default function Header() {
  return (
    <header className="header">
      <a href="/">
        <img src={logo} alt="Logo Platzi video" />
      </a>
      <div className="header__menu">
        <a className="header__menu--perfil" href="">
          <img className="header__user-logo" src={logUser} alt="logo usuario" />
          Perfil
        </a>
        <ul>
          <li>
            <a href="">Cuenta </a>
          </li>
          <li>
            <a href="#">Cerrar Sesión</a>{' '}
          </li>
        </ul>
      </div>
    </header>
  );
}
