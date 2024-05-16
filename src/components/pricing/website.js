import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Website extends Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        let imagealt = 'image';


        return (
            <div className="tab-pane show active  animated fadeInUp" id="website">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="pricing-one__single">
                            <div className="pricing-one__inner">
                                <img src={publicUrl + "assets/images/shapes/pricing-i-1-1.png"} alt={imagealt} />
                                <div className="pricing-one__top">
                                    <h3>Startup</h3>
                                    <p><span>$</span>399</p>
                                </div>
                                <ul className="pricing-one__list list-unstyled">
                                    <li><i className="far fa-check" />3 Page Website</li>
                                    <li><i className="far fa-check" />Custom Layout Design</li>
                                    <li><i className="far fa-check" />Contact / Query Form</li>
                                    <li><i className="far fa-check" />1 Banner Design</li>
                                    <li><i className="far fa-check" />2 Stock Photos</li>
                                    <li><i className="far fa-check" />FREE Favicon Design</li>
                                    <li><i className="far fa-check" />Cross Browser Compatible</li>
                                    <li><i className="far fa-check" />Complete W3C Certified HTML</li>
                                    <li><i className="far fa-check" />Website Initial Concepts in 48 Hours</li>
                                    <li><i className="far fa-check" />Complete Design & Deployment</li>
                                    <li><i className="far fa-check" />Complete Source Files</li>
                                    <li><i className="far fa-check" />API Integrations</li>
                                    <li><i className="far fa-check" />Dedicated Project Manager</li>
                                    <li><i className="far fa-check" />100% Ownership Rights</li>
                                    <li><i className="far fa-check" />100% Satisfaction Guarantee</li>
                                    <li><i className="far fa-check" />Value Added Services</li>
                                    <li><i className="far fa-check" />Mobile Responsive</li>
                                    <li><i className="far fa-check" />CMS</li>
                                </ul>
                                <a href="#" className="thm-btn pricing-one__btn">Let's Chat<i className="fa fa-angle-double-right" /></a>{/* /.thm-btn pricing-one__btn */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="pricing-one__single">
                            <div className="pricing-one__inner">

                                <img src={publicUrl + "assets/images/shapes/pricing-i-1-2.png"} alt={imagealt} />
                                <div className="pricing-one__top">
                                    <h3>Regular</h3>
                                    <p><span>$</span>499</p>
                                </div>
                                <ul className="pricing-one__list list-unstyled">
                                    <li><i className="far fa-check" />5 Page Website</li>
                                    <li><i className="far fa-check" />Custom Layout Design</li>
                                    <li><i className="far fa-check" />Contact / Query Form</li>
                                    <li><i className="far fa-check" />3 Banner Design</li>
                                    <li><i className="far fa-check" />5 Stock Photos</li>
                                    <li><i className="far fa-check" />FREE Favicon Design</li>
                                    <li><i className="far fa-check" />Cross Browser Compatible</li>
                                    <li><i className="far fa-check" />Complete W3C Certified HTML</li>
                                    <li><i className="far fa-check" />Website Initial Concepts in 48 Hours</li>
                                    <li><i className="far fa-check" />Complete Design & Deployment</li>
                                    <li><i className="far fa-check" />Dedicated Project Manager</li>
                                    <li><i className="far fa-check" />100% Ownership Rights</li>
                                    <li><i className="far fa-check" />100% Satisfaction Guarantee</li>
                                    <li><i className="far fa-check" />Value Added Services</li>
                                    <li><i className="far fa-check" />Mobile Responsive</li>
                                    <li><i className="far fa-check" />CMS</li>
                                </ul>
                                <a href="#" className="thm-btn pricing-one__btn">Let's Chat <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn pricing-one__btn */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="pricing-one__single">
                            <div className="pricing-one__inner">
                                <img src={publicUrl + "assets/images/shapes/pricing-i-1-3.png"} alt="pricing" />
                                <div className="pricing-one__top">
                                    <h3>Premium</h3>
                                    <p><span>$</span>899</p>
                                </div>
                                <ul className="pricing-one__list list-unstyled">
                                <li><i className="far fa-check" />Up to 10 Unique Pages Website</li>
                                    <li><i className="far fa-check" />CMS / Admin Panel Integration</li>
                                    <li><i className="far fa-check" />5+ Stock Photos & Banner Designs</li>
                                    <li><i className="far fa-check" />FREE Social Media Integration</li>
                                    <li><i className="far fa-check" />FREE Favicon Design</li>
                                    <li><i className="far fa-check" />Unlimited Revisions</li>
                                    <li><i className="far fa-check" />Cross Browser Compatible</li>
                                    <li><i className="far fa-check" />Complete W3C Certified HTML</li>
                                    <li><i className="far fa-check" />Website Initial Concepts in 48 Hours</li>
                                    <li><i className="far fa-check" />Complete Design & Deployment</li>
                                    <li><i className="far fa-check" />Custom, Interactive & Dynamic Web Design</li>
                                    <li><i className="far fa-check" />Industry specified Team of Expert</li>
                                    <li><i className="far fa-check" />Complete Design & Deployment</li>
                                    <li><i className="far fa-check" />Complete Source Files</li>
                                    <li><i className="far fa-check" />Dedicated Project Manager</li>
                                    <li><i className="far fa-check" />100% Ownership Rights</li>
                                    <li><i className="far fa-check" />100% Satisfaction Guarantee</li>
                                    <li><i className="far fa-check" />Value Added Services</li>
                                    <li><i className="far fa-check" />Mobile Responsive</li>
                                    <li><i className="far fa-check" />CMS</li>
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

export default Website;
