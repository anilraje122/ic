import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './nav';
import Container from './container';
import Footer from './footer';
import showBooks from './books';
import showCustomers from './customers';
import showBookRegister from './book-register';

function App() {
  return (
    [
      <Nav />,
        showBooks(),
        showCustomers(),
        showBookRegister(),
      <Footer />
    ]
  );
}

export default App;
