import React, {Component} from 'react';

class Education extends Component {
    constructor() {
        super();
        this.state = {
            myeducation: ['10th', '12th', 'BscIT']
        }
    }

    render() {
        return (
            <div className="border p-3">
                <h3>My Education List</h3>
                {
                    this.state.myeducation.map((item, index) => {
                        return (
                        <p className="mt-3" key={index}>{index + 1}. {item}</p>
                        )
                    })
                }
            </div>
        );
    }
}

export default Education;