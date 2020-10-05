import React, {Component} from 'react';

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            field: {},
            error: {},
            msg: ''
        }
    }

    processInput = (object) => {
        let tempField = this.state.field;
        tempField[object.target.name] = object.target.value;
        this.setState({
            field: tempField
        })
    }

    processTnc = (object) => {
        let tempField = this.state.field;
        tempField[object.target.name] = object.target.checked;
        this.setState({
            field: tempField
        })
    }

    validate = (obj) => {
        obj.preventDefault();

        let status = true;
        let myField = this.state.field;
        let myError = {};

        if(!myField['fname'] ) {
            status = false;
            myError['nameerror'] = 'Please enter your name!';
        }
        if(!myField['email'] ) {
            status = false;
            myError['emailerror'] = 'Please enter your email!';
        }
        let epattern = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(typeof myField['email'] !== 'undefined') {
            if(! epattern.test(myField['email'])) {
                myError['emailerror'] = 'Invalid email id!';
                status = false; 
            }
        }
        
        if(!myField['mobile'] ) {
            status = false;
            myError['mobilerror'] = 'Please enter your mobile number!';
        }
        let mpattern = /^[0-9]{10}$/;
        if(typeof myField['mobile'] !== 'undefined') {
            if(! mpattern.test(myField['mobile'])) {
                status = false;
                myError['mobilerror'] = 'Invalid mobile number!';
            }
        }

        if(!myField['city']) {
            status = false;
            myError['cityerror'] = 'Please select the city!';
        }
        if(!myField['message'] ) {
            status = false;
            myError['messageerror'] = 'Please enter your message!';
        }
        
        if(!myField['tnc']) {
            status = false;
            myError['tncerror'] = 'Please accept terms and conditions!';
        }
        if(!myField['gender']) {
            status = false;
            myError['gendererror'] = 'Please select a gender!';
        }
        if(!status) {
            this.setState({
                msg: 'Error, Invalid Input'
            })
        } else {
            this.setState({
                msg: 'Success, please wait while submitting..'
            })
        }
        this.setState({
            error: myError
        })
        console.log(this.state);
    }

    clearInputs = () => {
        this.setState({
            msg: '',
            field: {}
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center p-3">
                        <h3>Form Validation in React</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <p className="text-center text-danger">{this.state.msg}</p>
                        <form method="POST" onSubmit={this.validate}>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" className="form-control" name="fname" onChange={this.processInput}></input>
                                <i className="text-danger">{this.state.error.nameerror}</i>
                            </div>
                            <div className="form-group">
                                <label>Gender</label> &nbsp;&nbsp;&nbsp;
                                <input type="radio" name="gender" value="male" onChange={this.processInput} /> Male &nbsp;
                                <input type="radio" name="gender" value="female" onChange={this.processInput} /> Female <br/>
                                <i className="text-danger">{this.state.error.gendererror}</i>
                            </div>
                            <div className="form-group">
                                <label>Mobile Number</label>
                                <input type="text" className="form-control" name="mobile" onChange={this.processInput}></input>
                                <i className="text-danger">{this.state.error.mobilerror}</i>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" name="email" onChange={this.processInput}></input>
                                <i className="text-danger">{this.state.error.emailerror}</i>
                            </div>
                            <div className="form-group">
                                <label>City</label>
                                <select className="form-control" name="city" onChange={this.processInput}>
                                    <option value="choose">choose</option>
                                    <option value="blr">Bangalore</option>
                                    <option value="pune">Pune</option>
                                    <option value="kochi">Kochi</option>
                                    <option value="hyd">Hyderabad</option>
                                </select>
                                <i className="text-danger">{this.state.error.cityerror}</i>
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea className="form-control" name="message" onChange={this.processInput}></textarea>
                                <i className="text-danger">{this.state.error.messageerror}</i>
                            </div>
                            <div className="form-group">
                                <p><label>Terms and conditions</label></p>
                                <input type="checkbox" name="tnc" value="Agree" onChange={this.processTnc}></input>
                                <p> <i className="text-danger">{this.state.error.tncerror}</i> </p>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary btn-block" type="submit">Register</button>
                                <button className="btn btn-danger btn-block" type="reset" onClick={this.clearInputs}>Clear</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        )
    }
}

export default Signup;