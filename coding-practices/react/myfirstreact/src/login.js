import React, {Component} from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            pass: '',
            msg: ''
        }
    }

    processEmail = (obj) => {
        this.setState({
            email: obj.target.value
        })
    }

    processPass = (obj) => {
        this.setState({
            pass: obj.target.value
        })
    }

    login = () => {
        if(this.state.email == '' || this.state.pass == '') {
            this.setState({
                msg: 'Please enter login details'
            })
        } else {
            this.setState({
                msg: 'Please wait re-directing..'
            })
            sessionStorage.setItem('name', this.state.email); // set session variable
            window.location.reload(); //refereshe the page
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <p className="text-center text-info">{this.state.msg}</p>
                        <div className="card">
                            <div className="card-header bg-primary text-white text-center">
                                Login
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" id="email" className="form-control" onChange={this.processEmail}></input>
                                </div>
                                <div className="form-group">
                                    <label for="pwd">Password</label>
                                    <input type="password" id="pwd" className="form-control" onChange={this.processPass}></input>
                                </div>
                            </div>
                            <div className="card-footer text-center">
                                <button className="btn btn-danger btn-sm" onClick={this.login}>Login</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        )
    }
}

export default Login;