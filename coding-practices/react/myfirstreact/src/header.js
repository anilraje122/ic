import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
    render() {
        return  <ul id="top-nav">
                    <li><Link className="myLink" to="/">Home</Link></li>
                    <li><Link className="myLink" to="/user">User</Link></li>
                    <li><Link className="myLink" to="/product">Product</Link></li>
                    <li><Link className="myLink" to="/tech">Technology</Link></li>
                    <li><Link className="myLink" to="/state">State Mgmt</Link></li>
                    <li>State</li>
                    <li>Props</li>
                    <li>JSON API</li>
                </ul>
    }
}

export default Nav;