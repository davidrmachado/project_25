import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import CustomerProvider from './context/CustomerContext';

import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import OrderDetails from './pages/OrderDetails';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <CustomerProvider>
        <Route path="/customer/products" component={ Products } />
        <Route path="/customer/checkout" component={ Checkout } />
        <Route path="/customer/orders/:id" component={ OrderDetails } />
      </CustomerProvider>
    </BrowserRouter>
  );
}

export default App;
