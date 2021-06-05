import React from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/img/google-icon.png';
import twitterIcon from '../assets/img/twitter-icon.png';

import { useForm } from '../hooks/useForm';
import { loginRequest } from '../actions';

const Login = ({ loginRequest }) => {
  const [formValues, handleInputChange] = useForm({
    email: 'arielchura@gmail.com',
    password: 123,
  });
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginRequest(formValues);
    history.push('/');
  };

  return (
    <section className="login">
      <div className="login__container">
        <h2>Inicia sesión</h2>
        <form className="login__container--form" onSubmit={handleSubmit}>
          <input
            className="input"
            name="email"
            type="text"
            placeholder="Correo"
            onChange={handleInputChange}
            value={formValues.email}
          />
          <input
            className="input"
            name="password"
            type="password"
            placeholder="Contraseña"
            onChange={handleInputChange}
            value={formValues.password}
          />
          <button className="button" type="submit">
            Iniciar sesión
          </button>
          <div className="login__container--remember-me">
            <label>
              <input type="checkbox" id="cbox1" value="first_checkbox" />
              Recuérdame
            </label>
            <a href="/">Olvidé mi contraseña</a>
          </div>
        </form>
        <section className="login__container--social-media">
          <div>
            <img src={googleIcon} /> Inicia sesión con Google
          </div>
          <div>
            <img src={twitterIcon} /> Inicia sesión con Twitter
          </div>
        </section>
        <p className="login__container--register">
          No tienes ninguna cuenta <Link to="/register">Regístrate</Link>
        </p>
      </div>
    </section>
  );
};
const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
