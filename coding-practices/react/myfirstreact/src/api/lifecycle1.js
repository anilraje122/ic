import React , {Component} from 'react';
class Mounting extends Component{
    constructor(){
        super();
        alert("From Constructor !");
    }

    componentDidMount(){
        alert("From ComponentDidMount !");
    }

    render(){
        alert("From Render");
        return <div className="container">
                    <h2>Page is rendered successfully ! </h2>
                    <p>Once this text will apprean in browser, after ComponentDidMount will call</p>
                    <p>Once this text will apprean in browser, after ComponentDidMount will call</p>
                </div>
    }
}

export default Mounting;