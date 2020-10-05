import React from 'react';
import  {Route, HashRouter} from 'react-router-dom'; //routing with hash
// import  {Route, BrowserRouter} from 'react-router-dom'; //routing with hash

import test from './test.js';
import myUser from './user.js';
import myProduct from './product';
import Nav from './header';
import Footer from './footer';
import TechList from './tech';
import Mystate from './state';
import Mystate2 from './state2';
import Profile from './profile';
import Array2 from './Array2';
import Property from './property';
import Multirouting from './Multirouting';
import ContactUs from './api/contactus';
import ReactVideo from './ReactVideo';
import Signup from './signup';

const myPage =  (
                  <HashRouter>
                    <Nav />
                    <Route exact path="/" component={test} />
                    <Route path="/user" component={myUser} />
                    <Route path="/reactVideo" component={ReactVideo} />
                    <Route path="/product" component={myProduct} />
                    <Route path="/tech" component={TechList} />
                    <Route path="/state" component={Mystate} />
                    <Route path="/state2" component={Mystate2} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/Array2" component={Array2} />
                    <Route path="/props.html" component={Property} />
                    <Route path="/Multirouting" component={Multirouting} />
                    <Route path="/ContactUs" component={ContactUs} />
                    <Route path="/Signup" component={Signup} />
                    {/* <Route path="/login" component={Login} /> */}
                    <Footer />
                  </HashRouter>
                );

function App() {
  return  myPage;
}

export default App;



