import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Service extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return	<section className="service-two" style={{backgroundImage: 'url('+publicUrl+'assets/images/shapes/dotted-patter-1.png)'}}>
		  <div className="container  go-top">
		    <div className="row">
		      <div className="col-lg-5 d-flex">
		        <div className="my-auto">
		          <div className="service-two__block">
		            <div className="block-title-two text-left">
		              <p>Our Services</p>
		              <h3>We Provide Best <br />
		                Services For Your <br />
		                Business</h3>
		            </div>{/* /.block-title-two */}
		            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
		              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
		              laboris nisi ut aliquip ex ea commodo consequat. </p>
		            <Link to="/service" className="thm-btn">View All Services <i className="fa fa-angle-double-right" /></Link>
		            {/* /.thm-btn */}
		          </div>{/* /.service-two__block */}
		        </div>{/* /.my-auto */}
		      </div>{/* /.col-lg-5 */}
		      <div className="col-lg-7">
		        <div className="service-two__box-wrap">
		          <div className="row">
		            <div className="col-md-6">
		              <div className="service-two__single js-tilt">
		                <div className="service-two__single-image" style={{backgroundImage: 'url(assets/images/backgrounds/service-bg-1-1.jpg)'}} />
		                {/* /.service-two__single-image */}
		                <div className="service-two__single-inner">
		                  <i className="fal fa-hand-holding-usd" />
		                  <h3><a to="/service-details">Finance &amp; Insurance</a></h3>
		                  <p>Lorem ipsum dolor sit amet conse
		                    ctetur adipisicing elit sed do eiusmod tempor incididunt ut labore et</p>
		                  <Link to="/service-details" className="service-two__link"><i className="fa fa-long-arrow-alt-right" /></Link>
		                  {/* /.service-two__link */}
		                </div>{/* /.service-two__single-inner */}
		              </div>{/* /.service-two__single */}
		            </div>{/* /.col-md-6 */}
		            <div className="col-md-6">
		              <div className="service-two__single js-tilt">
		                <div className="service-two__single-image" style={{backgroundImage: 'url(assets/images/backgrounds/service-bg-1-1.jpg)'}} />
		                {/* /.service-two__single-image */}
		                <div className="service-two__single-inner">
		                  <i className="fal fa-umbrella-beach" />
		                  <h3><a to="/service-details">Investment Planning</a></h3>
		                  <p>Lorem ipsum dolor sit amet conse
		                    ctetur adipisicing elit sed do eiusmod tempor incididunt ut labore et</p>
		                  <Link to="/service-details" className="service-two__link"><i className="fa fa-long-arrow-alt-right" /></Link>
		                  {/* /.service-two__link */}
		                </div>{/* /.service-two__single-inner */}
		              </div>{/* /.service-two__single */}
		            </div>{/* /.col-md-6 */}
		            <div className="col-md-6">
		              <div className="service-two__single js-tilt">
		                <div className="service-two__single-image" style={{backgroundImage: 'url(assets/images/backgrounds/service-bg-1-1.jpg)'}} />
		                {/* /.service-two__single-image */}
		                <div className="service-two__single-inner">
		                  <i className="fal fa-paper-plane" />
		                  <h3><a to="/service-details">Market Positioning</a></h3>
		                  <p>Lorem ipsum dolor sit amet conse
		                    ctetur adipisicing elit sed do eiusmod tempor incididunt ut labore et</p>
		                  <a to="/service-details" className="service-two__link"><i className="fa fa-long-arrow-alt-right" /></a>
		                  {/* /.service-two__link */}
		                </div>{/* /.service-two__single-inner */}
		              </div>{/* /.service-two__single */}
		            </div>{/* /.col-md-6 */}
		            <div className="col-md-6">
		              <div className="service-two__single js-tilt">
		                <div className="service-two__single-image" style={{backgroundImage: 'url(assets/images/backgrounds/service-bg-1-1.jpg)'}} />
		                {/* /.service-two__single-image */}
		                <div className="service-two__single-inner">
		                  <i className="fal fa-chart-network" />
		                  <h3><a to="/service-details">Business Consulting</a></h3>
		                  <p>Lorem ipsum dolor sit amet conse
		                    ctetur adipisicing elit sed do eiusmod tempor incididunt ut labore et</p>
		                  <Link to="/service-details" className="service-two__link"><i className="fa fa-long-arrow-alt-right" /></Link>
		                  {/* /.service-two__link */}
		                </div>{/* /.service-two__single-inner */}
		              </div>{/* /.service-two__single */}
		            </div>{/* /.col-md-6 */}
		          </div>{/* /.row */}
		        </div>{/* /.service-two__box-wrap */}
		      </div>{/* /.col-lg-7 */}
		    </div>{/* /.row */}
		  </div>{/* /.container */}
		</section>

        }
}

export default Service