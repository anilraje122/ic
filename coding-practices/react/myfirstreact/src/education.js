import React, {Component} from 'react';
import LocalJSON from './localJSON';

class Education extends Component {
    constructor() {
        super();
        this.state = {
            myeducation: ['10th', '12th', 'BscIT'],
            showCity: true
        }
    }

    one() {
        this.setState({
            showCity: false
        })
    }

    two() {
        this.setState({
            showCity: true
        })
    }

    render() {
        let city;
        if(this.state.showCity) {
            city = <LocalJSON/>
        } else {
            city = '';
        }
        return (
            <div className="container">
                <div align="center">
                    <button onClick={this.two} className="btn btn-success"> Show Location</button>
                    <button onClick={this.one} className="btn btn-danger"> Hide Location</button>
                </div>
                {city}
                <div>
                    <h3>My Education List</h3>
                    {
                        this.state.myeducation.map((item, index) => {
                            return (
                            <p className="mt-3" key={index}>{index + 1}. {item}</p>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Education;