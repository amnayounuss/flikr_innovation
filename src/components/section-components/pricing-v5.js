import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class PricingV5 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <div>
        <section className="pricing-three__top">
          <div className="container">
            <div className="pricing-one__block">
              <div className="block-title-two text-left">
                <p>get a quote</p>
                <h3>We Offer Awesome <br /> Pricing Plan</h3>
              </div>{/* /.block-title-two */}
              <div className="pricing-one__btn-block">
                <ul className="list-unstyled nav nav-tabs">
                  <li className="nav-item">
                    <a href="#monthly2" className="nav-link active" data-toggle="tab">Monthly</a>
                  </li>{/* /.nav-item */}
                  <li className="nav-item">
                    <a href="#yearly2" className="nav-link " data-toggle="tab">Yearly</a>
                  </li>{/* /.nav-item */}
                </ul>{/* /.list-unstyled nav nav-tabs */}
              </div>{/* /.pricing-one__btn-block */}
            </div>{/* /.pricing-one__block */}
          </div>{/* /.container */}
        </section>{/* /.pricing-three__top */}
        <section className="pricing-three">
          <img src={publicUrl+"assets/images/shapes/pricing-shape-2-3.png" }className="pricing-three__moc-1" alt={ imagealt } />
          <img src={publicUrl+"assets/images/shapes/pricing-shape-2-4.png"} className="pricing-three__moc-2" alt={ imagealt } />
          <div className="container">
            <div className="inner-container">
              <div className="tab-content">
                <div className="tab-pane show active  animated fadeInUp" id="monthly2">
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="pricing-three__single">
                        <div className="pricing-three__single-inner">
                          <div className="pricing-three__left">
                            <img src={publicUrl+"assets/images/shapes/pricing-i-3-1.png"} className="pricing-three__icon" alt="" />
                            <h3>Startup</h3>
                            <p><span>$</span>24.99</p>
                          </div>{/* /.pricing-three__left */}
                          <div className="pricing-three__right">
                            <ul className="pricing-one__list list-unstyled">
                              <li><i className="far fa-check" />50GB Bandwidth</li>
                              <li><i className="far fa-check" />Business &amp; Financ Analysing</li>
                              <li><i className="far fa-check" />24 hour support</li>
                              <li><i className="far fa-check" />Customer Managemet</li>
                            </ul>{/* /.pricing-one__list list-unstyled */}
                          </div>{/* /.pricing-three__right */}
                        </div>{/* /.pricing-three__single-inner */}
                        <a href="#" className="thm-btn pricing-one__btn">Choose Plan <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn pricing-one__btn */}
                      </div>{/* /.pricing-three__single */}
                    </div>{/* /.col-lg-6 */}
                    <div className="col-xl-6">
                      <div className="pricing-three__single">
                        <div className="pricing-three__single-inner">
                          <span className="pricing-one__corner-ribbon">Best</span>
                          <div className="pricing-three__left">
                            <img src={publicUrl+"assets/images/shapes/pricing-i-3-2.png"} className="pricing-three__icon" alt="" />
                            <h3>Regular</h3>
                            <p><span>$</span>44.99</p>
                          </div>{/* /.pricing-three__left */}
                          <div className="pricing-three__right">
                            <ul className="pricing-one__list list-unstyled">
                              <li><i className="far fa-check" />50GB Bandwidth</li>
                              <li><i className="far fa-check" />Business &amp; Financ Analysing</li>
                              <li><i className="far fa-check" />24 hour support</li>
                              <li><i className="far fa-check" />Customer Managemet</li>
                            </ul>{/* /.pricing-one__list list-unstyled */}
                          </div>{/* /.pricing-three__right */}
                        </div>{/* /.pricing-three__single-inner */}
                        <a href="#" className="thm-btn pricing-one__btn">Choose Plan <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn pricing-one__btn */}
                      </div>{/* /.pricing-three__single */}
                    </div>{/* /.col-lg-6 */}
                    <div className="col-xl-6">
                      <div className="pricing-three__single">
                        <div className="pricing-three__single-inner">
                          <div className="pricing-three__left">
                            <img src={publicUrl+"assets/images/shapes/pricing-i-3-3.png"} className="pricing-three__icon" alt="" />
                            <h3>Diamond</h3>
                            <p><span>$</span>64.99</p>
                          </div>{/* /.pricing-three__left */}
                          <div className="pricing-three__right">
                            <ul className="pricing-one__list list-unstyled">
                              <li><i className="far fa-check" />50GB Bandwidth</li>
                              <li><i className="far fa-check" />Business &amp; Financ Analysing</li>
                              <li><i className="far fa-check" />24 hour support</li>
                              <li><i className="far fa-check" />Customer Managemet</li>
                            </ul>{/* /.pricing-one__list list-unstyled */}
                          </div>{/* /.pricing-three__right */}
                        </div>{/* /.pricing-three__single-inner */}
                        <a href="#" className="thm-btn pricing-one__btn">Choose Plan <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn pricing-one__btn */}
                      </div>{/* /.pricing-three__single */}
                    </div>{/* /.col-lg-6 */}
                    <div className="col-xl-6">
                      <div className="pricing-three__single">
                        <div className="pricing-three__single-inner">
                          <div className="pricing-three__left">
                            <img src={publicUrl+"assets/images/shapes/pricing-i-3-4.png"} className="pricing-three__icon" alt="" />
                            <h3>Premium</h3>
                            <p><span>$</span>99.99</p>
                          </div>{/* /.pricing-three__left */}
                          <div className="pricing-three__right">
                            <ul className="pricing-one__list list-unstyled">
                              <li><i className="far fa-check" />50GB Bandwidth</li>
                              <li><i className="far fa-check" />Business &amp; Financ Analysing</li>
                              <li><i className="far fa-check" />24 hour support</li>
                              <li><i className="far fa-check" />Customer Managemet</li>
                            </ul>{/* /.pricing-one__list list-unstyled */}
                          </div>{/* /.pricing-three__right */}
                        </div>{/* /.pricing-three__single-inner */}
                        <a href="#" className="thm-btn pricing-one__btn">Choose Plan <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn pricing-one__btn */}
                      </div>{/* /.pricing-three__single */}
                    </div>{/* /.col-lg-6 */}
                  </div>{/* /.row */}
                </div>{/* /.tab-pane fade in active */}
                <div className="tab-pane animated fadeInUp " id="yearly2">
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="pricing-three__single">
                        <div className="pricing-three__single-inner">
                          <div className="pricing-three__left">
                            <img src={publicUrl+"assets/images/shapes/pricing-i-3-1.png"} className="pricing-three__icon" alt="" />
                            <h3>Startup</h3>
                            <p><span>$</span>24.99</p>
                          </div>{/* /.pricing-three__left */}
                          <div className="pricing-three__right">
                            <ul className="pricing-one__list list-unstyled">
                              <li><i className="far fa-check" />50GB Bandwidth</li>
                              <li><i className="far fa-check" />Business &amp; Financ Analysing</li>
                              <li><i className="far fa-check" />24 hour support</li>
                              <li><i className="far fa-check" />Customer Managemet</li>
                            </ul>{/* /.pricing-one__list list-unstyled */}
                          </div>{/* /.pricing-three__right */}
                        </div>{/* /.pricing-three__single-inner */}
                        <a href="#" className="thm-btn pricing-one__btn">Choose Plan <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn pricing-one__btn */}
                      </div>{/* /.pricing-three__single */}
                    </div>{/* /.col-lg-6 */}
                    <div className="col-xl-6">
                      <div className="pricing-three__single">
                        <div className="pricing-three__single-inner">
                          <span className="pricing-one__corner-ribbon">Best</span>
                          <div className="pricing-three__left">
                            <img src={publicUrl+"assets/images/shapes/pricing-i-3-2.png"} className="pricing-three__icon" alt="" />
                            <h3>Regular</h3>
                            <p><span>$</span>44.99</p>
                          </div>{/* /.pricing-three__left */}
                          <div className="pricing-three__right">
                            <ul className="pricing-one__list list-unstyled">
                              <li><i className="far fa-check" />50GB Bandwidth</li>
                              <li><i className="far fa-check" />Business &amp; Financ Analysing</li>
                              <li><i className="far fa-check" />24 hour support</li>
                              <li><i className="far fa-check" />Customer Managemet</li>
                            </ul>{/* /.pricing-one__list list-unstyled */}
                          </div>{/* /.pricing-three__right */}
                        </div>{/* /.pricing-three__single-inner */}
                        <a href="#" className="thm-btn pricing-one__btn">Choose Plan <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn pricing-one__btn */}
                      </div>{/* /.pricing-three__single */}
                    </div>{/* /.col-lg-6 */}
                    <div className="col-xl-6">
                      <div className="pricing-three__single">
                        <div className="pricing-three__single-inner">
                          <div className="pricing-three__left">
                            <img src={publicUrl+"assets/images/shapes/pricing-i-3-3.png"} className="pricing-three__icon" alt="" />
                            <h3>Diamond</h3>
                            <p><span>$</span>64.99</p>
                          </div>{/* /.pricing-three__left */}
                          <div className="pricing-three__right">
                            <ul className="pricing-one__list list-unstyled">
                              <li><i className="far fa-check" />50GB Bandwidth</li>
                              <li><i className="far fa-check" />Business &amp; Financ Analysing</li>
                              <li><i className="far fa-check" />24 hour support</li>
                              <li><i className="far fa-check" />Customer Managemet</li>
                            </ul>{/* /.pricing-one__list list-unstyled */}
                          </div>{/* /.pricing-three__right */}
                        </div>{/* /.pricing-three__single-inner */}
                        <a href="#" className="thm-btn pricing-one__btn">Choose Plan <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn pricing-one__btn */}
                      </div>{/* /.pricing-three__single */}
                    </div>{/* /.col-lg-6 */}
                    <div className="col-xl-6">
                      <div className="pricing-three__single">
                        <div className="pricing-three__single-inner">
                          <div className="pricing-three__left">
                            <img src={publicUrl+"assets/images/shapes/pricing-i-3-4.png"} className="pricing-three__icon" alt="" />
                            <h3>Premium</h3>
                            <p><span>$</span>99.99</p>
                          </div>{/* /.pricing-three__left */}
                          <div className="pricing-three__right">
                            <ul className="pricing-one__list list-unstyled">
                              <li><i className="far fa-check" />50GB Bandwidth</li>
                              <li><i className="far fa-check" />Business &amp; Financ Analysing</li>
                              <li><i className="far fa-check" />24 hour support</li>
                              <li><i className="far fa-check" />Customer Managemet</li>
                            </ul>{/* /.pricing-one__list list-unstyled */}
                          </div>{/* /.pricing-three__right */}
                        </div>{/* /.pricing-three__single-inner */}
                        <a href="#" className="thm-btn pricing-one__btn">Choose Plan <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn pricing-one__btn */}
                      </div>{/* /.pricing-three__single */}
                    </div>{/* /.col-lg-6 */}
                  </div>{/* /.row */}
                </div>{/* /.tab-pane fade in active */}
              </div>{/* /.tab-content */}
            </div>{/* /.inner-container */}
          </div>{/* /.container */}
        </section>{/* /.pricing-three */}
      </div>
        }
}

export default PricingV5