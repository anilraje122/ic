import React, {Component} from 'react';
import axios from 'axios';

class Enquiry extends Component {
    constructor() {
        super();
        this.state = {
            enqList : []
        }
    }

    componentDidMount() {
        this.getEnquiry();
    }

    getEnquiry(){
        axios.get('https://www.firstenquiry.com/api/react/enquirylist.php')
            .then((res) => {
                if(!res.data) { res.data = [] }
                this.setState({
                    enqList: res.data
                })
            })
            .catch((err) => {
                console.log('Error Occured!' + err);
            })
    }

    render() {
        return (
            <table className="table table-striped">
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
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}

export default Enquiry;