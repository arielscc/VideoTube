import React from 'react';
import '../assets/styles/components/Header.scss';
export default function Header() {
  return (
    <header className="header">
      <a href="/">
        <img src="logo-platzi-video.png" alt="Logo Platzi video" />
      </a>
      <div className="header__menu">
        <a className="header__menu--perfil" href="">
          <span className="fas fa-user"></span> Perfil
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
