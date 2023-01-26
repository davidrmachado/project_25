import React from 'react';
import { waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import Login from '../pages/Login';
import App from '../App';

const axios = require('axios');

const INPUT_EMAIL = 'common_login__input-email';
const INPUT_PASSWORD = 'common_login__input-password';
const BUTTON_LOGIN = 'common_login__button-login';

describe('Testes da tela de Login:', () => {
  it('01. Os elementos de input Email e Senha são renderizados', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/login');

    const inputEmail = screen.getByTestId(INPUT_EMAIL);
    const inputPass = screen.getByTestId(INPUT_PASSWORD);

    expect(inputEmail).toBeInTheDocument();
    expect(inputPass).toBeInTheDocument();
  });

  it('02. Os botões de Login e Registro são renderizados', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/login');

    const loginBtn = screen.getByTestId(BUTTON_LOGIN);
    const registerBtn = screen.getByTestId('common_login__button-register');

    expect(loginBtn).toBeInTheDocument();
    expect(registerBtn).toBeInTheDocument();
  });

  it('03. O botão de registro navega para página de registro', async () => {
    const { history } = renderWithRouter(<Login />);
    const btn = await screen.findByTestId('common_login__button-register');

    expect(history.location.pathname).toBe('/');

    userEvent.click(btn);

    waitFor(() => {
      expect(history.location.pathname).toBeEqualTo('/register');
      expect(screen.findByTestId('common_register__input-name'));
    }, { timeout: 2500 });
  });

  it('04. O botão de Login é habilitado após email e senhas válidos', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/login');

    const inputEmail = screen.getByTestId(INPUT_EMAIL);
    const inputPass = screen.getByTestId(INPUT_PASSWORD);
    const loginBtn = screen.getByTestId(BUTTON_LOGIN);

    expect(loginBtn).toBeDisabled();

    userEvent.type(inputEmail, 'juma_marrua');
    userEvent.type(inputPass, '1234');

    expect(loginBtn).toBeDisabled();

    userEvent.clear(inputEmail);
    userEvent.clear(inputPass);

    userEvent.type(inputEmail, 'juma_marrua@gmail.com');
    userEvent.type(inputPass, '123456Sete');

    expect(loginBtn).toBeEnabled();
  });

  it('05. Um usuário válido acessa a página de produtos', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/login');

    axios.default.post = jest.fn().mockResolvedValue(
      {
        data: {
          id: 3,
          name: 'Cliente Zé Birita',
          email: 'zebirita@email.com',
          role: 'customer',
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
        },
      },
    );

    const inputEmail = screen.getByTestId(INPUT_EMAIL);
    const inputPass = screen.getByTestId(INPUT_PASSWORD);
    const loginBtn = screen.getByTestId(BUTTON_LOGIN);

    userEvent.type(inputEmail, 'zebirita@email.com');
    userEvent.type(inputPass, '$#zebirita#$');

    expect(loginBtn).toBeEnabled();

    userEvent.click(loginBtn);

    waitFor(() => {
      // console.log(history);
      expect(history.location.pathname).toBe('/costumer/proucts');
      expect(screen.findByTestId('common_register__input-name'));
    }, { timeout: 2500 });
  });

  // it('06. Uma mensagem é exibida se os dados informados estão errados', async () => {
  //   const { history } = renderWithRouter(<Login />);

  //   jest.mock('axios');

  //   const message = 'Request failed with status code 404';

  //   axios.default.post = await jest.fn().mockRejectedValue(Error(message));

  //   const inputEmail = screen.getByTestId(INPUT_EMAIL);
  //   const inputPass = screen.getByTestId(INPUT_PASSWORD);
  //   const loginBtn = screen.getByTestId(BUTTON_LOGIN);

  //   userEvent.type(inputEmail, 'zebirita@email.com');
  //   userEvent.type(inputPass, '$#zebirita#$');

  //   expect(loginBtn).toBeEnabled();

  //   userEvent.click(loginBtn);

  //   waitFor(() => {
  //     // console.log(history);
  //     expect(history.location.pathname).toBe('/login');
  //     // expect(screen.findByTestId('common_register__input-name'));
  //   }, { timeout: 2500 });
  // });
});
