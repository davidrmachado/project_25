import React from 'react';
import { Link } from 'react-router-dom';

function clearStorage() {
  localStorage.clear();
}

function Navbar() {
  return (
    <nav className="navbar">
      <Link
        data-testid="customer_products__element-navbar-link-products"
        to="/products"
      >
        PRODUTOS
      </Link>
      <Link
        data-testid="customer_products__element-navbar-link-orders"
        to="/orders"
      >
        MEUS PEDIDOS
      </Link>
      <div
        data-testid="customer_products__element-navbar-user-full-name"
        to="/userProfile"
      >
        Usuário
      </div>
      <Link
        data-testid="customer_products__element-navbar-link-logout"
        to="/login"
        onClick={ clearStorage }
      >
        Sair
      </Link>
    </nav>
  );
}

export default Navbar;
