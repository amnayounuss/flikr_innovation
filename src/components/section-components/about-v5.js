import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutV5 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="about-five  go-top">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-6">
			        <div className="about-five__content">
			          <div className="block-title-two text-left">
			            <h3>Ultimate Core Features <br /> For Your Web App</h3>
			          </div>{/* /.block-title-two */}
			          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tem <br /> or incididunt ut labore et dolore magna aliqua. </p>
			          <ul className="about-five__list list-unstyled">
			            <li>
			              <i className="far fa-check" />
			              But we must be sit amet consectetur adipisicing elit sed do eiusmod te
			            </li>
			            <li>
			              <i className="far fa-check" />
			              Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod was tempor
			            </li>
			            <li>
			              <i className="far fa-check" />
			              Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et
			            </li>
			            <li>
			              <i className="far fa-check" />
			              Once the must be sit amet consectetur adipisicing elit sed do eiusmod ways
			            </li>
			            <li>
			              <i className="far fa-check" />
			              But we must be sit amet consectetur adipisicing elit sed do eius other system
			            </li>
			          </ul>{/* /.about-five__list list-unstyled */}
			          <Link to="/service" className="thm-btn about-five__btn">Get Started <i className="fa fa-angle-double-right" /></Link>{/* /.thm-btn about-five__btn */}
			        </div>{/* /.about-five__content */}
			      </div>{/* /.col-lg-6 */}
			      <div className="col-lg-6">
			        <div className="about-five__image">
			          <img src={publicUrl+"assets/images/resources/about-5-1.png"} alt={ imagealt } />
			        </div>{/* /.about-five__image */}
			      </div>{/* /.col-lg-6 */}
			    </div>{/* /.row */}
			  </div>{/* /.container */}
			</section>

        }
}

export default AboutV5