import React, { Component } from 'react';
import axios from 'axios';

class Project extends Component{
    constructor(props) {
        super(props)    
        this.state = {
             projectList: [],
             msg: ''
        }
    }
    getProject = () =>{
        let url = "https://www.firstenquiry.com/api/react/pms/allproject.php";
        let input = new FormData();
        input.append("hrid", sessionStorage.getItem("token"));
        axios.post(url, input).then(response=>{
            if(response.data.length > 0)
            {
                this.setState({
                    projectList: response.data,
                    msg: response.data.length + " - Total Project "
                })
            }else{
                this.setState({msg: '0 - Total Project'})
            }
        })
    }
    componentDidMount(){
        this.getProject();
    }
    // client , projectname, projectdetails, cost, status
    render(){
        return(<div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center p-3">
                            <h2 className="text-info">Manage Project</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                        <div className="form-group">
                            <label>Client Name</label>
                            <input
                                type="text"
                                className="form-control rounded-pill"
                                onChange={this.handleclientname}
                                value={this.state.clientname}
                            />
                        </div>
                        <div className="form-group">
                            <label>Project Name</label>
                            <input
                                type="text"
                                className="form-control rounded-pill"
                                onChange={this.handleprojectname}
                                value={this.state.projectname}
                            />
                        </div>
                        <div className="form-group">
                            <label>Project Details</label>
                            <input
                                type="text"
                                className="form-control rounded-pill"
                                onChange={this.handleprojectdetail}
                                value={this.state.projectdetail}
                            />
                        </div>
                        <div className="form-group">
                            <label>Cost</label>
                            <input
                                type="text"
                                className="form-control rounded-pill"
                                onChange={this.handlecost}
                                value={this.state.cost}
                            />
                        </div>
                        <button className="btn btn-primary btn-sm btn-block" onClick={this.saveproject}> Save Project </button>
                        </div>
                        <div className="col-md-9">
                        <table className="table table-stripped table-sm">
                        <thead className="text-info">
                            <tr>
                                <th>Client Name</th>
                                <th>Project Name</th>
                                <th>Project Details</th>
                                <th>Project Cost</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.projectList.map((row , index)=>{
                                    return <tr key={index}>
                                                <td>{row.client}</td>
                                                <td>{row.projectname}</td>
                                                <td>{row.projectdetail}</td>
                                                <td>{row.cost}</td>
                                                <td>{row.status}</td>
                                           </tr>
                                })
                            }
                        </tbody>
                        </table>
                        </div>
                    </div>
                </div>

        );
    }
    

}
export default Project;