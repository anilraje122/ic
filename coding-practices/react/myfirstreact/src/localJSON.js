import React, {Component} from 'react';
import axios from 'axios';

class LocalJSON extends Component {
    constructor() {
        super();
        this.state = {
            product: [],
            bye: ''
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

    componentWillUnmount() {
        this.setState({
            bye: 'please wait, im going..'
        })
    }

    render() {
        return (
            <div className="border p-3 text-center">
                <div className="row">
                    <div className="col-md-12">
                        {this.state.bye}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h3>Products Details</h3>
                        {
                            this.state.product.map((item, index) => {
                                return  <p key={index}>{item}</p>
                            })
                        }
                    </div>
                </div>
                
           </div>
        )
    }

}

export default LocalJSON;