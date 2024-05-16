import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutPage extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'image'

		return <section className="service-two service-two__service-page service-two__about-page  go-top">
			<div className="container" style={{marginTop: "-40px"}}>
				<div className="row">
					<div className="col-lg-6">
						<div className="service-two__image">
							<img src={publicUrl + "assets/images/resources/about-page-moc-1.jpg"} alt={imagealt} style={{ width: '650px', height: '500px' }} />
						</div>{/* /.service-two__image */}
					</div>{/* /.col-lg-6 */}
					<div className="col-lg-6">
						<div className="service-two__block">
							<div className="block-title-two text-left">
								<p>about us</p>
								<h3>Exclusive Agency To <br /> Provide Solution</h3>
							</div>{/* /.block-title-two */}
							<p>Utilizing a blend of creative ingenuity and strategic acumen,
								we transform your brand's vision into reality. Our collaborative
								methodology, demonstrated proficiency, and user-centric designs
								guarantee prominence in the digital sphere. Partner with us to redefine
								your online presence and engage your audience effectively. </p>
							<ul className="list-unstyled video-one__list">
								<li>
									<i className="far fa-check" />
									Creative prowess and strategic vision realize your brand's potential.
								</li>
								<li>
									<i className="far fa-check" />
									Collaborative excellence ensures standout performance in digital realms.
								</li>
								<li>
									<i className="far fa-check" />
									Redefine presence with user-centric designs, captivating audiences.
								</li>
								<li>
									<i className="far fa-check" />
									Access 24/7 customer service for reliable support.
								</li>
							</ul>{/* /.list-unstyled video-one__list */}
							<Link to="/service" className="thm-btn">Read More <i className="fa fa-angle-double-right" /></Link>
							{/* /.thm-btn */}
						</div>{/* /.service-two__block */}
					</div>{/* /.col-lg-5 */}
				</div>{/* /.row */}
			</div>{/* /.container */}
		</section>



	}
}

export default AboutPage