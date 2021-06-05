import React from 'react';

import '../assets/styles/components/Header.scss';
import logo from '../assets/img/logo-platzi-video.png';
import logUser from '../assets/img/user-icon.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { gravatar } from '../utils/gravatar';
const Header = ({ user }) => {
  const hasUser = Object.keys(user).length > 0;
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Logo Platzi video" />
      </Link>

      <div className="header__menu">
        <a className="header__menu--perfil" href="">
          {hasUser ? (
            <img
              className="header__user-logo"
              src={gravatar(user.email)}
              alt="logo usuario"
            />
          ) : (
            <img
              className="header__user-logo"
              src={logUser}
              alt="logo usuario"
            />
          )}
          Perfil
        </a>
        <ul>
          <li>
            <Link to="/login">Iniciar Sesión</Link>{' '}
          </li>
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Header);
