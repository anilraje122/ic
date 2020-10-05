import React , {Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class ContactUs extends Component{
    constructor(){
        super();
        this.state = {
            enqList : [],
            name: '',
            mobile: '',
            email: '',
            message: '',
            msg:'',
            btn:false
        }
    }

    processName = (obj) => {
        this.setState({
            name: obj.target.value
        })
    }
    processMobile = (obj) => {
        this.setState({
            mobile: obj.target.value
        })
    }
    processEmail = (obj) => {
        this.setState({
            email: obj.target.value
        })
    }
    processMessage = (obj) => {
        this.setState({
            message: obj.target.value
        })
    }
    save = () => {
        this.setState({
            msg: 'Please wait while processing...',
            btnDisable:true
        })
        let url = 'https://www.firstenquiry.com/api/react/savemyenquiry.php';
        let input = new FormData(); // Create Array, Encide the data before sending to server
        input.append('fname', this.state.name);
        input.append('mobileno', this.state.mobile);
        input.append('emailid', this.state.email);
        input.append('message', this.state.message);
        axios.post(url, input)
            .then((res) => {
                this.setState({
                    msg: res.data,
                    name: '',
                    mobile: '',
                    email: '',
                    message:'',
                    btnDisable:false
                })
                this.getEnquiry(); // update the output with latest records
            })
            .catch((err) => {
                this.setState({
                    msg: `Error Occured while sending the data : ${err}`
                })
            })
    }

    deleteData = (id) => {
        let input = new FormData();
        input.append('id', id);
        let url = 'https://www.firstenquiry.com/api/react/deleteenquiry.php';
        axios.post(url, input)
            .then((res) => {
                this.setState({
                    msg: res.data.status
                })
                this.getEnquiry(); // update output with latest records
            })
            .catch((err) => {
                console.log('Error Occured!' + err);
            })
    }

    componentDidMount() {
        this.getEnquiry();
    }

    getEnquiry(){
        axios.get('https://www.firstenquiry.com/api/react/enquirylist.php')
            .then((res) => {
                if (!res.data) {
                    console.log('No data found');
                    res.data = [];
                }
                this.setState({
                    enqList: res.data
                });
            })
            .catch((err) => {
                console.log('Error Occured while accessing API! \n' + err);
            })
    }

    render(){
        return <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center p-4">
                            <h2>React API GET/POST</h2>
                            <p className="text-primary text-center">
                                {this.state.msg}
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Name" onChange={this.processName} value={this.state.name}/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Mobile" onChange={this.processMobile} value={this.state.mobile}/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Email" onChange={this.processEmail} value={this.state.email}/>
                            </div>
                            <div className="form-group">
                                <textarea placeholder="Message" className="form-control" onChange={this.processMessage} value={this.state.message}></textarea>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block" onClick={this.save} disabled={this.state.btn}>Send</button>
                            </div>
                        </div>
                        <div className="col-md-9">
                        <table className="table table-striped table-sm">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Mobile</th>
                                    <th>Email</th>
                                    <th>Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.enqList.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{item.name}</td>
                                                <td>{item.mobile}</td>
                                                <td>{item.email}</td>
                                                <td>{item.message}</td>
                                                <td>
                                                    <button className="btn btn-sm btn-danger" onClick={this.deleteData.bind(this, item.id)} >Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>;
    }
}
export default ContactUs;