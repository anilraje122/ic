import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogList from './blogList';
import ArticleList from './articleList';


class Property extends Component {
    constructor() {
        super();
        this.state = {
            blog: [
                {title: 'php blog', details: 'This is a php blog', read : '10 times'},
                {title: 'java blog', details: 'This is a java blog', read : '110 times'},
                {title: 'python blog', details: 'This is a python blog', read : '120 times'},
                {title: 'js blog', details: 'This is a js blog', read : '130 times'},
                {title: 'asp blog', details: 'This is a asp blog', read : '410 times'},
                {title: 'react blog', details: 'This is a react blog', read : '510 times'},
                {title: 'angular blog', details: 'This is a angular blog', read : '310 times'},
                {title: 'vue js blog', details: 'This is a vue blog', read : '510 times'},
                {title: 'perl blog', details: 'This is a perl blog', read : '170 times'},
                {title: 'ruby blog', details: 'This is a ruby blog', read : '390 times'}
            ]
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-cente">
                        <h3 className="m-4">React Js Props with class and function component</h3>
                    </div>
                </div>
                <br/>
                <div className="row">
                    {
                        this.state.blog.map ((row, index) => {
                            return (
                                <BlogList key={index}
                                    headline={row.title} 
                                    more={row.details} 
                                    readTime={row.read}
                                />
                            )
                        })
                    }
                </div>
                <br/>
                <div className="row">
                    {
                        this.state.blog.map ((row, index) => {
                            return (
                                <ArticleList key={index}
                                    headline={row.title} 
                                    more={row.details} 
                                    readTime={row.read}
                                />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
    
}

export default Property;