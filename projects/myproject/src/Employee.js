import React , {Component} from 'react';
import axios from 'axios';
class Employee extends Component{
    constructor(){
        super();
        this.state = {
            empname:'',
            empemail:'', 
            empmobile:'', 
            empprofile:'',
            empsalary:'', 
            empskill:'',
            msg:'',
            emplist:[]
        };
    }

    handleEmpName=(obj)=>{
        this.setState({
            empname:obj.target.value
        })
    }
    handleEmpemail=(obj)=>{
        this.setState({
            empemail:obj.target.value
        })
    }
    handleEmpmobile=(obj)=>{
        this.setState({
            empmobile:obj.target.value
        })
    }
    handleEmpprofile=(obj)=>{
        this.setState({
            empprofile:obj.target.value
        })
    }
    handleEmpsalary=(obj)=>{
        this.setState({
            empsalary:obj.target.value
        })
    }
    handleEmpskill=(obj)=>{
        this.setState({
            empskill:obj.target.value
        })
    }

    saveEmp = () =>{
        let url = "https://www.firstenquiry.com/api/react/pms/saveemp.php";
        let input = new FormData();
        input.append("name", this.state.empname);
        input.append("email", this.state.empemail);
        input.append("mobile", this.state.empmobile);
        input.append("salary", this.state.empsalary);
        input.append("skill", this.state.empskill);
        input.append("profile", this.state.empprofile);
        input.append("hrid", sessionStorage.getItem("token"));
         axios.post(url,input).then(response=>{
             this.setState({
                 msg:response.data.status,
                 empname:'',
                 empemail:'',
                 empmobile:'',
                 empsalary:'',
                 empskill:'' ,
                 empprofile:''   
             })
             this.getEmp();// After saving the employee, reload the list
         })
    }

    getEmp = () =>{
        let url = "https://www.firstenquiry.com/api/react/pms/emplist.php";
        let input = new FormData();
        input.append("hrid", sessionStorage.getItem("token"));
        axios.post(url , input).then(response=>{
            if(response.data.length>0){
                this.setState({
                    emplist:response.data,
                    msg:response.data.length + " - Total Employee"
                })
            }else{
                this.setState({
                    msg:" 0 - Total Employee"
                })
            }
        })
    }

    componentDidMount(){
        this.getEmp();
    }

    render(){
        return <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center p-2">
                            <h2 className="text-primary">Employee Management</h2>
                            <p className="text-danger">{this.state.msg}</p>
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
                                value={this.state.empname}
                            />
                        </div>
                        <div className="form-group">
                            <label>Employee Email</label>
                            <input
                                type="email"
                                className="form-control rounded-pill"
                                onChange={this.handleEmpemail}
                                value={this.state.empemail}
                            />
                        </div>
                        <div className="form-group">
                            <label>Employee Mobile</label>
                            <input
                                type="number"
                                className="form-control rounded-pill"
                                onChange={this.handleEmpmobile}
                                value={this.state.empmobile}
                            />
                        </div>
                        <div className="form-group">
                            <label>Employee Profile</label>
                            <input
                                type="text"
                                className="form-control rounded-pill"
                                onChange={this.handleEmpprofile}
                                value={this.state.empprofile}
                            />
                        </div>
                        <div className="form-group">
                            <label>Employee Salary</label>
                            <input
                                type="text"
                                className="form-control rounded-pill"
                                onChange={this.handleEmpsalary}
                                value={this.state.empsalary}
                            />
                        </div>
                        <div className="form-group">
                            <label>Employee Skill</label>
                            <input
                                type="text"
                                className="form-control rounded-pill"
                                onChange={this.handleEmpskill}
                                value={this.state.empskill}
                            />
                        </div>
                        <button className="btn btn-primary btn-sm btn-block" onClick={this.saveEmp}> Save Employee </button>
                    </div>
                    <div className="col-md-9">
                    <table className="table table-stripped table-sm">
                        <thead className="text-primary">
                            <tr>
                                <th>Employee Name</th>
                                <th>Employee Email</th>
                                <th>Employee Mobile</th>
                                <th>Employee Profile</th>
                                <th>Employee Salary</th>
                                <th>Employee Skills</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.emplist.map((row , index)=>{
                                    return <tr key={index}>
                                                <td>{row.name}</td>
                                                <td>{row.email}</td>
                                                <td>{row.mobile}</td>
                                                <td>{row.profile}</td>
                                                <td>{row.salary}</td>
                                                <td>{row.skill}</td>
                                           </tr>
                                })
                            }
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
    }
}

export default Employee;