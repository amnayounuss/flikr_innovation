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
                                    <h3 style={{marginTop: '20px'}}>ON-SITE SEO</h3>
                                    <li><i className="far fa-check" />Keyword Research</li>
                                    <li><i className="far fa-check" />5 Pages SEO Optimized Copywriting</li>
                                    <li><i className="far fa-check" />10 Pages Meta Tag Optimization</li>
                                    <li><i className="far fa-check" />2 Monthly On-Site Blogs</li>
                                    <h3 style={{marginTop: '20px'}}>TECHNICAL SEO</h3>
                                    <li><i className="far fa-check" />Website Speed Optimization</li>
                                    <li><i className="far fa-check" />Google Analytics Setup and Configuration</li>
                                    <li><i className="far fa-check" />Google Search Console Setup and Configuration</li>
                                    <li><i className="far fa-check" />XML Sitemap Creation and Submission</li>
                                    <li><i className="far fa-check" />Robots.txt Configuration</li>
                                    <h3 style={{marginTop: '20px'}}>OFF-SITE SEO</h3>
                                    <li><i className="far fa-check" />Link Building</li>
                                    <li><i className="far fa-check" />2 Local Business Listings (First Month)</li>
                                    <li><i className="far fa-check" />10 Off-Site Guest Post Submissions</li>
                                    <h3 style={{marginTop: '20px'}}>REPORTING</h3>
                                    <li><i className="far fa-check" />Monthly SEO Report</li>
                                    <li><i className="far fa-check" />Keywords Ranking (From Second Month)</li>
                                    <li><i className="far fa-check" />Website Impressions Count</li>
                                    <li><i className="far fa-check" />Website Visitors Count</li>
                                    <li><i className="far fa-check" />Visitors Location</li>
                                    <li><i className="far fa-check" />Backlinks and Referring Domains Count</li>
                                    <li><i className="far fa-check" />Off-Site Guest Post URLs</li>
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
                                    <p><span>$</span>799</p>
                                </div>
                                <ul className="pricing-one__list list-unstyled">
                                <li><i className="far fa-check" />Minimum Contract Duration: 6 Months</li>
                                    <li><i className="far fa-check" />Covered Locations: 5 Cities in the Same State</li>
                                    <li><i className="far fa-check" />Keywords Optimization: 20</li>
                                    <li><i className="far fa-check" />Keywords on Google’s 1st Page: 6</li>
                                    <li><i className="far fa-check" />Page Optimization: 20</li>
                                    <h3 style={{marginTop: '20px'}}>ON-SITE SEO</h3>
                                    <li><i className="far fa-check" />Keyword Research</li>
                                    <li><i className="far fa-check" />10 Pages SEO Optimized Copywriting</li>
                                    <li><i className="far fa-check" />20 Pages Meta Tag Optimization</li>
                                    <li><i className="far fa-check" />3 Monthly On-Site Blogs</li>
                                    <h3 style={{marginTop: '20px'}}>TECHNICAL SEO</h3>
                                    <li><i className="far fa-check" />Website Speed Optimization</li>
                                    <li><i className="far fa-check" />Google Analytics Setup and Configuration</li>
                                    <li><i className="far fa-check" />Google Search Console Setup and Configuration</li>
                                    <li><i className="far fa-check" />XML Sitemap Creation and Submission</li>
                                    <li><i className="far fa-check" />Robots.txt Configuration</li>
                                    <h3 style={{marginTop: '20px'}}>OFF-SITE SEO</h3>
                                    <li><i className="far fa-check" />Link Building</li>
                                    <li><i className="far fa-check" />5 Local Business Listings (First Month)</li>
                                    <li><i className="far fa-check" />20 Off-Site Guest Post Submissions</li>
                                    <h3 style={{marginTop: '20px'}}>REPORTING</h3>
                                    <li><i className="far fa-check" />Monthly SEO Report</li>
                                    <li><i className="far fa-check" />Keywords Ranking (From Second Month)</li>
                                    <li><i className="far fa-check" />Website Impressions Count</li>
                                    <li><i className="far fa-check" />Website Visitors Count</li>
                                    <li><i className="far fa-check" />Visitors Location</li>
                                    <li><i className="far fa-check" />Backlinks and Referring Domains Count</li>
                                    <li><i className="far fa-check" />Off-Site Guest Post URLs</li>
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
                                    <p><span>$</span>999</p>
                                </div>
                                <ul className="pricing-one__list list-unstyled">
                                <li><i className="far fa-check" />Minimum Contract Duration: 6 Months</li>
                                    <li><i className="far fa-check" />Covered Locations: 1 Complete State of a Country</li>
                                    <li><i className="far fa-check" />Keywords Optimization: 30</li>
                                    <li><i className="far fa-check" />Keywords on Google’s 1st Page: 10</li>
                                    <li><i className="far fa-check" />Page Optimization: 30</li>
                                    <li><i className="far fa-check" />Ecommerce Optimization: Yes</li>
                                    <h3 style={{marginTop: '20px'}}>ON-SITE SEO</h3>
                                    <li><i className="far fa-check" />Keyword Research</li>
                                    <li><i className="far fa-check" />15 Pages SEO Optimized Copywriting</li>
                                    <li><i className="far fa-check" />30 Pages Meta Tag Optimization</li>
                                    <li><i className="far fa-check" />5 Monthly On-Site Blogs</li>
                                    <h3 style={{marginTop: '20px'}}>TECHNICAL SEO</h3>
                                    <li><i className="far fa-check" />Website Speed Optimization</li>
                                    <li><i className="far fa-check" />Google Analytics Setup and Configuration</li>
                                    <li><i className="far fa-check" />Google Search Console Setup and Configuration</li>
                                    <li><i className="far fa-check" />XML Sitemap Creation and Submission</li>
                                    <li><i className="far fa-check" />Robots.txt Configuration</li>
                                    <h3 style={{marginTop: '20px'}}>OFF-SITE SEO</h3>
                                    <li><i className="far fa-check" />Link Building</li>
                                    <li><i className="far fa-check" />10 Local Business Listings (First Month)</li>
                                    <li><i className="far fa-check" />30 Off-Site Guest Post Submissions</li>
                                    <h3 style={{marginTop: '20px'}}>REPORTING</h3>
                                    <li><i className="far fa-check" />Monthly SEO Report</li>
                                    <li><i className="far fa-check" />Keywords Ranking (From Second Month)</li>
                                    <li><i className="far fa-check" />Website Impressions Count</li>
                                    <li><i className="far fa-check" />Website Visitors Count</li>
                                    <li><i className="far fa-check" />Visitors Location</li>
                                    <li><i className="far fa-check" />Backlinks and Referring Domains Count</li>
                                    <li><i className="far fa-check" />Off-Site Guest Post URLs</li> 
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
