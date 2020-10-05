import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from 'react-player';

class ReactVideo extends Component {
    constructor() {
        super();
        this.state = {
            video: [
                {"name": "video one", "url": "https://www.youtube.com/watch?v=3olM-9vcd4M"},
                {"name": "video two", "url": "https://www.youtube.com/watch?v=vlu2_4uaOIU"},
                {"name": "video three", "url": "https://www.youtube.com/watch?v=cH66LWWluVE"}
            ],
            purl: "https://www.youtube.com/watch?v=3olM-9vcd4M"
        }
    }
    changeVideo = (index) => {
        this.setState({
            purl: this.state.video[index].url
        })
    }

    render() {
        return (
            <div className="cotainer">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2>ReactJS Video Player</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <ul className="list-group">
                            <li className="list-group-item active">Play List </li>
                            {
                                this.state.video.map((item, index) => {
                                    return <li className="list-group-item" onClick={this.changeVideo.bind(this, index)} key={index}>Play {item.name}</li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="col-md-9 text-center p-4">
                        <ReactPlayer url={this.state.purl}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReactVideo;