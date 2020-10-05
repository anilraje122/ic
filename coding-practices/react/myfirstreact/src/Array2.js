import React,  {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Array2 extends Component  {
    constructor() {
        super();
        this.state = {
            item: [{name: 'apple', price: 200, qty: 5 }],
            newName: '',
            newPrice: '',
            newQty: '',
            msg: ''
        }
    }

    processName = (obj) => {
        this.setState({
            newName: obj.target.value
        });
    }
    processPrice = (obj) => {
        this.setState({
            newPrice: obj.target.value
        });
    }
    processQty = (obj) => {
        this.setState({
            newQty: obj.target.value
        });
    }

    save = () => {
        let newItem = {
            name: this.state.newName,
            price: this.state.newPrice,
            qty: this.state.newQty
        }

        this.setState({
            item: this.state.item.concat(newItem),
            msg: 'Item saved successfully!',
            newName: '',
            newPrice: '',
            newQty: '',
        })
    }

    deleteItem = (index) => {
        this.state.item.splice(index, 1);
        this.setState({
            item: this.state.item,
            msg: 'Item deleted successfully!'
        })
    }

    render() {
        return (
            <div className="container m-4">
                <h3 className="text-center">Array2/State3</h3>
                <div className="row">
                    <div className="col-md-12 text-success text-center">
                        {this.state.msg}
                    </div>
                </div>
                <div className="row m-4">
                    <div className="col-md-3 border">
                        <h4 >Add Item</h4>
                        <div className="form-group">
                            <label>Item Name</label>
                            <input type="text" className="form-control" onChange={this.processName} value={this.state.newName}/>
                        </div>
                        <div className="form-group">
                            <label>Price</label>
                            <input type="number" className="form-control" onChange={this.processPrice} value={this.state.newPrice}/>
                        </div>
                        <div className="form-group">
                            <label>Quantity</label>
                            <input type="number" className="form-control" onChange={this.processQty} value={this.state.newQty}/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-success btn-block" onClick={this.save}>Add Item</button>
                        </div>
                    </div>
                    <div className="col-md-9 border">
                        <h4 align="center">Item List</h4>
                        <table className="table table-bordered">
                            <tbody>
                            <tr>
                                <th>SL No</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Delete</th>
                            </tr>
                            {
                                this.state.item.map((item, index)=>{
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>
                                            <td>{item.qty}</td>
                                            <td>
                                                <button className="btn btn-danger btn-sm" onClick={this.deleteItem.bind(this, index)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Array2;