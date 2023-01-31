import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [userName, setUserName] = useState('');

  const logout = () => {
    localStorage.removeItem('user');
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUserName(user.name);
  }, []);

  return (
    <nav className="navbar">
      <Link
        data-testid="customer_products__element-navbar-link-orders"
        to="/seller/orders"
      >
        PEDIDOS
      </Link>
      <div
        data-testid="customer_products__element-navbar-user-full-name"
        to="/userProfile"
      >
        { userName }
      </div>
      <Link
        data-testid="customer_products__element-navbar-link-logout"
        to="/login"
        onClick={ logout }
      >
        Sair
      </Link>
    </nav>
  );
}

export default Navbar;
