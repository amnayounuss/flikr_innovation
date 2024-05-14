import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarV2 extends Component {

	render() {
		let publicUrl = process.env.PUBLIC_URL + '/'
		let imgattr = 'logo'
		let anchor = '#'
		return (
			<header className="site-header-two site-header-two__ go-top  go-top " style={{ backgroundColor: 'black' }}>
				<nav className="main-nav__two stricky" style={{ backgroundColor: 'black' }}>
					<div className="container">
						<div className="main-nav__logo-box">
							<Link to="/">
								<img src={publicUrl + "assets/images/logo-2-1.png"} alt={imgattr} style={{ width: '250px', height: '65px' }} />
							</Link>
						</div>{/* /.main-nav__logo-box */}
						<div className="main-nav__main-navigation">
							<ul className=" main-nav__navigation-box">
								<li >
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/about">About</Link>
								</li>
								<li>
									<Link to="/service">Services </Link>
								</li>
								
								<li>
									<Link to="/portfolio-standard">Work</Link>
									
								</li>
								
								<li className="dropdown">
									<a href="#">Pages</a>
									<ul>
										<li><Link to="/pricing">Pricing</Link></li>
										<li><Link to="/free-quote">Free Quote</Link></li>
										<li><Link to="/testimonial">Testimonials</Link></li>
									</ul>
								</li>
								
								<li>
									<Link to="/contact">Contact</Link>
								</li>
							</ul>
						</div>
						<div className="main-nav__right">
							<a href="#" className="side-menu__toggler"><span /></a>
						</div>{/* /.main-nav__right */}
					</div>{/* /.container */}
				</nav>{/* /.main-nav__one */}
			</header>



		)
	}
}


export default NavbarV2