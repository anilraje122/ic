import React, {Component} from 'react';
import axios from 'axios';

class AllJobs extends Component {
    constructor() {
        super();
        this.state = {
            jobs : [
                {
                    jobid: '',
                    title: '',
                    jd: '',
                    client: '',
                    location: '',
                    salary: '',
                    experience: '',
                    position: '',
                    status: '',
                    postdate: '',
                    hrid: ''
                }
            ]
        }
    }

    componentDidMount() {
        this.getJobs();
    }

    getJobs() {
        axios.get('https://www.firstenquiry.com/api/react/live/alljob.php')
            .then((res) => {
                this.setState({
                    jobs : res.data
                })
            })
    }
    

    render() {
        return (
            <div className="row">
                {
                    this.state.jobs.map((job, index) => {
                        return (
                            <div key={job.jobid} className="col-md-6">
                                <div className="card bg-light mb-2 p-4">
                                    <img src="../hiring.png" alt="profile" className="img img-fluid mb-1"></img>
                                    <h3 className="text-center mb-4">{job.title}</h3>
                                    <div className="border p-2">
                                        <h6 className="border-bottom pb-2 text-center mb-3">More Details</h6>
                                        <div>Job Description : {job.jd}</div>
                                        <div>Client Details : {job.client}</div>
                                        <div>Location : {job.location}</div>
                                        <div>Salary : {job.salary}</div>
                                        <div>Experience Required : {job.experience}</div>
                                        <div>Positions Availbale : {job.position}</div>
                                        <div>HR Details : {job.hrid}</div>
                                        <div>Date : {job.postdate}</div>                                        
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

export default AllJobs;