import React from 'react';
import logo from './logo.svg';
import './App.css';
import hello from './test.js';
import myUser from './user.js';
import myProduct from './product';
import Nav from './header';
import footer from './footer';

function App() {
  return  [
            <Nav/>,
            <h1>Welcome to my first React App</h1>,
            <p>hello p tag</p>,
            hello(),
            myUser(),
            myProduct(),
            footer()
          ]
}

export default App;



