import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles

class Banner extends Component {
    componentDidMount() {
        Aos.init({ duration: 2000, easing: 'ease-in-out', once: true, disable: false });
    }

    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        let videoealt = 'video';

        return (
            <section className="banner-one go-top bannergradient" >
                <video src={`${publicUrl}assets/images/resources/banner-1-1.mp4`} alt={videoealt} className="banner-one__moc" autoPlay loop muted />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner-one__content" data-aos="fade-down-right" data-aos-duration="1500">
                                <h3>
                                    <span data-aos="zoom-in" data-aos-delay="500">Creative & Innovative</span> <br />
                                    <span data-aos="zoom-in" data-aos-delay="1000">Digital</span> <br />
                                    <span data-aos="zoom-in" data-aos-delay="1500">Solution</span>
                                </h3>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="2000">
                                <h5 data-aos="fade-left" data-aos-delay="2500">We are a professional & experienced Digital Agency</h5>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="3000">
                                <Link to="/service" className="thm-btn banner-one__btn" data-aos="zoom-in" data-aos-delay="3500">
                                    Discover Now <i className="fa fa-angle-double-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Banner;
