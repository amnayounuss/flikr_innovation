import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles

class AboutStyleOne extends Component {
    componentDidMount() {
        Aos.init({ duration: 2000, easing: 'ease-in-out', once: true, disable: false });
    }

    render() {
        let publicUrl = process.env.PUBLIC_URL + '/'
        let imagealt = 'image'

        return (
            <section className="about-one go-top">
                <div className="container">
                    <img src={publicUrl + "assets/images/resources/cta-1-1.png"} alt={imagealt} className="about-one__moc" style={{ marginTop: '120px' }} />
                    <div className="row justify-content-end">
                        <div className="col-lg-6">
                            <div className="about-one__content" data-aos="fade-in">
                                <div className="block-title text-left">
                                    <p><span>About Us</span></p>
                                    <h3>What makes <br /> our creative <br /> Digital Agency  <br /> Your Ideal Partner</h3>
                                    <div className="block-title__line" />{/* /.block-title__line */}
                                </div>{/* /.block-title */}
                                <p data-aos="fade-up" data-aos-delay="500">Your brand's vision is brought to life with a blend of creativity
                                    and strategic prowess. You stand out in the digital realm due to our collaborative
                                    approach, proven excellence, and user-centric designs. Partner with us to transform your digital presence and captivate your audience.</p>
                                <h4 data-aos="fade-up" data-aos-delay="700">Driving promising results &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  24/7 Support 
                                    <br/> Professional Staff &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Fair Prices</h4>
                                <Link to="/about" className="thm-btn about-one__btn" data-aos="fade-up" data-aos-delay="900">Read More <i className="fa fa-angle-double-right" /></Link>
                                {/* /.thm-btn */}
                            </div>{/* /.about-one__content */}
                        </div>{/* /.col-lg-6 */}
                    </div>{/* /.row */}
                </div>{/* /.container */}
            </section>
        )
    }
}

export default AboutStyleOne;
