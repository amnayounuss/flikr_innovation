import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

class Cta extends Component {
    componentDidMount() {
        Aos.init({ duration: 1500, easing: 'ease-in-out', once: true });
    }

    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';

        return (
            <section className="cta-one go-top" data-aos="fade-up">
                <div className="container">
                    <div className="inner-container">
                        <div className="cta-one__left" data-aos="fade-right">
                            <h3>Build Your Business</h3>
                            <p>Transforming Ideas into Digital Brilliance</p>
                        </div>
                        <div className="cta-one__right" data-aos="fade-left">
                            <Link to="/contact" className="thm-btn cta-one__btn">
                                Contact Us <i className="fa fa-angle-double-right" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Cta;
