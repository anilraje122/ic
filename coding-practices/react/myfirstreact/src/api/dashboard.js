import React, {Component} from 'react';
import axios from 'axios';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            dashboardItems: []
        }
    }
    componentDidMount() {
        this.getDashboardItems();
    }
    getDashboardItems () {
        axios.get('../../dashboardItems.json')
            .then((result) => {
                this.setState({
                    dashboardItems: result.data
                })
            }).catch((err) => {
                console.log('Error Occured!' + err);
            });
    }
    render() {
        return (
            <div className="border p-4">
                <h4 class="text-center mb-4 pb-3 border-bottom"> Dashboard</h4>
                {
                    this.state.dashboardItems.map((item, index) => {
                        return (
                            <div className="row text-center">
                                <div className="col-md-4 p-2 mb-4"> <p className="font-weight-bold">Users</p>{item.users} </div>
                                <div className="col-md-4 p-2 mb-4"> <p className="font-weight-bold">Products</p>{item.products} </div>
                                <div className="col-md-4 p-2 mb-4"> <p className="font-weight-bold">Invoice</p>{item.invoice} </div>
                                <div className="col-md-4 p-2 mb-4"> <p className="font-weight-bold">Pages</p>{item.pages} </div>
                                <div className="col-md-4 p-2 mb-4"> <p className="font-weight-bold">Employees</p>{item.employees} </div>
                                <div className="col-md-4 p-2 mb-4"> <p className="font-weight-bold">Transactions</p>{item.transactions} </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Dashboard;