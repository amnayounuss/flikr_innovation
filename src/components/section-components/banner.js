import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Banner extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         videoPlayed: false // Initialize state to track if the video has played
    //     };
    // }

    // componentDidMount() {
    //     // Check if the video has already been played before
    //     const videoPlayed = localStorage.getItem('videoPlayed');
    //     if (videoPlayed) {
    //         this.setState({ videoPlayed: true });
    //     }
    // }

    // handleVideoPlay = () => {
    //     // Set the state to indicate that the video has been played
    //     this.setState({ videoPlayed: true });
    //     // Store the information in localStorage
    //     localStorage.setItem('videoPlayed', 'true');
    // };

    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        let videoealt = 'video';

        return (
            <section className="banner-one go-top" style={{backgroundImage: `url(${publicUrl}assets/images/backgrounds/banner-bg-1-1.png)`}}>
                <video src={`${publicUrl}assets/images/resources/banner-1-1.mp4`} alt={videoealt} className="banner-one__moc" autoPlay loop muted /> 
                {/* {this.state.videoPlayed ? ( // Check if the video has already played
                    <video src={`${publicUrl}assets/images/resources/banner-1-1.mp4`} alt={videoealt} className="banner-one__moc" autoPlay loop muted /> 
                ) : (
                    <video src={`${publicUrl}assets/images/resources/banner-1-1.mp4`} alt={videoealt} className="banner-one__moc" autoPlay loop muted={this.handleVideoPlay} />
                )} */}
                
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner-one__content ">
                                <h3><span>Creative & Innovative</span> <br />Digital <br />Solution</h3>
                                <p>We are a professional & experienced Digital Agency</p>
                                <Link to="/service" className="thm-btn banner-one__btn">Discover Now <i className="fa fa-angle-double-right" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Banner;
