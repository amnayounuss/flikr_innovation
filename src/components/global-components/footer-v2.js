import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer_v2 extends Component {

	componentDidMount() {
		const $ = window.$;

		let publicUrl = process.env.PUBLIC_URL + '/'
		const minscript = document.createElement("script");
		minscript.async = true;
		minscript.src = publicUrl + "assets/js/theme.js";

		document.body.appendChild(minscript);

		$('.go-top').find('a').on('click', function () {
			$(window).scrollTop(0);
		});
	}

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imgattr = "Footer logo"

		return (
			<div className="site-footer-two  go-top" style={{ backgroundColor: 'black' }}>
				<img src={publicUrl + "assets/images/shapes/footer-shape-2-1.png"} alt={imgattr} className="site-footer-two__shape-1" />
				<img src={publicUrl + "assets/images/shapes/footer-shape-2-2.png"} alt={imgattr} className="site-footer-two__shape-2" />
				<div className="site-footer-two__upper">
					<div className="container">
						<div className="row">
							<div className="col-xl-3 col-lg-6">
								<div className="footer-widget footer-widget__about">
									<Link to="/">
										<img src={publicUrl + "assets/images/logo-2-1.png"} alt={imgattr} style={{ width: '250px', height: '65px' }} />
									</Link>
									<p>Elevating brands through digital mastery. From captivating designs to seamless user experiences, we redefine online presence. Trust us to amplify your brand's impact in the digital world.</p>
								</div>{/* /.footer-widget footer-widget__about */}
							</div>{/* /.col-lg-3 */}
							<div className="col-xl-3 col-lg-6">
								<div className="footer-widget footer-widget__links">
									<h3 className="footer-widget__title">Get In Touch</h3>{/* /.footer-widget__title */}
									<ul className="footer-widget__links-list list-unstyled">
										<li><Link to="/about">341 S Grand Ave <br/> Los Angeles, CA 90071, USA</Link></li>
										<ul className="footer-widget__contact-list list-unstyled">
											<li>
												<i className="far fa-envelope" />
												<a href="mailto:support@gmail.com">info@flikrinnovation.com</a>
											</li>
											<li>
												<i className="far fa-phone" />
												<a href="tel:+823-654-445-64">+1 (917) 732 0181</a>
											</li>
										</ul>{/* /.footer-widget__contact-list */}
									</ul>{/* /.footer-widget__links-list */}
									<div className="footer-widget__social">
										<a target='blank' href="https://www.facebook.com/Flikrinnovation"><i className="fab fa-facebook-f" /></a>
										<a target='blank' href="/"><i className="fab fa-twitter" /></a>
										<a target='blank' href="https://www.instagram.com/flikr.innovation/"><i className="fab fa-brands fa-instagram" /></a>
										<a  href="/"><i className="fab fa-brands fa-pinterest" /></a>
									</div>{/* /.footer-widget__social */}
								</div>{/* /.footer-widget footer-widget__post */}
							</div>{/* /.col-lg-3 */}
							<div className="col-xl-3 col-lg-6">
								<div className="footer-widget footer-widget__links">
									<h3 className="footer-widget__title">Quick Links</h3>{/* /.footer-widget__title */}
									<ul className="footer-widget__links-list list-unstyled">
										<li><Link to="/about">About Us</Link></li>
										<li><Link to="/service">Our Services</Link></li>
										<li><Link to="/contact">Need a Job?</Link></li>
										{/* <li><Link to="/blog-grid">Latest Blog</Link></li> */}
										<li><Link to="/free-quote">Get a Quote</Link></li>
									</ul>{/* /.footer-widget__links-list */}
								</div>{/* /.footer-widget footer-widget__post */}
							</div>{/* /.col-lg-3 */}
							<div className="col-xl-3 col-lg-6">
								<div className="footer-widget footer-widget__contact">
									<h3 className="footer-widget__title">Newsletters</h3>{/* /.footer-widget__title */}
									<p>Subscribe our newsletters to get more
										update and many more</p>
									<form action="#" className="footer__mc-form">
										<input type="text" name="s" placeholder="Enter Your Email" />
										<button type="submit"><i className="fa fa-long-arrow-alt-right" /></button>
									</form>{/* /.footer__mc-form */}

								</div>{/* /.footer-widget footer-widget__post */}
							</div>{/* /.col-lg-3 */}
						</div>{/* /.row */}
					</div>{/* /.container */}
				</div>{/* /.site-footer-two__upper */}
				<div className="site-footer-two__bottom">

					<div className="container">
						<div className="row">
								{/* <p><Link to="/terms-and-conditions">Terms and Conditions</Link></p> */}
							<div className="col text-center">
								<p>Copy@2024 <a href="#">FlikrInnovation</a>. All Right Reserved.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}


export default Footer_v2