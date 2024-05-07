import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ServiceV5 extends Component {

    render() {

    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'

    return	<section className="service-two service-two__service-page  go-top">
		  <div className="container">
		    <div className="row">
		        <div className="service-two__block">
		          <div className="block-title-two text-left">
		            <p>Our Services</p>
		            <h3>We Offer Exclusive <br /> Service For You</h3>
		          </div>
		          
		      </div>
		      
		    </div>{/* /.row */}

			<div className='row'>
			<div className="service-two__box-wrap">
		          <div className="row">
		            <div className="col-md-6">
		              <div className="service-two__single js-tilt">
		                <div className="service-two__single-image" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/service-bg-1-1.jpg)'}} />
		                <div className="service-two__single-inner">
		                  <i className="fal fa-hand-holding-usd" />
		                  <h3><Link to="/service-details">Finance &amp; Insurance</Link></h3>
		                  <p>Lorem ipsum dolor sit amet conse
		                    ctetur adipisicing elit sed do eiusmod tempor incididunt ut labore et</p>
		                  <Link to="/service-details" className="service-two__link"><i className="fa fa-long-arrow-alt-right" /></Link>
		                </div>
		              </div>
		            </div>
		            <div className="col-md-6">
		              <div className="service-two__single js-tilt">
		                <div className="service-two__single-image" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/service-bg-1-1.jpg)'}} />
		                {/* /.service-two__single-image */}
		                <div className="service-two__single-inner">
		                  <i className="fal fa-umbrella-beach" />
		                  <h3><Link to="/service-details">Investment Planning</Link></h3>
		                  <p>Lorem ipsum dolor sit amet conse
		                    ctetur adipisicing elit sed do eiusmod tempor incididunt ut labore et</p>
		                  <Link to="/service-details" className="service-two__link"><i className="fa fa-long-arrow-alt-right" /></Link>
		                  {/* /.service-two__link */}
		                </div>{/* /.service-two__single-inner */}
		              </div>{/* /.service-two__single */}
		            </div>{/* /.col-md-6 */}
					
		            <div className="col-md-6">
		              <div className="service-two__single js-tilt">
		                <div className="service-two__single-image" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/service-bg-1-1.jpg)'}} />
		                {/* /.service-two__single-image */}
		                <div className="service-two__single-inner">
		                  <i className="fal fa-paper-plane" />
		                  <h3><Link to="/service-details">Market Positioning</Link></h3>
		                  <p>Lorem ipsum dolor sit amet conse
		                    ctetur adipisicing elit sed do eiusmod tempor incididunt ut labore et</p>
		                  <Link to="/service-details" className="service-two__link"><i className="fa fa-long-arrow-alt-right" /></Link>
		                  {/* /.service-two__link */}
		                </div>{/* /.service-two__single-inner */}
		              </div>{/* /.service-two__single */}
		            </div>{/* /.col-md-6 */}
		            <div className="col-md-6">
		              <div className="service-two__single js-tilt">
		                <div className="service-two__single-image" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/service-bg-1-1.jpg)'}} />
		                {/* /.service-two__single-image */}
		                <div className="service-two__single-inner">
		                  <i className="fal fa-chart-network" />
		                  <h3><Link to="/service-details">Business Consulting</Link></h3>
		                  <p>Lorem ipsum dolor sit amet conse
		                    ctetur adipisicing elit sed do eiusmod tempor incididunt ut labore et</p>
		                  <Link to="/service-details" className="service-two__link"><i className="fa fa-long-arrow-alt-right" /></Link>
		                  {/* /.service-two__link */}
		                </div>{/* /.service-two__single-inner */}
		              </div>{/* /.service-two__single */}
		            </div>{/* /.col-md-6 */}
					
					
					
		          </div>{/* /.row */}




		        </div>{/* /.service-two__box-wrap */}
			</div>



		  </div>{/* /.container */}
		</section>

        }
}

export default ServiceV5