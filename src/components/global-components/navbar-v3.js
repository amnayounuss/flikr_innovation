import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarV3 extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'logo'
        let anchor = '#'
        return (
           <div>
			  <header className="site-header-two site-header-two__home-three go-top">
			    <nav className="main-nav__two stricky">
			      <div className="container">
			        <div className="main-nav__logo-box">
			          <Link to="/">
			            <img src={publicUrl+"assets/images/logo-full-light.png"} alt={ imgattr } />
			          </Link>
			        </div>{/* /.main-nav__logo-box */}
			        <div className="main-nav__main-navigation">
			          <ul className=" main-nav__navigation-box">
			            <li className="dropdown">
			              <Link to="/">Home</Link>
				            <ul>
				                <li><Link to="/home-v2">Home 02</Link></li>
					            <li><Link to="/home-v3">Home 03</Link></li>
					            <li><Link to="/home-v4">Home 04</Link></li>
			              </ul>{/* /.sub-menu */}
			            </li>
			            <li>
			              <Link to="/about">About</Link>
			            </li>
			            <li className="dropdown">
			            <a href="#">Services</a>
				            <ul>
				              <li><Link to="/service">Services 01</Link></li>
				              <li><Link to="/service-v2">Services 02</Link></li>
				              <li><Link to="/service-details">Services Details</Link></li>
				            </ul>{/* /.sub-menu */}
			          	</li>
			            <li className="dropdown">
				            <a href="#">Work</a>
				            <ul>
				              <li><Link to="/portfolio-standard">Portfolio Standard</Link></li>
				              <li><Link to="/portfolio-full">Portfolio Full</Link></li>
				              <li><Link to="/portfolio-masonary">Portfolio Masonary</Link></li>
				              <li><Link to="/portfolio-details">Portfolio Details</Link></li>
				            </ul>{/* /.sub-menu */}
				          </li>
			            <li className="dropdown">
				            <a href="#">Pages</a>
				            <ul>
				              <li><Link to="/pricing">Pricing</Link></li>
				              <li><Link to="/faq">FAQ</Link></li>
				              <li><Link to="/testimonial">Testimonials</Link></li>
				              <li><Link to="/team">Team</Link></li>
				            </ul>{/* /.sub-menu */}
				          </li>
				            <li className="dropdown">
				            <Link to="/blog-standard">News</Link>
				            <ul>
				              <li><Link to="/blog-grid">News Page</Link></li>
				              <li><Link to="/blog-list">News List</Link></li>
				              <li><Link to="/blog-details">News Details</Link></li>
				            </ul>{/* /.sub-menu */}
				          </li>
			            <li>
			               <Link to="/contact">Contact</Link>
			             </li>
			          </ul>
			        </div>{/* /.main-nav__main-navigation */}
			        <div className="main-nav__right">
			          <a href="#" className="side-menu__toggler"><span /></a>
			        </div>{/* /.main-nav__right */}
			      </div>{/* /.container */}
			    </nav>{/* /.main-nav__one */}
			  </header>
			</div>

        )
    }
}


export default NavbarV3