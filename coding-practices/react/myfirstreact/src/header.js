import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
    render() {
        return  <ul id="top-nav">
                    <li><Link className="myLink" to="/">Home</Link></li>
                    <li><Link className="myLink" to="/user">User</Link></li>
                    <li><Link className="myLink" to="/product">Product</Link></li>
                    <li><Link className="myLink" to="/tech">Technology</Link></li>
                    <li><Link className="myLink" to="/state">State Mgmt 1</Link></li>
                    <li><Link className="myLink" to="/state2">State Mgmt 2</Link></li>
                    <li><Link className="myLink" to="/profile">Profile</Link></li>
                </ul>
    }
}

export default Nav;