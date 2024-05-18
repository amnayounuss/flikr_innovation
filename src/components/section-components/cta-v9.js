import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import AOS from 'aos';
import 'aos/dist/aos.css';

class CtaV9 extends Component {
	componentDidMount() {
		AOS.init({ duration: 1500, easing: 'ease-in-out', once: true, disable: false });
	}

	render() {
		let publicUrl = process.env.PUBLIC_URL + '/';

		return (
			<section
				className="cta-two cta-two__about-page go-top"
				style={{ backgroundImage: 'url(' + publicUrl + 'assets/images/backgrounds/cta-bg-1-1.jpg)' }}
				data-aos="fade-up"
			>
				<div className="container text-center">
					<h3 data-aos="fade-down">Our Business Advisors <br /> Always Help You</h3>
					<Link to="/service" className="thm-btn" data-aos="fade-up">
						Read More <i className="fa fa-angle-double-right" />
					</Link>
				</div>
			</section>
		);
	}
}

export default CtaV9;
