import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Printing extends Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        let imagealt = 'image';


        return (
            <div className="tab-pane show active  animated fadeInUp" id="printing">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="pricing-one__single">
                            <div className="pricing-one__inner">
                                <img src={publicUrl + "assets/images/shapes/pricing-i-1-1.png"} alt={imagealt} />
                                <div className="pricing-one__top">
                                    <h3>Startup</h3>
                                    <p><span>$</span>79 </p>
                                </div>
                                <ul className="pricing-one__list list-unstyled">
                                    <li><i className="far fa-check" />1 Business Card Design</li>
                                    <li><i className="far fa-check" />1 Letterhead Design</li>
                                    <li><i className="far fa-check" />1 Envelope Design</li>
                                    <li><i className="far fa-check" />Dedicated Designer</li>
                                    <li><i className="far fa-check" />3 Design Revisions</li>
                                    <li><i className="far fa-check" />Turnaround Time 24 - 48 Hours</li>
                                    <li><i className="far fa-check" />Features:</li>
                                    <li><i className="far fa-check" />100% Satisfaction Guaranteed</li>
                                    <li><i className="far fa-check" />100% Ownership Rights</li>
                                    <li><i className="far fa-check" />100% Unique Design Guarantee</li>
                                    <li><i className="far fa-check" />100% Money Back Guarantee</li>
                                    <li><i className="far fa-check" />All Final File Formats</li>
                                    <li><i className="far fa-check" />Free Rush Delivery - Get Initial Concepts within 24 hours</li>
                                </ul>
                                <a href="#" className="thm-btn pricing-one__btn">Let's Chat<i className="fa fa-angle-double-right" /></a>{/* /.thm-btn pricing-one__btn */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="pricing-one__single">
                            <div className="pricing-one__inner">
                                {/* <span className="pricing-one__corner-ribbon">Best</span> */}

                                <img src={publicUrl + "assets/images/shapes/pricing-i-1-2.png"} alt={imagealt} />
                                <div className="pricing-one__top">
                                    <h3>Regular</h3>
                                    <p><span>$</span>139</p>
                                </div>
                                <ul className="pricing-one__list list-unstyled">
                                    <li><i className="far fa-check" />2 Design Concepts (Trifold / Bi-fold)</li>
                                    <li><i className="far fa-check" />Dedicated Designer</li>
                                    <li><i className="far fa-check" />1 Envelope Design</li>
                                    <li><i className="far fa-check" />Dedicated Designer</li>
                                    <li><i className="far fa-check" />3 Design Revisions</li>
                                    <li><i className="far fa-check" />Turnaround Time 24 - 48 Hours</li>
                                    <li><i className="far fa-check" />Features:</li>
                                    <li><i className="far fa-check" />100% Satisfaction Guaranteed</li>
                                    <li><i className="far fa-check" />100% Ownership Rights</li>
                                    <li><i className="far fa-check" />100% Unique Design Guarantee</li>
                                    <li><i className="far fa-check" />100% Money Back Guarantee</li>
                                    <li><i className="far fa-check" />All Final File Formats</li>
                                    <li><i className="far fa-check" />Free Rush Delivery - Get Initial Concepts within 24 hours</li>
                                </ul>
                                <div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            {/* First button */}
                                            <a href="#" className="thm-btn pricing-one__btn chatbtn1">Order Now<i className="fa fa-angle-double-right" /></a>
                                        </div>
                                        <div className="col-md-6">
                                            {/* Second button */}
                                            <a href="#" className="thm-btn pricing-one__btn chatbtn"> Let's Chat <i className="fa fa-angle-double-right" /></a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="pricing-one__single">
                            <div className="pricing-one__inner">
                                <img src={publicUrl + "assets/images/shapes/pricing-i-1-3.png"} alt="pricing" />
                                <div className="pricing-one__top">
                                    <h3>Premium</h3>
                                    <p><span>$</span>139 </p>
                                </div>
                                <ul className="pricing-one__list list-unstyled">
                                    <li><i className="far fa-check" />1 Unique Design</li>
                                    <li><i className="far fa-check" />3 Design Concepts</li>
                                    <li><i className="far fa-check" />Dedicated Designer</li>
                                    <li><i className="far fa-check" />2 Design Revisions</li>
                                    <li><i className="far fa-check" />Turnaround Time 24 - 72 Hours</li>
                                    <li><i className="far fa-check" />Features:</li>
                                    <li><i className="far fa-check" />100% Satisfaction Guaranteed</li>
                                    <li><i className="far fa-check" />100% Ownership Rights</li>
                                    <li><i className="far fa-check" />100% Unique Design Guarantee</li>
                                    <li><i className="far fa-check" />100% Money Back Guarantee</li>
                                    <li><i className="far fa-check" />All Final File Formats</li>
                                    <li><i className="far fa-check" />Free Rush Delivery - Get Initial Concepts within 24 hours</li>
                                </ul>
                                <a href="#" className="thm-btn pricing-one__btn">Let's Chat <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn pricing-one__btn */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Printing;
