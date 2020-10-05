import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Education from "./education";
import Comments from "./comments";
import LocalJSON from "./localJSON";
import ApiUser from "./api/apiuser";
import Enquiry from "./api/enquiry";
import Dashboard from "./api/dashboard";
import AllUsers from "./api/allusers";
import AllJobs from "./api/alljobs";
import AllProjects from "./api/allprojects";
import Mounting from "./api/lifecycle1";

// const Comments = () => <div><h1 className="">Comment </h1> </div>;
const Contact = () => (
  <div>
    {" "}
    <h1>Contact Us</h1>{" "}
  </div>
);
const Profile = () => (
  <div>
    <h1>My Profile</h1>
  </div>
);
// const Education = () => <div><h1>My Education</h1></div>

class Multirouting extends Component {
  constructor(props) {
    super();
  }
  render() {
    const { path } = this.props.match; // returns the current URL
    console.log(this.props.match);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center p-4">
            <h2>Nested Routing Example</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <ul className="list-group">
              <li className="list-group-item active">My Navigation</li>
              <Link to={`${path}`} className="list-group-item">
                Profile
              </Link>
              <Link to={`${path}/comments`} className="list-group-item">
                Comments
              </Link>
              <Link to={`${path}/contact`} className="list-group-item">
                Contact
              </Link>
              <Link to={`${path}/education`} className="list-group-item">
                Education
              </Link>
              <Link to={`${path}/products`} className="list-group-item">
                Products
              </Link>
              <Link to={`${path}/apiuser`} className="list-group-item">
                Local API
              </Link>
              <Link to={`${path}/dashboard`} className="list-group-item">
                Dashboard
              </Link>
              <Link to={`${path}/enquiry`} className="list-group-item">
                Enquiry API
              </Link>
              <Link to={`${path}/alluser`} className="list-group-item">
                Users API
              </Link>
              <Link to={`${path}/alljob`} className="list-group-item">
                Jobs API
              </Link>
              <Link to={`${path}/allproject`} className="list-group-item">
                Projects API
              </Link>
              <Link to={`${path}/lifecycle1`} className="list-group-item">
                Life Cycle
              </Link>
            </ul>
          </div>
          <div className="col-md-9">
            <Switch>
              <Route path={`${path}`} exact component={Profile} />
              <Route path={`${path}/comments`} component={Comments} />
              <Route path={`${path}/contact`} component={Contact} />
              <Route path={`${path}/education`} component={Education} />
              <Route path={`${path}/products`} component={LocalJSON} />
              <Route path={`${path}/apiuser`} component={ApiUser} />
              <Route path={`${path}/dashboard`} component={Dashboard} />
              <Route path={`${path}/enquiry`} component={Enquiry} />
              <Route path={`${path}/alluser`} component={AllUsers} />
              <Route path={`${path}/alljob`} component={AllJobs} />
              <Route path={`${path}/allproject`} component={AllProjects} />
              <Route path={`${path}/lifecycle1`} component={Mounting} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
export default Multirouting;
