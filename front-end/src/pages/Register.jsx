/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { validateEmail, validatePassword } from '../utils/verifyInputData';
import api from '../utils/APILink';

function Register() {
  const [inputPassword, setInputPassword] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputName, setInputName] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  const validateName = () => {
    const minNameLength = 12;
    return inputName.length >= minNameLength;
  };

  const register = async () => {
    try {
      const response = await api.post('/register', {
        name: inputName,
        email: inputEmail,
        password: inputPassword,
      });

      console.log(response);
      history.push('/customer/products');
    } catch (err) {
      console.log(err);
      setErrorMessage('Erro no cadastro');
    }
  };

  useEffect(() => {
    if (validateEmail(inputEmail) && validatePassword(inputPassword) && validateName()) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [inputEmail, inputPassword, inputName]);

  return (
    <>
      <label htmlFor="name-input">
        Nome
        <input
          data-testid="common_register__input-name"
          id="name-input"
          type="text"
          value={ inputName }
          onChange={ (e) => setInputName(e.target.value) }
        />
      </label>
      <label htmlFor="email-input">
        Email
        <input
          data-testid="common_register__input-email"
          id="email-input"
          type="text"
          value={ inputEmail }
          onChange={ (e) => setInputEmail(e.target.value) }
        />
      </label>
      <label htmlFor="password-input">
        Senha
        <input
          data-testid="common_register__input-password"
          id="password-input"
          type="text"
          value={ inputPassword }
          onChange={ (e) => setInputPassword(e.target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="common_register__button-register"
        disabled={ isDisabled }
        onClick={ register }
      >
        Cadastrar
      </button>
      <div data-testid="common_register__element-invalid_register">{errorMessage}</div>
    </>
  );
}

export default Register;
