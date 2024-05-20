import React, { Component } from 'react';

class Website extends Component {
    render() {
        const publicUrl = process.env.PUBLIC_URL + '/';
        const imagealt = 'image';

        const plans = [
            {
                name: "Startup",
                price: 399,
                features: [
                    "3 Page Website ",
                    "Custom Layout Design",
                    "Contact / Query Form",
                    "1 Banner Design",
                    "2 Stock Photos",
                    "FREE Favicon Design",
                    "Cross Browser Compatible",
                    "Complete W3C Certified HTML",
                    "Website Initial Concepts in 48 Hours",
                    "Complete Design & Deployment",
                    "Complete Source Files",
                    "API Integrations",
                    "Dedicated Project Manager",
                    "100% Ownership Rights",
                    "100% Satisfaction Guarantee",
                    "Value Added Services",
                    "Mobile Responsive",
                    "CMS"
                ],
                image: "pricing-i-1-1.png"
            },
            {
                name: "Regular",
                price: 499,
                features: [
                    "5 Page Website",
                    "Custom Layout Design",
                    "Contact / Query Form",
                    "3 Banner Design",
                    "5 Stock Photos",
                    "FREE Favicon Design",
                    "Cross Browser Compatible",
                    "Complete W3C Certified HTML",
                    "Website Initial Concepts in 48 Hours",
                    "Complete Design & Deployment",
                    "Dedicated Project Manager",
                    "100% Ownership Rights",
                    "100% Satisfaction Guarantee",
                    "Value Added Services",
                    "Mobile Responsive",
                    "CMS"
                ],
                image: "pricing-i-1-2.png"
            },
            {
                name: "Premium",
                price: 899,
                features: [
                    "Up to 10 Unique Pages Website",
                    "CMS / Admin Panel Integration",
                    "5+ Stock Photos & Banner Designs",
                    "FREE Social Media Integration",
                    "FREE Favicon Design",
                    "Unlimited Revisions",
                    "Cross Browser Compatible",
                    "Complete W3C Certified HTML",
                    "Website Initial Concepts in 48 Hours",
                    "Complete Design & Deployment",
                    "Custom, Interactive & Dynamic Web Design",
                    "Industry specified Team of Expert",
                    "Complete Design & Deployment",
                    "Complete Source Files",
                    "Dedicated Project Manager",
                    "100% Ownership Rights",
                    "100% Satisfaction Guarantee",
                    "Value Added Services",
                    "Mobile Responsive",
                    "CMS"
                ],
                image: "pricing-i-1-3.png"
            }
        ];

        return (
            <div className="tab-pane show active animated fadeInUp" id="website">
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
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} style={{ display: 'flex', alignItems: 'center' }}>
                                                <div><i className="far fa-check" /></div>
                                                <div>{feature}</div>
                                            </li>
                                        ))}
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

export default Website;
