import React , {Component} from 'react';
import axios from 'axios';
class Cost extends Component{
    constructor(){
        super();
  }

  render(){
      return <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center p-3">
                        <h2 className="text-info">Cost Management</h2>
                    </div>
                </div>
             </div>
  }
}

export default Cost;