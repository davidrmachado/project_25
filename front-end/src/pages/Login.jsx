import { useState, useEffect } from 'react';

function Login() {
  const [inputPassword, setInputPassword] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const validateEmail = () => {
    const validEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return inputEmail.match(validEmail);
  };

  const verifyPassword = () => {
    const minPasswordLength = 6;
    return inputPassword.length >= minPasswordLength;
  };

  useEffect(() => {
    if (validateEmail() && verifyPassword()) {
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
      >
        Login
      </button>
      <button
        type="button"
        data-testid="common_login__button-register"
      >
        Ainda não tenho conta
      </button>
      <div data-testid="common_login__element-invalid-email" />
    </>
  );
}

export default Login;
