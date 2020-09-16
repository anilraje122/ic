import React,  {Component} from 'react';

class Mystate extends Component  {
    constructor() {
        super();
        this.state =   {
            counter: 1,
            name: '?'
        }
    }

    addOne = () =>  {
        this.setState( { counter: this.state.counter + 1 });
    }

    subOne = () =>  {
        this.setState( { counter: this.state.counter - 1 });
    }

    processName = (obj) => {
        this.setState({
            name: obj.target.value
        })
    }

    render()  {
        return (
            <div className="container" align="center">
                <h2>State Management Example</h2>
                <h3>The counter is : {this.state.counter}</h3>
                <p>
                    <button onClick={this.addOne}>Add 1</button>
                    <button onClick={this.subOne}>Subtract 1</button>
                </p>
                <p>
                    Enter your name : <input type="text" onChange={this.processName}/>
                </p>
                <p>
                    Your name is : {this.state.name}
                </p>
            </div>
        )
    }
}

export default Mystate;