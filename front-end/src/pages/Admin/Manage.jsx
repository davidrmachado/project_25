import { useEffect, useState } from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import { validateEmail, validatePassword } from '../../utils/verifyInputData';
import api from '../../utils/apiURL';

function Manage() {
  const [inputPassword, setInputPassword] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputName, setInputName] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));
  const { token } = user;

  const validateName = () => {
    const minNameLength = 12;
    return inputName.length >= minNameLength;
  };

  const register = async () => {
    try {
      const response = await api.post(
        '/register/adm',
        {
          name: inputName,
          email: inputEmail,
          password: inputPassword,
          role: selectedRole,
        },
        {
          headers: {
            Authorization: token,
          },
        },
      );
      console.log(response);
    } catch (err) {
      console.log(err);
      setErrorMessage('Erro no cadastro');
    }
  };

  useEffect(() => {
    if (validateEmail(inputEmail)
        && validatePassword(inputPassword)
        && validateName()
        && selectedRole !== '') {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [inputEmail, inputPassword, inputName, selectedRole]);

  return (
    <>
      <AdminNavbar />
      <label htmlFor="name-input">
        Nome
        <input
          data-testid="admin_manage__input-name"
          id="name-input"
          type="text"
          value={ inputName }
          onChange={ (e) => setInputName(e.target.value) }
        />
      </label>
      <label htmlFor="email-input">
        Email
        <input
          data-testid="admin_manage__input-email"
          id="email-input"
          type="text"
          value={ inputEmail }
          onChange={ (e) => setInputEmail(e.target.value) }
        />
      </label>
      <label htmlFor="password-input">
        Senha
        <input
          data-testid="admin_manage__input-password"
          id="password-input"
          type="text"
          value={ inputPassword }
          onChange={ (e) => setInputPassword(e.target.value) }
        />
      </label>
      <label htmlFor="role">
        <select
          data-testid="admin_manage__select-role"
          id="role"
          value={ selectedRole }
          onChange={ (e) => setSelectedRole(e.target.value) }
        >
          <option defaultValue value="">Escolha uma categoria</option>
          <option value="seller">Vendedor</option>
          <option value="customer">Consumidor</option>
        </select>
      </label>
      <button
        type="button"
        data-testid="admin_manage__button-register"
        disabled={ isDisabled }
        onClick={ register }
      >
        Cadastrar
      </button>
      <div data-testid="admin_manage__element-invalid-register">{errorMessage}</div>
    </>
  );
}

export default Manage;
