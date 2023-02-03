/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import logoCopoCheio from '../images/copo_cheio_logo_mobile.png';
import api from '../utils/apiURL';
import { validateEmail, validatePassword } from '../utils/verifyInputData';
import '../css/Login.css';

function Login() {
  const [inputPassword, setInputPassword] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  const login = async () => {
    try {
      const response = await api.post('/login', {
        email: inputEmail,
        password: inputPassword,
      });

      delete response.data.id;
      localStorage.setItem('user', JSON.stringify(response.data));

      if (response.data.role === 'customer') {
        history.push('/customer/products');
      }

      if (response.data.role === 'seller') {
        history.push('/seller/orders');
      }

      if (response.data.role === 'administrator') {
        history.push('/admin/manage');
      }
    } catch (err) {
      console.log(err);
      setErrorMessage('Usuário e/ou senha inválidos');
    }
  };

  useEffect(() => {
    if (validateEmail(inputEmail) && validatePassword(inputPassword)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [inputEmail, inputPassword]);

  useEffect(() => {
    if (localStorage.getItem('user')) {
      history.push('/customer/products');
    }
  });

  return (
    <div className="login_container">
      <img src={ logoCopoCheio } alt="logotipo Copo Cheio" className="logo" />

      <div className="info">Digite email e senha para login</div>

      <div className="input_container">
        <label htmlFor="email-input">
          {/* Email */}
          <input
            data-testid="common_login__input-email"
            id="email-input"
            type="text"
            placeholder="E-mail..."
            value={ inputEmail }
            onChange={ (e) => setInputEmail(e.target.value) }
          />
        </label>
        <label htmlFor="password-input">
          {/* Senha */}
          <input
            data-testid="common_login__input-password"
            id="password-input"
            type="password"
            placeholder="Senha..."
            value={ inputPassword }
            onChange={ (e) => setInputPassword(e.target.value) }
          />
        </label>
      </div>

      <div className="button_container">
        <button
          type="button"
          className="login-btn"
          data-testid="common_login__button-login"
          disabled={ isDisabled }
          onClick={ login }
        >
          Login
        </button>
        <button
          type="button"
          className="register-btn"
          data-testid="common_login__button-register"
          onClick={ () => history.push('/register') }
        >
          Criar cadastro
        </button>
      </div>
      <div
        className="warning"
        data-testid="common_login__element-invalid-email"
      >
        {errorMessage}
      </div>
    </div>
  );
}

export default Login;
