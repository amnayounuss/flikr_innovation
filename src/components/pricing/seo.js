import React, { Component } from 'react';

class Seo extends Component {
    render() {
        const publicUrl = process.env.PUBLIC_URL + '/';
        const imagealt = 'image';

        const plans = [
            {
                name: "Startup",
                price: 499,
                features: [
                    "Minimum Contract Duration: 6 Months",
                    "Covered Locations: 2 Cities in the Same State",
                    "Keywords Optimization: 10",
                    "Keywords on Google’s 1st Page: 3",
                    "Page Optimization: 10",
                    "ON-SITE SEO",
                    "Keyword Research",
                    "5 Pages SEO Optimized Copywriting",
                    "10 Pages Meta Tag Optimization",
                    "2 Monthly On-Site Blogs",
                    "TECHNICAL SEO",
                    "Website Speed Optimization",
                    "Google Analytics Setup and Configuration",
                    "Google Search Console Setup and Configuration",
                    "XML Sitemap Creation and Submission",
                    "Robots.txt Configuration",
                    "OFF-SITE SEO",
                    "Link Building",
                    "2 Local Business Listings (First Month)",
                    "10 Off-Site Guest Post Submissions",
                    "REPORTING",
                    "Monthly SEO Report",
                    "Keywords Ranking (From Second Month)",
                    "Website Impressions Count",
                    "Website Visitors Count",
                    "Visitors Location",
                    "Backlinks and Referring Domains Count",
                    "Off-Site Guest Post URLs"
                ],
                image: "pricing-i-1-1.png"
            },
            {
                name: "Regular",
                price: 799,
                features: [
                    "Minimum Contract Duration: 6 Months",
                    "Covered Locations: 5 Cities in the Same State",
                    "Keywords Optimization: 20",
                    "Keywords on Google’s 1st Page: 6",
                    "Page Optimization: 20",
                    "ON-SITE SEO",
                    "Keyword Research",
                    "10 Pages SEO Optimized Copywriting",
                    "20 Pages Meta Tag Optimization",
                    "3 Monthly On-Site Blogs",
                    "TECHNICAL SEO",
                    "Website Speed Optimization",
                    "Google Analytics Setup and Configuration",
                    "Google Search Console Setup and Configuration",
                    "XML Sitemap Creation and Submission",
                    "Robots.txt Configuration",
                    "OFF-SITE SEO",
                    "Link Building",
                    "5 Local Business Listings (First Month)",
                    "20 Off-Site Guest Post Submissions",
                    "REPORTING",
                    "Monthly SEO Report",
                    "Keywords Ranking (From Second Month)",
                    "Website Impressions Count",
                    "Website Visitors Count",
                    "Visitors Location",
                    "Backlinks and Referring Domains Count",
                    "Off-Site Guest Post URLs"
                ],
                image: "pricing-i-1-2.png"
            },
            {
                name: "Premium",
                price: 999,
                features: [
                    "Minimum Contract Duration: 6 Months",
                    "Covered Locations: 1 Complete State of a Country",
                    "Keywords Optimization: 30",
                    "Keywords on Google’s 1st Page: 10",
                    "Page Optimization: 30",
                    "Ecommerce Optimization: Yes",
                    "ON-SITE SEO",
                    "Keyword Research",
                    "15 Pages SEO Optimized Copywriting",
                    "30 Pages Meta Tag Optimization",
                    "5 Monthly On-Site Blogs",
                    "TECHNICAL SEO",
                    "Website Speed Optimization",
                    "Google Analytics Setup and Configuration",
                    "Google Search Console Setup and Configuration",
                    "XML Sitemap Creation and Submission",
                    "Robots.txt Configuration",
                    "OFF-SITE SEO",
                    "Link Building",
                    "10 Local Business Listings (First Month)",
                    "30 Off-Site Guest Post Submissions",
                    "REPORTING",
                    "Monthly SEO Report",
                    "Keywords Ranking (From Second Month)",
                    "Website Impressions Count",
                    "Website Visitors Count",
                    "Visitors Location",
                    "Backlinks and Referring Domains Count",
                    "Off-Site Guest Post URLs"
                ],
                image: "pricing-i-1-3.png"
            }
        ];

        return (
            <div className="tab-pane show active animated fadeInUp" id="seo">
                <div className="row">
                    {plans.map((plan, index) => (
                        <div className="col-lg-4" key={index}>
                            <div className="pricing-one__single">
                                <div className="pricing-one__inner">
                                    <img src={`${publicUrl}assets/images/shapes/${plan.image}`} alt={imagealt} />
                                    <div className="pricing-one__top">
                                        <h3>{plan.name}</h3>
                                        <p><span>$</span>{plan.price}</p>
                                    </div>
                                    <ul className="pricing-one__list list-unstyled">
                                        {plan.features.map((feature, idx) => {
                                            if (feature.startsWith("ON-SITE SEO") || feature.startsWith("TECHNICAL SEO") || feature.startsWith("OFF-SITE SEO") || feature.startsWith("REPORTING")) {
                                                return <h3 key={idx} style={{ marginTop: '20px' }}>{feature}</h3>;
                                            }
                                            return (
                                                <li key={idx} className="d-flex align-items-center">
                                                    <div className="icon"><i className="far fa-check" /></div>
                                                    <div className="text">{feature}</div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                    <a href="#" className="thm-btn pricing-one__btn">Let's Chat <i className="fa fa-angle-double-right" /></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Seo;
