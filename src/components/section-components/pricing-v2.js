import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class PricingV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <section className="pricing-one pricing-one__home-three">
            <div className="container">
              <div className="block-title-two text-center">
                <h3>We Offer Awesome <br /> Pricing Plan</h3>
              </div>{/* /.block-title-two */}
              <div className="row">
                <div className="col-lg-4">
                  <div className="pricing-one__single">
                    <div className="pricing-one__inner">
                      <img src={publicUrl+"assets/images/shapes/pricing-i-1-1.png"} alt={ imagealt } />
                      <div className="pricing-one__top">
                        <h3>Startup</h3>
                        <p><span>$</span>24.99</p>
                      </div>{/* /.pricing-one__top */}
                      <ul className="pricing-one__list list-unstyled">
                        <li><i className="far fa-check" />50GB Bandwidth</li>
                        <li><i className="far fa-check" />Business &amp; Financ Analysing</li>
                        <li><i className="far fa-check" />24 hour support</li>
                        <li><i className="far fa-check" />Customer Managemet</li>
                      </ul>{/* /.pricing-one__list list-unstyled */}
                      <a href="#" className="thm-btn pricing-one__btn">Choose Plan <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn pricing-one__btn */}
                    </div>{/* /.pricing-one__inner */}
                  </div>{/* /.pricing-one__single */}
                </div>{/* /.col-lg-4 */}
                <div className="col-lg-4">
                  <div className="pricing-one__single">
                    <div className="pricing-one__inner">
                      <span className="pricing-one__corner-ribbon">Best</span>
                      {/* /.pricing-one__corner-ribbon */}
                      <img src={publicUrl+"assets/images/shapes/pricing-i-1-2.png"} alt={ imagealt } />
                      <div className="pricing-one__top">
                        <h3>Regular</h3>
                        <p><span>$</span>45.99</p>
                      </div>{/* /.pricing-one__top */}
                      <ul className="pricing-one__list list-unstyled">
                        <li><i className="far fa-check" />50GB Bandwidth</li>
                        <li><i className="far fa-check" />Business &amp; Financ Analysing</li>
                        <li><i className="far fa-check" />24 hour support</li>
                        <li><i className="far fa-check" />Customer Managemet</li>
                      </ul>{/* /.pricing-one__list list-unstyled */}
                      <a href="#" className="thm-btn pricing-one__btn">Choose Plan <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn pricing-one__btn */}
                    </div>{/* /.pricing-one__inner */}
                  </div>{/* /.pricing-one__single */}
                </div>{/* /.col-lg-4 */}
                <div className="col-lg-4">
                  <div className="pricing-one__single">
                    <div className="pricing-one__inner">
                      <img src={publicUrl+"assets/images/shapes/pricing-i-1-3.png"} alt={ imagealt } />
                      <div className="pricing-one__top">
                        <h3>Premium</h3>
                        <p><span>$</span>89.99</p>
                      </div>{/* /.pricing-one__top */}
                      <ul className="pricing-one__list list-unstyled">
                        <li><i className="far fa-check" />50GB Bandwidth</li>
                        <li><i className="far fa-check" />Business &amp; Financ Analysing</li>
                        <li><i className="far fa-check" />24 hour support</li>
                        <li><i className="far fa-check" />Customer Managemet</li>
                      </ul>{/* /.pricing-one__list list-unstyled */}
                      <a href="#" className="thm-btn pricing-one__btn">Choose Plan <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn pricing-one__btn */}
                    </div>{/* /.pricing-one__inner */}
                  </div>{/* /.pricing-one__single */}
                </div>{/* /.col-lg-4 */}
              </div>{/* /.row */}
            </div>{/* /.container */}
          </section>

        }
}

export default PricingV2