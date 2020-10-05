import React, {Component} from 'react';
import axios from 'axios';

class ApiUser extends Component {
    constructor() {
        super();
        this.state = {
            userList: []
        }
    }

    componentDidMount() {
        this.getuser();
    }

    getuser() {
        axios.get('../../user.json')
            .then((res) => {
                this.setState({
                    userList: res.data
                })
            })
    }

    render() {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Mobile Number</th>
                        <th>City</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.userList.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.mobile}</td>
                                    <td>{item.city}</td>
                                    <td>{item.age}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}

export default ApiUser;
