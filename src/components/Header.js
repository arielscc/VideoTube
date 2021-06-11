import React from 'react';

import '../assets/styles/components/Header.scss';
import logo from '../assets/img/logo-platzi-video.png';
import logUser from '../assets/img/user-icon.png';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { gravatar } from '../utils/gravatar';
import { logoutRequest } from '../actions';

const Header = ({ user, logoutRequest }) => {
  const hasUser = Object.keys(user).length > 0;
  const handleLogout = () => {
    logoutRequest({});
  };

  const location = useLocation();
  console.log(location);
  const headerClass =
    location.pathname === '/register' || location.pathname === '/login'
      ? 'greenHeader'
      : '';
  return (
    <header className={`header ${headerClass}`}>
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

        {hasUser ? (
          <ul>
            <li>{user.name}</li>
            <li>
              <a href="/" onClick={handleLogout}>
                Cerrar Sesión
              </a>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/login">Iniciar Sesion</Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
