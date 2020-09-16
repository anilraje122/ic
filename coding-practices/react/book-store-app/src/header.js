import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div id="header">
                <div id="logo-wrapper">
                    <img id="logo" src="https://thumbs.dreamstime.com/b/sign-open-book-icon-logo-dark-background-white-sign-open-book-icon-logo-dark-background-133881629.jpg" alt="book logo"/>
                    <span id="logo-text">E-Books</span>
                </div>
                <div>
                    <ul id="top-nav">
                        <li><Link className="link" to="/">Home</Link></li>
                        <li><Link className="link" to="/books">Books</Link></li>
                        <li><Link className="link" to="/customers">Customers</Link></li>
                        <li><Link className="link" to="/book-register">Book-Register</Link></li>
                        <li><Link className="link" to="/login">Login</Link></li>
                        <li><Link className="link" to="/register">Register</Link></li>
                        <li><Link className="link" to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header;