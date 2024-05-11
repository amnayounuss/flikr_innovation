import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Logo extends Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        let imagealt = 'image';


        return (
            <div className="tab-pane show active  animated fadeInUp" id="logo">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="pricing-one__single">
                            <div className="pricing-one__inner">
                                <img src={publicUrl + "assets/images/shapes/pricing-i-1-1.png"} alt={imagealt} />
                                <div className="pricing-one__top">
                                    <h3>Startup</h3>
                                    <p><span>$</span>59</p>
                                </div>
                                <ul className="pricing-one__list list-unstyled">
                                    <li><i className="far fa-check" />4 Original Logo Concepts</li>
                                    <li><i className="far fa-check" />2 Dedicated Logo Designer</li>
                                    <li><i className="far fa-check" />4 Revisions</li>
                                    <li><i className="far fa-check" />With Grey Scale Format</li>
                                    <li><i className="far fa-check" />Free Icon Design</li>
                                    <li><i className="far fa-check" />Bootstrap v5</li>
                                    <li><i className="far fa-check" />Formats: JPEG Only</li>
                                    <li><i className="far fa-check" />24 – 48 Business Hours Turn Around Time</li>
                                    <li><i className="far fa-check" />100% Ownership Rights</li>
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
                                    <li><i className="far fa-check" />4 Dedicated Logo Designer</li>
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
                                    <li><i className="far fa-check" />8 Dedicated Logo Designer </li>
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

export default Logo;
