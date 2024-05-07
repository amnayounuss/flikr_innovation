import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer_v1 extends Component {

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
			<div>
				<footer className="site-footer-one">
					<div className="site-footer-one__upper">
						<div className="container">
							<img src={publicUrl + "assets/images/resources/footer-1-1.png"} alt={imgattr} className="site-footer-one__upper-moc" />
							<div className="row">
								<div className="col-lg-3">
									<div className="footer-widget footer-widget__about">
										<a href="index-2.html">
											<img src={publicUrl + "assets/images/logo-dark.png"} alt={imgattr} />
										</a>
										<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod </p>
										<form action="#" className="footer__mc-form">
											<input type="text" placeholder="Enter Your Email" />
											<button type="submit"><i className="fa fa-long-arrow-alt-right" /></button>
										</form>{/* /.footer__mc-form */}
										<div className="footer-widget__social">
											<a href="https://www.facebook.com/webtend/"><i className="fab fa-facebook-f" /></a>
											<a href="https://www.twitter.com/webtend/"><i className="fab fa-twitter" /></a>
											<a href="https://google.com/webtend"><i className="fab fa-google-plus-g" /></a>
											<a href="https://behance.com/webtend"><i className="fab fa-behance" /></a>
										</div>{/* /.footer-widget__social */}
									</div>{/* /.footer-widget */}
								</div>{/* /.col-lg-3 */}
								<div className="col-lg-4">
									<div className="footer-widget footer-widget__contact">
										<h3 className="footer-widget__title">Official Address</h3>{/* /.footer-widget__title */}
										<div className="footer-widget__contact-box">
											<div className="footer-widget__contact-top">
												<i className="far fa-map-marked" />
												<h3>Address</h3>
											</div>{/* /.footer-widget__contact-top */}
											<p>205, Khola Street Name, New York, USA</p>
										</div>{/* /.footer-widget__contact-box */}
										<div className="footer-widget__contact-box">
											<div className="footer-widget__contact-top">
												<i className="far fa-phone" />
												<h3>Phone</h3>
											</div>{/* /.footer-widget__contact-top */}
											<p><a href="tel:+82-123-456-89">+82 123 456 89</a></p>
										</div>{/* /.footer-widget__contact-box */}
									</div>{/* /.footer-widget footer-widget__contact */}
								</div>{/* /.col-lg-4 */}
							</div>{/* /.row */}
						</div>{/* /.container */}
					</div>{/* /.site-footer-one__upper */}
					<div className="site-footer-one__bottom">
						<div className="container">
							<div className="site-footer-one__bottom-line" />{/* /.site-footer-one__bottom-line */}
							<p>Copy@2022 <a href="#">Bizkar</a>. All Right Reserved.Design By LayerDrops. </p>
						</div>{/* /.container */}
					</div>{/* /.site-footer-one__bottom */}
				</footer>
			</div>


		)
	}
}


export default Footer_v1