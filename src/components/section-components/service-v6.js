import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ServiceV6 extends Component {

    render() {

    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'

    return	<section className="service-two service-two__service-page  go-top">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-5">
			        <div className="service-two__block">
			          <div className="block-title-two text-left">
			            <p>Our Services</p>
			            <h3>We Offer Exclusive <br /> Service For You</h3>
			          </div>{/* /.block-title-two */}
			          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiumod temor incididunt ut labore et
			            dolore magna aliqua. Ut enim ad veniam quis nostrud exercitation ullamco laboris nisi </p>
			          <ul className="list-unstyled video-one__list">
			            <li>
			              <i className="far fa-check" />
			              Smashing Book 6 Is Here New Frontiers In Web Design
			            </li>
			            <li>
			              <i className="far fa-check" />
			              Introduction To Animation And The iMessage App Store With Shruggie
			            </li>
			            <li>
			              <i className="far fa-check" />
			              Get Your Mobile Site Ready For The 2018 Holiday ways goods
			            </li>
			            <li>
			              <i className="far fa-check" />
			              Making Distributed Product Teams Work More Efficiently other
			            </li>
			          </ul>{/* /.list-unstyled video-one__list */}
			          <Link to="/service" className="thm-btn">View More <i className="fa fa-angle-double-right" /></Link>
			          {/* /.thm-btn */}
			        </div>{/* /.service-two__block */}
			      </div>{/* /.col-lg-5 */}
			      <div className="col-lg-7 d-flex justify-content-center">
			        <div className="faq-two__image">
			          <img src={publicUrl+"assets/images/resources/faq-2-image.png"} alt="imagealt" />
			        </div>{/* /.faq-two__image */}
			      </div>{/* /.col-lg-6 */}
			    </div>{/* /.row */}
			  </div>{/* /.container */}
			</section>


        }
}

export default ServiceV6