import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class PricingV4 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <section className="pricing-one pricing-one__pricing-page">
        <div className="container">
          <div className="pricing-one__block">
            <div className="block-title-two text-left">
              <p>get a quote</p>
              <h3>Don't Hesitate To Contact <br /> With Us Get A Call</h3>
            </div>
            <div className="pricing-one__btn-block">
              <ul className="list-unstyled nav nav-tabs">
                <li className="nav-item">
                  <a href="#monthly" className="nav-link active" data-toggle="tab">Monthly</a>
                </li>
                <li className="nav-item">
                  <a href="#yearly" className="nav-link " data-toggle="tab">Yearly</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-content">
            <div className="tab-pane show active  animated fadeInUp" id="monthly">
              <div className="row">
                <div className="col-lg-4">
                  <div className="pricing-one__single">
                    <div className="pricing-one__inner">
                      <img src={publicUrl+"assets/images/shapes/pricing-i-1-1.png"} alt={ imagealt } />
                      <div className="pricing-one__top">
                        <h3>Startup</h3>
                        <p><span>$</span>499.99</p>
                      </div>
                      <ul className="pricing-one__list list-unstyled">
                        <li><i className="far fa-check" />3 Page Website</li>
                        <li><i className="far fa-check" />Custom Layout Design</li>
                        <li><i className="far fa-check" />Contact / Query Form</li>
                        <li><i className="far fa-check" />1 Banner Design</li><li><i className="far fa-check" />3 Page Website</li>
                        <li><i className="far fa-check" />2 Stock Photos</li>
                        <li><i className="far fa-check" />Free Favicon Design</li>
                        <li><i className="far fa-check" />Cross Browser Compatible</li><li><i className="far fa-check" />3 Page Website</li>
                        <li><i className="far fa-check" />Complete W3C Certfed</li>
                      </ul>
                      <a href="#" className="thm-btn pricing-one__btn">Choose Plan <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn pricing-one__btn */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="pricing-one__single">
                    <div className="pricing-one__inner">
                      <span className="pricing-one__corner-ribbon">Best</span>
                      
                      <img src={publicUrl+"assets/images/shapes/pricing-i-1-2.png"} alt={ imagealt } />
                      <div className="pricing-one__top">
                        <h3>Regular</h3>
                        <p><span>$</span>99.00</p>
                      </div>
                      <ul className="pricing-one__list list-unstyled">
                        <li><i className="far fa-check" />HTML5 & CSS3</li>
                        <li><i className="far fa-check" />Bootstrap v5</li>
                        <li><i className="far fa-check" />Responsive Layout</li>
                        <li><i className="far fa-check" />Cross-browser Support</li>
                      </ul>
                      <a href="#" className="thm-btn pricing-one__btn">Choose Plan <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn pricing-one__btn */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="pricing-one__single">
                    <div className="pricing-one__inner">
                      <img src={publicUrl+"assets/images/shapes/pricing-i-1-3.png"} alt="pricing" />
                      <div className="pricing-one__top">
                        <h3>Premium</h3>
                        <p><span>$</span>149.00</p>
                      </div>
                      <ul className="pricing-one__list list-unstyled">
                      <li><i className="far fa-check" />HTML5 & CSS3</li>
                        <li><i className="far fa-check" />Bootstrap v5</li>
                        <li><i className="far fa-check" />Responsive Layout</li>
                        <li><i className="far fa-check" />Cross-browser Support</li>
                      </ul>
                      <a href="#" className="thm-btn pricing-one__btn">Choose Plan <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn pricing-one__btn */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane animated fadeInUp " id="yearly">
              <div className="row">
                <div className="col-lg-4">
                  <div className="pricing-one__single">
                    <div className="pricing-one__inner">
                      <img src={publicUrl+"assets/images/shapes/pricing-i-1-1.png"} alt={ imagealt } />
                      <div className="pricing-one__top">
                        <h3>Startup</h3>
                        <p><span>$</span>69.99</p>
                      </div>
                      <ul className="pricing-one__list list-unstyled">
                        <li><i className="far fa-check" />50GB Bandwidth</li>
                        <li><i className="far fa-check" />Business &amp; Financ Analysing</li>
                        <li><i className="far fa-check" />24 hour support</li>
                        <li><i className="far fa-check" />Customer Managemet</li>
                      </ul>
                      <a href="#" className="thm-btn pricing-one__btn">Choose Plan <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn pricing-one__btn */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="pricing-one__single">
                    <div className="pricing-one__inner">
                      <span className="pricing-one__corner-ribbon">Best</span>
                      
                      <img src={publicUrl+"assets/images/shapes/pricing-i-1-2.png"} alt={ imagealt } />
                      <div className="pricing-one__top">
                        <h3>Regular</h3>
                        <p><span>$</span>79.99</p>
                      </div>
                      <ul className="pricing-one__list list-unstyled">
                        <li><i className="far fa-check" />50GB Bandwidth</li>
                        <li><i className="far fa-check" />Business &amp; Financ Analysing</li>
                        <li><i className="far fa-check" />24 hour support</li>
                        <li><i className="far fa-check" />Customer Managemet</li>
                      </ul>
                      <a href="#" className="thm-btn pricing-one__btn">Choose Plan <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn pricing-one__btn */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="pricing-one__single">
                    <div className="pricing-one__inner">
                      <img src={publicUrl+"assets/images/shapes/pricing-i-1-3.png"} alt={ imagealt } />
                      <div className="pricing-one__top">
                        <h3>Premium</h3>
                        <p><span>$</span>99.99</p>
                      </div>
                      <ul className="pricing-one__list list-unstyled">
                        <li><i className="far fa-check" />50GB Bandwidth</li>
                        <li><i className="far fa-check" />Business &amp; Financ Analysing</li>
                        <li><i className="far fa-check" />24 hour support</li>
                        <li><i className="far fa-check" />Customer Managemet</li>
                      </ul>
                      <a href="#" className="thm-btn pricing-one__btn">Choose Plan <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn pricing-one__btn */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        }
}

export default PricingV4