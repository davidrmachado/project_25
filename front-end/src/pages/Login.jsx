/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../utils/APILink';
import { validateEmail, validatePassword } from '../utils/verifyInputData';

function Login() {
  const [inputPassword, setInputPassword] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const history = useHistory();

  const login = async () => {
    try {
      await api.post('/login', {
        email: inputEmail,
        password: inputPassword,
      });

      history.push('/customer/products');
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (validateEmail(inputEmail) && validatePassword(inputPassword)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [inputEmail, inputPassword]);

  return (
    <>
      <label htmlFor="email-input">
        Email
        <input
          data-testid="common_login__input-email"
          id="email-input"
          type="text"
          value={ inputEmail }
          onChange={ (e) => setInputEmail(e.target.value) }
        />
      </label>
      <label htmlFor="password-input">
        Senha
        <input
          data-testid="common_login__input-password"
          id="password-input"
          type="text"
          value={ inputPassword }
          onChange={ (e) => setInputPassword(e.target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="common_login__button-login"
        disabled={ isDisabled }
        onClick={ login }
      >
        Login
      </button>
      <button
        type="button"
        data-testid="common_login__button-register"
        onClick={ () => history.push('/register') }
      >
        Ainda não tenho conta
      </button>
      <div data-testid="common_login__element-invalid-email" />
    </>
  );
}

export default Login;
