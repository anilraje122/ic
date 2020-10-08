import React from 'react';
import {Route , HashRouter} from 'react-router-dom';
import Login from './Login';
import Header from './header';
import MyDashboard from './dashboard';
import Employee from './Employee';
import Project from './Project';
import Client from './Client';
import Timesheet from './Timesheet';
import Cost from './Cost';

function App() {
 
          if(sessionStorage.getItem("name")==null)
          {
            return <Login/>
          }else{
            return <HashRouter>
                       <Header/>
                      <Route exact path="/" component={MyDashboard} />
                      <Route path="/project" component={Project} />
                      <Route path="/client" component={Client} />
                      <Route path="/employee" component={Employee} />
                      <Route path="/timesheet" component={Timesheet} />
                      <Route path="/cost" component={Cost} />
                  </HashRouter>
          }
}

export default App;
