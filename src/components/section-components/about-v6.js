import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AboutV6 extends Component {
  componentDidMount() {
    const video = document.getElementById('custom-video');
    video.addEventListener('loadedmetadata', this.handleVideoLoad);
  }

  componentWillUnmount() {
    const video = document.getElementById('custom-video');
    video.removeEventListener('loadedmetadata', this.handleVideoLoad);
  }

  handleVideoLoad = () => {
    const videoPlayed = localStorage.getItem('videoPlayed');
    const video = document.getElementById('custom-video');
    if (!videoPlayed) {
      video.play();
      localStorage.setItem('videoPlayed', 'true');
    }
  };

  render() {
    let publicUrl = process.env.PUBLIC_URL + '/';
    let imagealt = 'image';
    let videoUrl = publicUrl + "assets/images/resources/avideo.mp4";

    return (
      <section className="about-three about-three__about-page go-top">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="about-three__content">
                <div className="block-title-two text-left">
                  <p>What we do</p>
                  <h3>Marketing Is Our Professional Business </h3>
                </div>
                <p>Marketing is more than just a profession for us; it's our expertise and passion. At our digital agency, we offer a comprehensive suite of services tailored to elevate your brand's online presence. From captivating graphic designs to seamless web and app development, strategic e-book creation, SEO optimization, and impactful digital marketing campaigns, we are your one-stop destination for all things digital. Let us partner with you to unlock the full potential of your brand in the digital landscape. </p>
                <Link to="/about" className="thm-btn about-three__btn">Read More <i className="fa fa-angle-double-right" /></Link>
              </div>
            </div>
            <div className="col-xl-6 d-flex justify-content-center">
              <div className="video-one__box">
                <video id="custom-video" className="custom-video" autoPlay loop muted>
                  <source src={videoUrl} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutV6;
