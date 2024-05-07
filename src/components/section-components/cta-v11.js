import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CtaV11 extends Component {

    render() {


    return <section className="cta-one cta-one__portfolio-page  go-top">
              <div className="container">
                <div className="inner-container">
                  <div className="cta-one__left">
                    <h3>Get Ready To Work</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
                  </div>{/* /.cta-one__left */}
                  <div className="cta-one__right">
                    <a href="#" className="thm-btn cta-one__btn">Read More <i className="fa fa-angle-double-right" /></a>
                  </div>
                </div>
              </div>
            </section>
        }
	}

export default CtaV11