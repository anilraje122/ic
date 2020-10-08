import React from 'react';

const MyDashboard = () =>{
    return <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center p-4">
                        <h2 className="text-primary">Welcome , {sessionStorage.getItem("name")} </h2>
                    </div>
                </div>

                <div className="row text-center">
                    <div className="col-md-4 form-group text-primary">
                        <h5>Manage Project</h5>
                        <i className="fa fa-edit fa-2x"></i>
                    </div>

                    <div className="col-md-4 form-group text-info">
                        <h5>Manage Clients</h5>
                        <i className="fa fa-suitcase fa-2x"></i>
                    </div>

                    <div className="col-md-4 form-group text-warning">
                        <h5>Manage Employee</h5>
                        <i className="fa fa-users fa-2x"></i>
                    </div>

                    <div className="col-md-4 form-group text-danger">
                        <h5>Time Sheet</h5>
                        <i className="fa fa-clock fa-2x"></i>
                    </div>

                    <div className="col-md-4 form-group text-success">
                        <h5>Manage Cost</h5>
                        <i className="fa fa-rupee-sign fa-2x"></i>
                    </div>
                </div>
           </div>
}
export default MyDashboard;
