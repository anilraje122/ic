import React, {Component} from 'react';

class Comments extends Component {
    constructor() {
        super();
        this.state = {
            mycomments: [
                {comment: 'comment one', owner: 'By Anil'},
                {comment: 'comment two', owner: 'By Binil'},
                {comment: 'comment three', owner: 'By Dinil'},
                {comment: 'comment four', owner: 'By Vinil'},
            ]
        }
    }

    render() {
        return (
            <div className="border p-3">
                <h3>Recent Comments</h3>
                {
                    this.state.mycomments.map((item, index) => {
                        return (
                            <div className="row p-2" key={index}>
                                <div className="col-md-6">{item.comment}</div>
                                <div className="col-md-6">{item.owner}</div>
                            </div>
                        )
                    })
                }
                
            </div>
        );
    }
}

export default Comments;