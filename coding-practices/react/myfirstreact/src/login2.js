import React, { Component } from "react";
import axios from "axios";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      pass: "",
      msg: "",
    };
  }

  processEmail = (obj) => {
    this.setState({
      email: obj.target.value,
    });
  };

  processPass = (obj) => {
    this.setState({
      pass: obj.target.value,
    });
  };

  login = () => {
    if (this.state.email === "" || this.state.pass === "") {
      this.setState({
        msg: "Please enter login details !",
      });
    } else {
      axios.get("login.json").then((response) => {
        if (
          response.data[0] === this.state.email &&
          response.data[1] === this.state.pass
        ) {
          this.setState({
            msg: "Success!! Please wait redirection... ",
          });
          sessionStorage.setItem("name", response.data[2]);
          window.location.reload(); // refresh the page after login
        } else {
          this.setState({
            msg: "Fail ! Invalid or not Exist!",
          });
        }
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <br />
            <br />
            <p className="text-center text-primary">{this.state.msg}</p>
            <div className="card">
              <div className="card-header bg-primary text-white">Login</div>
              <div className="card-body">
                <div className="form-group">
                  <label>E-Mail</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.processEmail}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={this.processPass}
                  />
                </div>
              </div>
              <div className="card-footer text-center">
                <button className="btn btn-danger btn-sm" onClick={this.login}>
                  Login
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}

export default Login;
