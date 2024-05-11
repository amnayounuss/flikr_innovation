import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	
    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'logo'
        let anchor = '#'
        return (
           <header className="site-header-one go-top">
			  <nav className="main-nav__one stricky">
			    <div className="container-fluid">
			      <div className="main-nav__logo-box">
			        <Link to="/">
			          <img src={publicUrl+"assets/images/logo-2-1.png" } alt={ imgattr } style={{ width: '250px', height: '65px'}} />
			        </Link>
			        <a href="#" className="side-menu__toggler"><i className="fa fa-bars" /></a>
			      </div>{/* /.main-nav__logo-box */}
			      <div className="main-nav__main-navigation">
			        <ul className=" main-nav__navigation-box">
			          <li>
			            <Link to="/">Home</Link>
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
			              <li><Link to="/free-quote">Free Quote</Link></li>
			              <li><Link to="/testimonial">Testimonials</Link></li>
			              {/* <li><Link to="/team">Team</Link></li> */}
			            </ul>{/* /.sub-menu */}
			          </li>
			          {/* <li>
			            <Link to="/blog-grid">News</Link>
			          </li> */}
			          <li>
			            <Link to="/contact">Contact</Link>
			          </li>
			        </ul>
			      </div>{/* /.main-nav__main-navigation */}
			      <div className="main-nav__right">
			        <Link to="/free-quote" className="thm-btn">Get Free Quote<i className="fa fa-angle-right" /></Link>
			        {/* /.thm-btn */}
			      </div>{/* /.main-nav__right */}
			    </div>
			  </nav>
			</header>
        )
    }
}


export default Navbar