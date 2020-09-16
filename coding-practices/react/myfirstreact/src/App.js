import React from 'react';
import test from './test.js';
import myUser from './user.js';
import myProduct from './product';
import Nav from './header';
import Footer from './footer';
import TechList from './tech';
import Mystate from './state';
import Mystate2 from './state2';
import Profile from './profile';
import  {Route, HashRouter} from 'react-router-dom';

const myPage =  (
                  <HashRouter>
                    <Nav />
                    <Route exact path="/" component={test} />
                    <Route path="/user" component={myUser} />
                    <Route path="/product" component={myProduct} />
                    <Route path="/tech" component={TechList} />
                    <Route path="/state" component={Mystate} />
                    <Route path="/state2" component={Mystate2} />
                    <Route path="/profile" component={Profile} />
                    <Footer />
                  </HashRouter>
                );

function App() {
  return  myPage;
}

export default App;



