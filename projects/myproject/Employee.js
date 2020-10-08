import React, { Component } from 'react'

export default class Employee extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-center text-info p-2">Employee Management</h2>
                    </div>
				</div>
					<div className="row">
                        <div className="col-md-3">
                        <div className="form-group">
                            <label>Employee Name</label>
                            <input
                                type="text"
                                className="form-control rounded-pill"
                                onChange={this.handleEmpName}
                            />
                        </div>
                        <div className="form-group">
                            <label>Employee Email</label>
                            <input
                                type="email"
                                className="form-control rounded-pill"
                                onChange={this.handleEmpemail}
                            />
                        </div>
                        <div className="form-group">
                            <label>Employee Mobile</label>
                            <input
                                type="number"
                                className="form-control rounded-pill"
                                onChange={this.handleEmpmobile}
                            />
                        </div>
                        <div className="form-group">
                            <label>Employee Profile</label>
                            <input
                                type="text"
                                className="form-control rounded-pill"
                                onChange={this.handleEmpprofile}
                            />
                        </div>
                        <div className="form-group">
                            <label>Employee Salary</label>
                            <input
                                type="text"
                                className="form-control rounded-pill"
                                onChange={this.handleEmpsalary}
                            />
                        </div>
                        <div className="form-group">
                            <label>Employee Skill</label>
                            <input
                                type="text"
                                className="form-control rounded-pill"
                                onChange={this.handleEmpskill}
                            />
                        </div>
                        <button className="btn btn-primary btn-sm btn-block" onClick={this.saveEmp}> Save Employee </button>
                    </div>
                    <div className="col-md-9">
                    <table className="table table-stripped table-sm">
                        <thead>
                            <tr>
                                <th>Employee Name</th>
                                <th>Employee Email</th>
                                <th>Employee Mobile</th>
                                <th>Employee Profile</th>
                                <th>Employee Salary</th>
                                <th>Employee Skills</th>
                            </tr>
                        </thead>
                    </table>
                    </div>
                </div>
            </div>
        )
    }
}
