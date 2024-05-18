import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

class AboutPage extends Component {
	componentDidMount() {
		AOS.init({ duration: 2000, easing: 'ease-in-out', once: true, disable: false });
	}

	render() {
		let publicUrl = process.env.PUBLIC_URL + '/';
		let imagealt = 'image';

		return (
			<section className="service-two service-two__service-page service-two__about-page  go-top" data-aos="fade-up">
				<div className="container" style={{ marginTop: '-40px' }}>
					<div className="row">
						<div className="col-lg-6">
							<div className="service-two__image" data-aos="fade-right">
								<img src={publicUrl + 'assets/images/resources/about-page-moc-1.jpg'} alt={imagealt} style={{ width: '650px', height: '500px' }} />
							</div>
						</div>
						<div className="col-lg-6">
							<div className="service-two__block" data-aos="fade-left">
								<div className="block-title-two text-left">
									<p>about us</p>
									<h3>Exclusive Agency To <br /> Provide Solution</h3>
								</div>
								<p>Utilizing a blend of creative ingenuity and strategic acumen, we transform your brand's vision into reality. Our collaborative methodology, demonstrated proficiency, and user-centric designs guarantee prominence in the digital sphere. Partner with us to redefine your online presence and engage your audience effectively. </p>
								<ul className="list-unstyled video-one__list">
									<li>
										<i className="far fa-check" /> Creative prowess and strategic vision realize your brand's potential.
									</li>
									<li>
										<i className="far fa-check" /> Collaborative excellence ensures standout performance in digital realms.
									</li>
									<li>
										<i className="far fa-check" /> Redefine presence with user-centric designs, captivating audiences.
									</li>
									<li>
										<i className="far fa-check" /> Access 24/7 customer service for reliable support.
									</li>
								</ul>
								<Link to="/service" className="thm-btn" data-aos="fade-up" data-aos-delay="500">
									Read More <i className="fa fa-angle-double-right" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default AboutPage;
