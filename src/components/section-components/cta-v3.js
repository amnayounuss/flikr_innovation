import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CtaV3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <section className="cta-four  go-top">
			  <div className="container">
			    <div className="block-title-two">
			      <h3>Download Our Bizkar <br /> Very Easily</h3>
			      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiuses tempor incididunt ut labore et dolore <br /> magna aliqua. Ut enimminim veniam, quis nostrud exercitation</span>
			    </div>{/* /.block-title-two */}
			    <div className="cta-four__btn-block">
			      <a href="#" className="cta-four__btn"><i className="fab fa-apple" />Apple Store</a>
			      <a href="#" className="cta-four__btn"><i className="fab fa-google-play" />Play Store</a>
			      <a href="#" className="cta-four__btn"><i className="fab fa-windows" />Windows</a>
			    </div>{/* /.cta-four__btn-block */}
			  </div>{/* /.container */}
			</section>

        }
	}

export default CtaV3