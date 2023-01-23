import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Login }>
        <Redirect to="/login" />
      </Route>
      <Route exact path="/login" component={ Login } />
    </BrowserRouter>
  );
}

export default App;
