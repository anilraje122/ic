import React, {Component} from 'react';
import axios from 'axios';

class LocalJSON extends Component {
    constructor() {
        super();
        this.state = {
            product: []
        }
    }

    // it execute after constructor
    componentDidMount() {
        this.getProduct();
    }

    getProduct = () => {
        axios.get('../product.json')
            .then( (res) => {
                this.setState({
                    product : res.data
                });
            })
            .catch( (err) => {
                console.log('Error Occured!' + err);
            })
    }

    render() {
        return (
            <div className="border p-3 text-center">
                <h3>Products Details</h3>
                {
                    this.state.product.map((item, index) => {
                        return  <p key={index}>{item}</p>
                    })
                }
           </div>
        )
    }

}

export default LocalJSON;