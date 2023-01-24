/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../utils/APILink';
import { validateEmail, validatePassword } from '../utils/verifyInputData';

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
      localStorage.setItem('userData', JSON.stringify(response.data));

      history.push('/customer/products');
    } catch (err) {
      console.log(err);
      setErrorMessage(err.message);
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
    localStorage.removeItem('userData');
  });

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
      <div data-testid="common_login__element-invalid-email">{errorMessage}</div>
    </>
  );
}

export default Login;
