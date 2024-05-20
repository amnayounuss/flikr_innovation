import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Website extends Component {
    openChat = (e) => {
        e.preventDefault();
        if (window.Tawk_API && window.Tawk_API.maximize) {
            window.Tawk_API.maximize();
        }
    };

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
                image: "pricing-i-1-1.png",
                buttons: [
                    { text: "Order Now", className: "chatbtn1" },
                    { text: "Let's Chat", className: "chatbtn" }
                ]
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
                image: "pricing-i-1-2.png",
                buttons: [
                    { text: "Order Now", className: "chatbtn1" },
                    { text: "Let's Chat", className: "chatbtn" }
                ]
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
                image: "pricing-i-1-3.png",
                buttons: [
                    { text: "Order Now", className: "chatbtn1" },
                    { text: "Let's Chat", className: "chatbtn" }
                ]
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
                                    <div className="row">
                                        {plan.buttons.map((button, idx) => (
                                            <div className="col-md-6" key={idx}>
                                                {button.className === 'chatbtn' ? (
                                                    <button onClick={this.openChat} className={`thm-btn pricing-one__btn ${button.className}`}>
                                                        {button.text}<i className="fa fa-angle-double-right" />
                                                    </button>
                                                ) : (
                                                    <Link to="/free-quote" className={`thm-btn pricing-one__btn ${button.className}`}>
                                                        {button.text}<i className="fa fa-angle-double-right" />
                                                    </Link>
                                                )}
                                            </div>
                                        ))}
                                    </div>
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
