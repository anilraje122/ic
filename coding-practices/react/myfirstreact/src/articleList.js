import React, {Component} from 'react';

class ArticleList extends Component {
    constructor(props) {
        super();
    }
    render() {
        return <div className="col-md-4 form-group">
                    <div className="border p-3">
                        <h4 className="text-danger">{this.props.headline}</h4>
                        <p>{this.props.more}</p>
                        <i>Read: {this.props.readTime}</i>
                        <hr/>
                        <small>props using class component</small>
                    </div>
                </div>
    }
}

export default ArticleList;