import React, {Component}  from 'react';
import axios from 'axios';

class AllUsers extends Component {
    constructor() {
        super();
        this.state = {
            users : [
                {
                    userid: '', 
                    firstname: '',
                    lastname: '',
                    email: '',
                    profiletype: ''
                }
            ]
        }
    }

    componentDidMount() {
        this.getusers();
    }

    getusers() {
        axios.get('https://www.firstenquiry.com/api/react/live/alluser.php')
            .then((res) => {
                this.setState({
                    users : res.data
                })
            })
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.users.map((user, index) => {
                        return (
                            <div key={user.userid} className="col-md-4">
                                <div className="card bg-light mb-2 p-4 text-center mycard">
                                    <img src="../profile-pic.png" alt="user" className="img img-thumbnail rounded-circle mb-3"></img>
                                    <h4>{user.firstname} {user.lastname}</h4>
                                    <p>{user.email}</p>
                                    <p>{user.profiletype}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default AllUsers;