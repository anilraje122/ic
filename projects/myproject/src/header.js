import React , {Component} from 'react';
import {Link} from 'react-router-dom';
class Header extends Component{

    logout = ()=>{
        sessionStorage.clear();
        window.location.reload();
    }

    render(){
        return <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <a className="navbar-brand" href="#">Project Management</a>
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/"> <i className="fa fa-home"></i> Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/client"> <i className="fa fa-suitcase"></i> Clients</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/project"> <i className="fa fa-edit"></i> Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/employee"> <i className="fa fa-users"></i> Employees</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cost"> <i className="fa fa-rupee-sign"></i> Costs</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/timesheet"> <i className="fa fa-clock"></i> Time Sheet</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" onClick={this.logout}>
                            Welcome {sessionStorage.getItem("name")} , <i className="fa fa-power-off text-danger">Logout</i>
                        </Link>
                    </li>
                    </ul>
                </nav>
    }
}
export default Header;


