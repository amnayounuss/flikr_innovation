import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SocialMedia extends Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        let imagealt = 'image';


        return (
            <div className="tab-pane show active  animated fadeInUp" id="socialmedia">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="pricing-one__single">
                            <div className="pricing-one__inner">
                                <img src={publicUrl + "assets/images/shapes/pricing-i-1-1.png"} alt={imagealt} />
                                <div className="pricing-one__top">
                                    <h3>Startup</h3>
                                    <p><span>$</span>449</p>
                                </div>
                                <ul className="pricing-one__list list-unstyled">
                                    <li><i className="far fa-check" />Manage Facebook & Instagram Pages</li>
                                    <li><i className="far fa-check" />1 Awareness Ad Campaign</li>
                                    <li><i className="far fa-check" />Business Manager Creation</li>
                                    <li><i className="far fa-check" />1 Social Cover</li>
                                    <li><i className="far fa-check" />Engagement</li>
                                    <li><i className="far fa-check" />Reviews</li>
                                    <li><i className="far fa-check" />Check-ins</li>
                                    <li><i className="far fa-check" />Posts</li>
                                    <li><i className="far fa-check" />3 Posts per Week</li>
                                    <li><i className="far fa-check" />1 Facebook Event</li>
                                    <li><i className="far fa-check" />Monthly Reporting</li>
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
                                    <p><span>$</span>749</p>
                                </div>
                                <ul className="pricing-one__list list-unstyled">
                                    <li><i className="far fa-check" />Manage Facebook, Instagram & LinkedIn Pages</li>
                                    <li><i className="far fa-check" />3 Ad Campaigns (Awareness, Traffic & Engagement)</li>
                                    <li><i className="far fa-check" />Business Manager Creation</li>
                                    <li><i className="far fa-check" />2 Social Covers</li>
                                    <li><i className="far fa-check" />Posts and Reels Creation</li>
                                    <li><i className="far fa-check" />Engagement</li>
                                    <li><i className="far fa-check" />Reviews</li>
                                    <li><i className="far fa-check" />Check-ins</li>
                                    <li><i className="far fa-check" />Shares</li>
                                    <li><i className="far fa-check" />Mentions</li>
                                    <li><i className="far fa-check" />Invite to Like</li>
                                    <li><i className="far fa-check" />3 Posts per Week</li>
                                    <li><i className="far fa-check" />2 Facebook Events</li>
                                    <li><i className="far fa-check" />Monthly Reporting</li>
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
                                    <p><span>$</span>1,199</p>
                                </div>
                                <ul className="pricing-one__list list-unstyled">
                                    <li><i className="far fa-check" />Manage Facebook, Instagram, TikTok, Youtube, LinkedIn Pages</li>
                                    <li><i className="far fa-check" />5 Ad Campaigns (Awareness, Traffic, Engagement, Leads & Sales)</li>
                                    <li><i className="far fa-check" />Business Manager Creation </li>
                                    <li><i className="far fa-check" />3 Social Covers</li>
                                    <li><i className="far fa-check" />Posts and Reels Creation</li>
                                    <li><i className="far fa-check" />Engagement</li>
                                    <li><i className="far fa-check" />Reviews</li>
                                    <li><i className="far fa-check" />Check-ins</li>
                                    <li><i className="far fa-check" />Shares</li>
                                    <li><i className="far fa-check" />Mentions</li>
                                    <li><i className="far fa-check" />Invite to Like</li>
                                    <li><i className="far fa-check" />3 Posts per Week</li>
                                    <li><i className="far fa-check" />3 Facebook Events</li>
                                    <li><i className="far fa-check" />Monthly Reporting</li>    
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

export default SocialMedia;
