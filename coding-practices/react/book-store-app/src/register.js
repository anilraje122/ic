import React, {Component} from 'react';

class Register extends Component {
    render() {
        return (
            <div class="container">
                <div id="form-wrapper" class="register">
                    <form>
                        <h2>Register</h2>
                        <div class="form-group">
                            <label for="email">Name</label>
                            <input type="text" id="email" placeholder="Enter your Name"></input>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your email"></input>
                        </div>
                        <div class="form-group">
                            <label for="msg">Address</label>
                            <textarea id="msg" placeholder="Enter your Address"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="pwd">Password</label>
                            <input type="password" id="pwd" placeholder="Enter your password"></input>
                        </div>
                        <div class="form-group">
                            <label for="pwd">Confirm Password</label>
                            <input type="password" id="pwdConfirm" placeholder="Enter your password again"></input>
                        </div>
                        <div class="form-group">
                            <button type="submit" id="submit">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;