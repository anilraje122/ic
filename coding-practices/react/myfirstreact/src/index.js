import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './login2';

if(sessionStorage.getItem("name") == null) {
  ReactDOM.render(
    <React.StrictMode>
      <Login/>
    </React.StrictMode>,
    document.getElementById('root')
  );
} else {
  ReactDOM.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/*
sessionStorage.setItem("elementName", "Value") is used to store in session storage.
sessionStorage.getitem("elementName"); to fetch from session storage.
sessionStorage.clear(); to delete all data from session storage.
*/
