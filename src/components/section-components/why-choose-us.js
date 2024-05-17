import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles

class WhyChooseUs extends Component {
    componentDidMount() {
        Aos.init({ duration: 1000, easing: 'ease-in-out', once: true, disable: false });
    }

    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        let imagealt = 'image';

        return (
            <section className="service-one go-top" data-aos="fade-in">
                <div className="container">
                    <div className="block-title text-center" data-aos="fade-up">
                        <p><span>Why Choose Us</span></p>
                        <h3 data-aos="zoom-in">Success Your Business With <br /> Establish Agency</h3>
                        <div className="block-title__line" data-aos="fade-left" />
                    </div>
                    <div className="row high-gutter go-top">
                        <div className="col-lg-4" data-aos="fade-right">
                            <div className="service-one__single">
                                <div className="service-one__top" data-aos="flip-left">
                                    <div className="service-one__icon">
                                        <img src={publicUrl + "assets/images/shapes/service-i-1.png"} alt={imagealt} data-aos="flip-right" />
                                    </div>
                                    <div className="service-one__top-content">
                                        <h3><Link to="/portfolio-standard" data-aos="fade-down">Business Strategy &amp; Market Research</Link></h3>
                                        <p data-aos="fade-up">Digital Marketing</p>
                                    </div>
                                </div>
                                <p data-aos="fade-down">Elevate your online presence with our dynamic digital marketing
                                    solutions, blending creativity and innovation to drive remarkable results.</p>
                            </div>{/* /.service-one__single */}
                        </div>{/* /.col-lg-4 */}
                        <div className="col-lg-4" data-aos="fade-up">
                            <div className="service-one__single">
                                <div className="service-one__top" data-aos="flip-right">
                                    <div className="service-one__icon">
                                        <img src={publicUrl + "assets/images/shapes/service-i-2.png"} alt={imagealt} data-aos="flip-left" />
                                    </div>
                                    <div className="service-one__top-content">
                                        <h3><Link to="/portfolio-standard" data-aos="fade-down">SEO, PPC &amp; Social Media Solution</Link></h3>
                                        <p data-aos="fade-up">SEO Optimization</p>
                                    </div>
                                </div>
                                <p data-aos="fade-down">Elevate your brand online with Flikr Innovation's visionary Local SEO Services,
                                    blending technology and creativity for effective audience connection.</p>
                            </div>{/* /.service-one__single */}
                        </div>{/* /.col-lg-4 */}
                        <div className="col-lg-4" data-aos="fade-left">
                            <div className="service-one__single">
                                <div className="service-one__top" data-aos="flip-left">
                                    <div className="service-one__icon">
                                        <img src={publicUrl + "assets/images/shapes/service-i-3.png"} alt={imagealt} data-aos="flip-right" />
                                    </div>
                                    <div className="service-one__top-content">
                                        <h3><Link to="/portfolio-standard" data-aos="fade-down">Web Design And Development</Link></h3>
                                        <p data-aos="fade-up">Web Solutions</p>
                                    </div>
                                </div>
                                <p data-aos="fade-down">Step into the future with Flikr Innovation's web development services in the USA.
                                    Transform your business with a sleek, futuristic website tailored to your needs.</p>
                            </div>{/* /.service-one__single */}
                        </div>{/* /.col-lg-4 */}
                    </div>{/* /.row */}
                    <div className="row high-gutter go-top">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-4" data-aos="fade-right">
                            <div className="service-one__single">
                                <div className="service-one__top" data-aos="flip-right">
                                    <div className="service-one__icon">
                                        <img src={publicUrl + "assets/images/shapes/service-i-4.png"} alt={imagealt} data-aos="flip-left" />
                                    </div>
                                    <div className="service-one__top-content">
                                        <h3><Link to="/portfolio-standard" data-aos="fade-down">Mobile Application Development</Link></h3>
                                        <p data-aos="fade-up">App Development</p>
                                    </div>
                                </div>
                                <p data-aos="fade-down">We prioritize user experience, security, and innovation in app development, ensuring
                                    high-quality, impactful applications from meticulous planning to rigorous testing.</p>
                            </div>{/* /.service-one__single */}
                        </div>{/* /.col-lg-4 */}
                        <div className="col-lg-4" data-aos="fade-left">
                            <div className="service-one__single">
                                <div className="service-one__top" data-aos="flip-left">
                                    <div className="service-one__icon">
                                        <img src={publicUrl + "assets/images/shapes/service-i-5.png"} alt={imagealt} data-aos="flip-right" />
                                    </div>
                                    <div className="service-one__top-content">
                                        <h3><Link to="/portfolio-standard" data-aos="fade-down">Designing</Link></h3>
                                        <p data-aos="fade-up">Graphic Designing</p>
                                    </div>
                                </div>
                                <p data-aos="fade-down">Flikr Innovation's graphic design services ensure your brand
                                    maintains its visual identity, crafting stunning logos and UI/UX that
                                    leave a lasting impression.</p>
                            </div>{/* /.service-one__single */}
                        </div>{/* /.col-lg-4 */}
                        <div className="col-lg-2"></div>
                    </div>{/* /.row */}
                </div>{/* /.container */}
            </section>
        );
    }
}

export default WhyChooseUs;
