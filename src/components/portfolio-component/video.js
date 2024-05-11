import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Video extends Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';

        // Define an array of video data
        const videos = [
            { id: 1, video: "video1.mp4" },
            { id: 2, video: "video2.mp4" },
            { id: 3, video: "video3.mp4" },
            { id: 4, video: "video4.mp4" },
            { id: 5, video: "video5.mp4" }
        ];

        return (
            <React.Fragment>
                {/* Map over the videos array and render each video dynamically */}
                {videos.map(video => (
                    <div key={video.id} className="col-lg-3 col-md-6 col-sm-12 design masonary-item">
                        <div className="portfolio-three__single">
                            <div className="portfolio-three__image">
                                <video width="100%" controls>
                                    <source src={publicUrl + "assets/images/portfolio/video/" + video.video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="portfolio-three__content">
                                <div className="portfolio-three__content-inner">
                                    <Link to="/portfolio-details" className="portfolio-three__link"><i className="fa fa-long-arrow-alt-right" /></Link>
                                    <h3><Link to="/portfolio-details">Video Thumbnail</Link></h3>
                                    <p><Link to="/portfolio-details">Design.</Link><Link to="/portfolio-details">Branding</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </React.Fragment>
        );
    }
}

export default Video;
