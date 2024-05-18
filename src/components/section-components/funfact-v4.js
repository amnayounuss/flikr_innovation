import React, { Component } from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

class FunfactV4 extends Component {
	componentDidMount() {
		AOS.init({ duration: 2000, easing: 'ease-in-out', once: true, disable: false });
	}

	render() {
		let publicUrl = process.env.PUBLIC_URL + '/';

		return (
			<section className="funfact-one funfact-one__home-two funfact-one__about-page" data-aos="fade-up">
				<div className="container" style={{ marginTop: '-140px' }}>
					<div className="row high-gutter">
						<div className="col-lg-3 col-md-6" data-aos="fade-right">
							<div className="funfact-one__single">
								<div className="funfact-one__icon">
									<i className="far fa-user-alt" />
								</div>
								<h3>
									<span className="counter">1500</span>
									+
								</h3>
								<p>Project</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6" data-aos="fade-right">
							<div className="funfact-one__single">
								<div className="funfact-one__icon">
									<i className="far fa-heart" />
								</div>
								<h3>
									<span className="counter">1200</span>
									+
								</h3>
								<p>Satisfied Clients</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6" data-aos="fade-left">
							<div className="funfact-one__single">
								<div className="funfact-one__icon">
									<i className="far fa-cloud-download" />
								</div>
								<h3>
									<span className="counter">1000</span>
									+
								</h3>
								<p>Win Awards</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6" data-aos="fade-left">
							<div className="funfact-one__single">
								<div className="funfact-one__icon">
									<i className="far fa-star" />
								</div>
								<h3>
									<span className="counter">100</span>
									+
								</h3>
								<p>Team Member</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default FunfactV4;
