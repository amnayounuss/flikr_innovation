import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutV6 extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'image'
		let videoealt = publicUrl + "assets/images/resources/avideo.mp4";

		return <section className="about-three about-three__about-page  go-top">
			<div className="container">
				<div className="row">
					<div className="col-xl-6">
						<div className="about-three__content">
							<div className="block-title-two text-left">
								<p>What we do</p>
								<h3>Marketing Is Our <br /> Professional Business </h3>
							</div>{/* /.block-title-two */}
							<p>Marketing is more than just a profession for us; it's our expertise and passion.
								At our digital agency, we offer a comprehensive suite of services tailored to elevate
								your brand's online presence. From captivating graphic designs to seamless web and app
								development, strategic e-book creation, SEO optimization, and impactful digital marketing
								campaigns, we are your one-stop destination for all things digital. Let us partner with
								you to unlock the full potential of your brand in the digital landscape. </p>

							<Link to="/about" className="thm-btn about-three__btn">Read More <i className="fa fa-angle-double-right" /></Link>
						
						</div>
					</div>{/* /.col-lg-6 */}
					<div className="col-xl-6 d-flex justify-content-center">
						<div className="video-one__box">
							<img src={publicUrl + "assets/images/resources/about1.png"} alt={imagealt} />
							<a href={videoealt} className="video-popup video-one__btn"><i className="fa fa-play" /></a>{/* /.video-popup video-one__btn */}
						</div>{/* /.video-one__box */}
					</div>{/* /.col-lg-6 */}
				</div>{/* /.row */}
			</div>{/* /.container */}
		</section>
	}
}

export default AboutV6