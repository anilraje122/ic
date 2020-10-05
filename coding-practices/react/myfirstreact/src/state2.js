import React,  {Component} from 'react';

class Mystate2 extends Component  {
    constructor() {
        super();
        this.state =   {
            items: ['Apple', 'Orange', 'Grapes'],
            newItem: '',
            message: ''
        }
    }
    passName = (obj) => {
        this.setState({
            newItem: obj.target.value
        });
    }
    save = () => {
        this.setState({
            items : this.state.items.concat(this.state.newItem),
            message : this.state.newItem + 'added successfully!',
            newItem: ''
        });
    }
    render() {
        return (
            <div className="container" align="center">
                <h2> Total Items : {this.state.items.length}</h2>
                <p>
                    New Item : <input type="text" onChange={this.passName} value={this.state.newItem}/>
                    <button onClick={this.save}>Save</button>
                </p>

                <p> {this.state.message} </p>
                <table border="1" cellPadding="10" width="400">
                    <tbody>
                    <tr>
                        <th>SL No</th>
                        <th>Item</th>
                        <th>Delete</th>
                    </tr>
                    {
                        this.state.items.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item}</td>
                                    <td>[Delete]</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Mystate2;