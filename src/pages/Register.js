import React from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import '../assets/styles/components/Register.scss';
import { useForm } from '../hooks/useForm';
import { registerRequest } from '../actions';

const Register = ({ registerRequest }) => {
  const [formValues, handreInputChange] = useForm({
    name: 'ariel',
    email: 'ariel@gmail.com',
    password: '123',
  });
  const { name, email, password } = formValues;

  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    registerRequest(formValues);
    history.push('/');
  };
  return (
    <section className="register">
      <section className="register__container">
        <h2>Regístrate</h2>
        <form className="register__container--form" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            placeholder="Nombre"
            name="name"
            onChange={handreInputChange}
            value={name}
          />
          <input
            className="input"
            type="email"
            placeholder="Correo"
            name="email"
            onChange={handreInputChange}
            value={email}
          />
          <input
            className="input"
            type="password"
            placeholder="Contraseña"
            name="password"
            onChange={handreInputChange}
            value={password}
          />
          <button className="button">Registrarme</button>
        </form>
        <Link to="/login">Iniciar sesión</Link>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  registerRequest,
};
export default connect(null, mapDispatchToProps)(Register);
