import React from 'react';
import './App.css';
import Header from './header';
import Home from './home.js';
import Footer from './footer';
import Books from './books';
import showCustomers from './customers';
import showBookRegister from './book-register';
import Contact from './contact';
import Login from './login';
import Register from './register';
import {Route, HashRouter} from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Header/>
      <Route exact path="/" component={Home} />
      <Route path="/books" component={Books} />
      <Route path="/customers" component={showCustomers} />
      <Route path="/book-register" component={showBookRegister} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/contact" component={Contact} />
      <Footer/>
    </HashRouter> 
  );
}

export default App;
