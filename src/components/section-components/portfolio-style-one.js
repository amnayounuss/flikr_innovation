import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles

class PortfolioONe extends Component {
    componentDidMount() {
        Aos.init({ duration: 2000, easing: 'ease-in-out', once: true, disable: false });
    }

    render() {
        let publicUrl = process.env.PUBLIC_URL + '/'
        let imagealt = 'image'

        return (
            <section className="portfolio-one go-top">
                <div className="container">
                    <div className="block-title text-center" data-aos="fade-in">
                        <p><span>Our Project</span></p>
                        <h3>Let’s See Our Popular <br /> Project</h3>
                        <div className="block-title__line" />
                    </div>
                    <div className="row">
                        <div className="col-lg-4" data-aos="zoom-in">
                            <div className="portfolio-one__single">
                                <img src={publicUrl + "assets/images/portfolio/portfolio-4-1.png"} alt={imagealt} />
                                <div className="portfolio-one__content">
                                    <div className="portfolio-one__content-inner">
                                        <h3><Link to="/portfolio-standard">Creative App</Link></h3>
                                        <p>Mobile Application</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
                            <div className="portfolio-one__single">
                                <img src={publicUrl + "assets/images/portfolio/ebook.jpg"} alt={imagealt} />
                                <div className="portfolio-one__content">
                                    <div className="portfolio-one__content-inner">
                                        <h3><Link to="/portfolio-standard">Creative ebook</Link></h3>
                                        <p>E-Book</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="400">
                            <div className="portfolio-one__single">
                                <img src={publicUrl + "assets/images/portfolio/w10.jpg"} alt={imagealt} />
                                <div className="portfolio-one__content">
                                    <div className="portfolio-one__content-inner">
                                        <h3><Link to="/portfolio-standard">Creative website</Link></h3>
                                        <p>Website</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-one__more-btn__block text-center" data-aos="fade-up">
                        <Link to="/portfolio-standard" className="thm-btn portfolio-one__more-btn">View More <i className="fa fa-angle-double-right" /></Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default PortfolioONe;
