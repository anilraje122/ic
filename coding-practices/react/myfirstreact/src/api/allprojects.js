import React, {Component} from 'react';
import axios from 'axios';

class AllProjects extends Component {
    constructor() {
        super();
        this.state = {
            projects: [
                {
                    id: '',
                    userid: '',
                    title: '',
                    details1: '',
                    details2: '',
                    details3: '',
                    details4: '',
                    cost: 'Rs. 10,000',
                    category: '9',
                    active: 'YES',
                    postdate :'2020-05-25 09:41:45',
                    salecount :'1',
                    downloadcount :'1'
                }
            ]
        }
    }

    componentDidMount() {
        this.getProjects();
    }

    getProjects() {
        axios.get('https://www.firstenquiry.com/api/react/live/allproject.php')
            .then((res) => {
                this.setState({
                    projects: res.data
                })
            })
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.projects.map((project, index) => {
                        return (
                            <div key={project.id} className="col-md-12">
                                <div className="card bg-light mb-2 p-3">
                                    <h2 className="text-center">{project.title}</h2>
                                    <div className="row m-2">
                                        <div className="col-md-4">
                                            <span >Catagory : {project.category}</span>
                                        </div>
                                        <div className="col-md-4 text-center">
                                            <span >User ID : {project.userid}</span>
                                        </div>
                                        <div className="col-md-4 text-right">
                                            <span>Cost {project.cost}</span>
                                        </div>
                                    </div>                                    
                                    <div class="card m-2 p-3">{project.details1}</div>
                                    <div class="card m-2 p-3">{project.details2}</div>
                                    <div class="card m-2 p-3">{project.details3}</div>
                                    <div class="card m-2 p-3">{project.details4}</div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <span>Posted Date : {project.postdate}</span>
                                        </div>
                                        <div className="col-md-4">
                                            <span>Sale Count : {project.salecount}</span>
                                        </div>
                                        <div className="col-md-4 text-right">
                                            <span>Download Count : {project.downloadcount}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default AllProjects;