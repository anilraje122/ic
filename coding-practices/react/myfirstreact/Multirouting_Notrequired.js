import React , {Component} from 'react';
import { Switch, Route, Link } from "react-router-dom";
const Comments = () => <div><h1 className="">This is comment component </h1> </div>;
const Contact = () => <div> <h1>Contact Us</h1> </div>;

class Multirouting extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const { path } = this.props.match;
        return <div className="row">
            <div className="col-md-3">

                <ul className="list-group">
                    <Link to={`${path}`} className="list-group-item">Profile</Link>
                    <Link to={`${path}/comments`} className="list-group-item">Comments</Link>
                    <Link to={`${path}/contact`} className="list-group-item">Contact</Link>
                </ul>

            </div>
            <div className="col-md-9">
            <h1> Current Url : {path} is parent url </h1>
                <Switch>
                    <Route path={`${path}`} exact component={Comments} />
                    <Route path={`${path}/comments`} component={Comments} />
                    <Route path={`${path}/contact`} component={Contact} />
                </Switch>
            </div>
        </div>;
    }
}
export default Multirouting;




