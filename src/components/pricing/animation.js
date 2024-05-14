import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Animation extends Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        let imagealt = 'image';


        return (
            <div className="tab-pane show active  animated fadeInUp" id="animation">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="pricing-one__single">
                            <div className="pricing-one__inner">
                                <img src={publicUrl + "assets/images/shapes/pricing-i-1-1.png"} alt={imagealt} />
                                <div className="pricing-one__top">
                                    <h3>Startup</h3>
                                    <p><span>$</span>749</p>
                                </div>
                                <ul className="pricing-one__list list-unstyled">
                                    <li><i className="far fa-check" />Custom Artwork</li>
                                    <li><i className="far fa-check" />Hand-Drawn Character Illustrations</li>
                                    <li><i className="far fa-check" />Script Writing</li>
                                    <li><i className="far fa-check" />Professional Voiceover</li>
                                    <li><i className="far fa-check" />Unlimited Storyboard Revisions</li>
                                    <li><i className="far fa-check" />SFX & Background Music</li>
                                    <li><i className="far fa-check" />Full HD Video Format</li>
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
                                    <p><span>$</span>999</p>
                                </div>
                                <ul className="pricing-one__list list-unstyled">
                                    <li><i className="far fa-check" />Custom Artwork</li>
                                    <li><i className="far fa-check" />Script Writing</li>
                                    <li><i className="far fa-check" />Professional Voiceover</li>
                                    <li><i className="far fa-check" />Unlimited Storyboard Revisions</li>
                                    <li><i className="far fa-check" />3D Modeling</li>
                                    <li><i className="far fa-check" />Texturing</li>
                                    <li><i className="far fa-check" />Lighting</li>
                                    <li><i className="far fa-check" />Rigging & Camera Setting</li>
                                    <li><i className="far fa-check" />VFX & Animations</li>
                                    <li><i className="far fa-check" />Music & Foley</li>
                                    <li><i className="far fa-check" />Full HD Video Format</li>
                                    <li><i className="far fa-check" />Dedicated Account Manager</li>
                                </ul>
                                <div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            {/* First button */}
                                            <a href="#" className="thm-btn pricing-one__btn">Let's Chat <i className="fa fa-angle-double-right" /></a>
                                        </div>
                                        <div className="col-md-6">
                                            {/* Second button */}
                                            <a href="#" className="thm-btn pricing-one__btn">Another Action <i className="fa fa-angle-double-right" /></a>
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
                                    <p><span>$</span>1,499 </p>
                                </div>
                                <ul className="pricing-one__list list-unstyled">
                                    <li><i className="far fa-check" />Custom Artwork</li>
                                    <li><i className="far fa-check" />Script Writing</li>
                                    <li><i className="far fa-check" />Professional Voiceover</li>
                                    <li><i className="far fa-check" />Unlimited Storyboard Revisions</li>
                                    <li><i className="far fa-check" />3D Modeling</li>
                                    <li><i className="far fa-check" />Texturing</li>
                                    <li><i className="far fa-check" />Lighting</li>
                                    <li><i className="far fa-check" />Rigging & Camera Setting</li>
                                    <li><i className="far fa-check" />VFX & Animations</li>
                                    <li><i className="far fa-check" />Music & Foley</li>
                                    <li><i className="far fa-check" />Full HD Video Format</li>
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

export default Animation;
