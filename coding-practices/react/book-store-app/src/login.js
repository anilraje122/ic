import React, {Component} from 'react';

class Login extends Component {
    render() {
        return (
            <div class="container">
                <div id="form-wrapper" class="login">
                    <form>
                        <h2>Login</h2>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your email"></input>
                        </div>
                        <div class="form-group">
                            <label for="pwd">Password</label>
                            <input type="password" id="pwd" placeholder="Enter your password"></input>
                        </div>
                        <div class="form-group">
                            <button type="submit" id="submit">Login</button>
                            <a href="#" id="forgotPwd">Forgot password?</a>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;