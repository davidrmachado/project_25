import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import CustomerProvider from './context/CustomerContext';

import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Customer/Products';
import Checkout from './pages/Customer/Checkout';
import Details from './pages/Customer/CustomerOrders';
import OrderDetails from './pages/Customer/OrderDetails';
import SellerOrders from './pages/Seller/SellerOrders';
import Manage from './pages/Admin/Manage';

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
        <Route exact path="/customer/orders" component={ Details } />
        <Route path="/customer/orders/:id" component={ OrderDetails } />
      </CustomerProvider>
      <Route path="/seller/orders" component={ SellerOrders } />
      <Route path="/admin/manager" component={ Manage } />
    </BrowserRouter>
  );
}

export default App;
