import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
    render() {
        return  <ul id="top-nav">
                    <li><Link className="myLink" to="/">Home</Link></li>
                    <li><Link className="myLink" to="/reactVideo">ReactVideo</Link></li>
                    <li><Link className="myLink" to="/user">User</Link></li>
                    <li><Link className="myLink" to="/product">Product</Link></li>
                    <li><Link className="myLink" to="/tech">Technology</Link></li>
                    <li><Link className="myLink" to="/state">State 1</Link></li>
                    <li><Link className="myLink" to="/state2">State 2</Link></li>
                    <li><Link className="myLink" to="/profile">Profile</Link></li>
                    <li><Link className="myLink" to="/Array2">Array2</Link></li>
                    <li><Link className="myLink" to="/props.html">Props</Link></li>
                    <li><Link className="myLink" to="/Multirouting">Multirouting</Link></li>
                    <li><Link className="myLink" to="/ContactUs">GET/POST</Link></li>
                    <li><Link className="myLink" to="/Signup">Signup</Link></li>
                    <li><Link className="myLink" to="/login">Login</Link></li>
                    <li>Welcome, {sessionStorage.getItem('name')} <Link to="javascript:void(0)" className="myLink text-danger" onClick={this.logout}>Logout</Link></li>
                </ul>
    }

    logout = () => {
        sessionStorage.clear();
        window.location.reload();
    }
}

export default Nav;