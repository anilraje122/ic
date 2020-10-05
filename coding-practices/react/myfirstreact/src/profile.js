import React,  {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Profile extends Component  {
    constructor() {
        super();
        this.state = {
            name: 'Anil Raj',
            email: 'anilraje122@gmail.com',
            mobile: '7899179779',
            city: 'Bangalore',
            pincode: '560068'
        }
    }
    passName = (obj) => {
        this.setState({
            name: obj.target.value
        });
    }
    passEmail = (obj) => {
        this.setState({
            email: obj.target.value
        });
    }
    passMobile = (obj) => {
        this.setState({
            mobile: obj.target.value
        });
    }
    passCity = (obj) => {
        this.setState({
            city: obj.target.value
        });
    }
    passPin = (obj) => {
        this.setState({
            pincode: obj.target.value
        });
    }
    render() {
        return (
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="text-center">Update State</h3>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" onChange={this.passName}/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" onChange={this.passEmail}/>
                        </div>
                        <div className="form-group">
                            <label>Mobile</label>
                            <input type="number" className="form-control" onChange={this.passMobile}/>
                        </div>
                        <div className="form-group">
                            <label>City</label>
                            <input type="text" className="form-control" onChange={this.passCity}/>
                        </div>
                        <div className="form-group">
                            <label>PIN Code</label>
                            <input type="number" className="form-control" onChange={this.passPin}/>
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <h3>Display State</h3>
                        <table className="table table-bordered m-4 text-left">
                            <tbody>
                            <tr>
                                <th>Full Name</th>
                                <td>{this.state.name}</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>{this.state.email}</td>
                            </tr>
                            <tr>
                                <th>Mobile</th>
                                <td>{this.state.mobile}</td>
                            </tr>
                            <tr>
                                <th>City</th>
                                <td>{this.state.city}</td>
                            </tr>
                            <tr>
                                <th>PIN Code</th>
                                <td>{this.state.pincode}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;