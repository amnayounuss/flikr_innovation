import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Seo extends Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        let imagealt = 'image';


        return (
            <div className="tab-pane show active  animated fadeInUp" id="seo">
              <div className="row">
                    <div className="col-lg-4">
                        <div className="pricing-one__single">
                            <div className="pricing-one__inner">
                                <img src={publicUrl + "assets/images/shapes/pricing-i-1-1.png"} alt={imagealt} />
                                <div className="pricing-one__top">
                                    <h3>Startup</h3>
                                    <p><span>$</span>499</p>
                                </div>
                                <ul className="pricing-one__list list-unstyled">
                                    <li><i className="far fa-check" />Minimum Contract Duration: 6 Months</li>
                                    <li><i className="far fa-check" />Covered Locations: 2 Cities in the Same State</li>
                                    <li><i className="far fa-check" />Keywords Optimization: 10</li>
                                    <li><i className="far fa-check" />Keywords on Google’s 1st Page: 3</li>
                                    <li><i className="far fa-check" />Page Optimization: 10</li>
                                    <h3>ON-SITE SEO</h3>
                                    <li><i className="far fa-check" />Keyword Research</li>
                                    <li><i className="far fa-check" />5 Pages SEO Optimized Copywriting</li>
                                    <li><i className="far fa-check" />10 Pages Meta Tag Optimization</li>
                                    <li><i className="far fa-check" />2 Monthly On-Site Blogs</li>
                                    <li><i className="far fa-check" />Dedicated Account Manager</li>
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
                                    <p><span>$</span>199</p>
                                </div>
                                <ul className="pricing-one__list list-unstyled">
                                    <li><i className="far fa-check" />12 Original Logo Concepts</li>
                                    <li><i className="far fa-check" />4 Dedicated Logo Designer (Industry Specific)</li>
                                    <li><i className="far fa-check" />Unlimited Revisions</li>
                                    <li><i className="far fa-check" />Stationery Design </li>
                                    <li><i className="far fa-check" />Email Signature Design</li>
                                    <li><i className="far fa-check" />With Grey Scale Format</li>
                                    <li><i className="far fa-check" />Free Icon Design</li>
                                    <li><i className="far fa-check" />2Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG</li>
                                    <li><i className="far fa-check" />100% Satisfaction</li>
                                    <li><i className="far fa-check" />100% Ownership Rights</li>
                                    <li><i className="far fa-check" />Dedicated Account Manager</li>
                                    <li><i className="far fa-check" />24/7 Support </li>
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
                                    <p><span>$</span>399</p>
                                </div>
                                <ul className="pricing-one__list list-unstyled">
                                    <li><i className="far fa-check" />Unlimited Original Logo Concepts</li>
                                    <li><i className="far fa-check" />8 Dedicated Logo Designer (Industry Specific)</li>
                                    <li><i className="far fa-check" />Stationery Design </li>
                                    <li><i className="far fa-check" />500 Business Cards</li>
                                    <li><i className="far fa-check" />Email Signature Design</li>
                                    <li><i className="far fa-check" />With Grey Scale Format</li>
                                    <li><i className="far fa-check" />Free Icon Design </li>
                                    <li><i className="far fa-check" />Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG</li>
                                    <li><i className="far fa-check" />24 – 48 Business Hours Turn Around Time</li>
                                    <li><i className="far fa-check" />100% Satisfaction</li>
                                    <li><i className="far fa-check" />100% Ownership Rights</li>
                                    <li><i className="far fa-check" />Dedicated Account Manager</li>
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

export default Seo;
