import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ServiceV7 extends Component {

    render() {

    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'

    return	<section className="service-eight  go-top">
			  <div className="container">
			    <div className="block-title-two text-center">
			      <p>our services</p>
			      <h3>We Provide Creative <br /> Soluation For You</h3>
			    </div>{/* /.block-title-two */}
			    <div className="service-eight__single">
			      <div className="service-eight__icon">
			        <i className="fal fa-hand-holding-usd" />
			      </div>{/* /.service-eight__icon */}
			      <div className="service-eight__content">
			        <h3><Link to="/service">Finance &amp; Insurance</Link></h3>
			        <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit sed do eiusmod tempor incididunt ut labore
			          et</p>
			      </div>{/* /.service-eight__content */}
			      <div className="service-eight__btn-block">
			        <Link to="/service" className="thm-btn service-eight__btn">Read More <i className="fa fa-angle-double-right" /></Link>
			      </div>{/* /.service-eight__btn-block */}
			    </div>{/* /.service-eight__single */}
			    <div className="service-eight__single">
			      <div className="service-eight__icon">
			        <i className="fal fa-paper-plane" />
			      </div>{/* /.service-eight__icon */}
			      <div className="service-eight__content">
			        <h3><Link to="/service">Market Positioning</Link></h3>
			        <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit sed do eiusmod tempor incididunt ut labore
			          et</p>
			      </div>{/* /.service-eight__content */}
			      <div className="service-eight__btn-block">
			        <Link to="/service" className="thm-btn service-eight__btn">Read More <i className="fa fa-angle-double-right" /></Link>
			      </div>{/* /.service-eight__btn-block */}
			    </div>{/* /.service-eight__single */}
			    <div className="service-eight__single">
			      <div className="service-eight__icon">
			        <i className="fal fa-chart-network" />
			      </div>{/* /.service-eight__icon */}
			      <div className="service-eight__content">
			        <h3><a href="#">Business Consulting</a></h3>
			        <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit sed do eiusmod tempor incididunt ut labore
			          et</p>
			      </div>{/* /.service-eight__content */}
			      <div className="service-eight__btn-block">
			        <a href="#" className="thm-btn service-eight__btn">Read More <i className="fa fa-angle-double-right" /></a>
			      </div>{/* /.service-eight__btn-block */}
			    </div>{/* /.service-eight__single */}
			  </div>{/* /.container */}
			</section>

        }
}

export default ServiceV7