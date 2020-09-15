import React, {Component} from 'react';

class Nav extends Component {
    render() {
        return (
            <ul id="top-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Register</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        )
    }
}

export default Nav;