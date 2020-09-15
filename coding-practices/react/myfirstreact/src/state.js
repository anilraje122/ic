import React,  {Component} from 'react';

class Mystate extends Component  {
    constructor() {
        super();
        this.state =   {
            counter: 1,
        }
    }

    addOne = () =>  {
        this.setState( { counter: this.state.counter + 1 });
    }

    subOne = () =>  {
        this.setState( { counter: this.state.counter - 1 });
    }

    render()  {
        return (
            <div className="container">
                <h2 align="center">State Management Example</h2>
                <h3 align="center">The counter is : {this.state.counter}</h3>
                <p align="center">
                    <button onClick={this.addOne}>Add 1</button>
                    <button onClick={this.subOne}>Subtract 1</button>
                </p>
            </div>
        )
    }
}

export default Mystate;