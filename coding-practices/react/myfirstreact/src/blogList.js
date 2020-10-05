import React from 'react';

const BlogList = (props) => {
    return (
        <div className="col-md-3 form-group">
            <h4>{props.headline}</h4>
            <p>{props.more}</p>
            <i>Read: {props.readTime}</i>
        </div>
    );
}

export default BlogList;