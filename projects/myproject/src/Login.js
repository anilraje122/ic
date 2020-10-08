import React , {Component} from 'react';
import axios from 'axios';
class Login extends Component{

    constructor(){
        super();
        this.state ={
            email:'',
            pass:'',
            msg:''
        }
    }

    processEmail = (obj) =>{
        this.setState({
            email:obj.target.value
        })
    }

    processPass = (obj) =>{
        this.setState({
            pass:obj.target.value
        })
    }

    login = () =>{
        if((this.state.email=="") || (this.state.pass=="") )
        {
           this.setState({
               msg:"Please enter login details !"
           })     
        }else{
            let url = "https://www.firstenquiry.com/api/react/pms/auth.php";
            let input = new FormData();
            input.append("email", this.state.email);
            input.append("pass", this.state.pass);

            axios.post(url , input).then(response=>{
                if((response.data.id !=""))
                {
                    this.setState({
                        msg:"Success ! Please wait re-directing... "
                    }) 
                    sessionStorage.setItem("name", response.data.name);
                    sessionStorage.setItem("token", response.data.id);
                    window.location.reload();// refresh the page after login   
                }else{
                    this.setState({
                        msg:"Fail ! Invalid or not Exist !"
                    })    
                }
            })
            
        }
    }


    render(){
        return <div className="container">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <br/><br/>
                            <p className="text-center text-primary">{this.state.msg}</p>
                            <div className="card">
                                <div className="card-header bg-primary text-white">Login</div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label>E-Mail</label>
                                        <input type="text" className="form-control" onChange={this.processEmail}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" onChange={this.processPass}/>
                                    </div>
                                </div>
                                <div className="card-footer text-center"> 
                                    <button className="btn btn-danger btn-sm" onClick={this.login}>Login</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
    }
}

export default Login;