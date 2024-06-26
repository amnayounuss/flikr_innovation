import React from 'react';
import { Link } from 'react-router-dom';

const SocialMedia = () => {
    const publicUrl = process.env.PUBLIC_URL + '/';
    const imagealt = 'image';

    const openChat = (e) => {
        e.preventDefault();
        if (window.Tawk_API && window.Tawk_API.maximize) {
            window.Tawk_API.maximize();
        }
    };

    const plans = [
        {
            name: "Startup",
            price: 449,
            features: [
                "Manage Facebook & Instagram Pages",
                "1 Awareness Ad Campaign",
                "Business Manager Creation",
                "1 Social Cover",
                "Engagement",
                "Reviews",
                "Check-ins",
                "Posts",
                "3 Posts per Week",
                "1 Facebook Event",
                "Monthly Reporting"
            ],
            image: "pricing-i-1-1.png",
            buttons: [
                { text: "Order Now", className: "chatbtn1" },
                { text: "Let's Chat", className: "chatbtn" }
            ]
        },
        {
            name: "Regular",
            price: 749,
            features: [
                "Manage Facebook, Instagram & LinkedIn Pages",
                "3 Ad Campaigns (Awareness, Traffic & Engagement)",
                "Business Manager Creation",
                "2 Social Covers",
                "Posts and Reels Creation",
                "Engagement",
                "Reviews",
                "Check-ins",
                "Shares",
                "Mentions",
                "Invite to Like",
                "3 Posts per Week",
                "2 Facebook Events",
                "Monthly Reporting"
            ],
            image: "pricing-i-1-2.png",
            buttons: [
                { text: "Order Now", className: "chatbtn1" },
                { text: "Let's Chat", className: "chatbtn" }
            ]
        },
        {
            name: "Premium",
            price: 1199,
            features: [
                "Manage Facebook, Instagram, TikTok, Youtube, LinkedIn Pages",
                "5 Ad Campaigns (Awareness, Traffic, Engagement, Leads & Sales)",
                "Business Manager Creation",
                "3 Social Covers",
                "Posts and Reels Creation",
                "Engagement",
                "Reviews",
                "Check-ins",
                "Shares",
                "Mentions",
                "Invite to Like",
                "3 Posts per Week",
                "3 Facebook Events",
                "Monthly Reporting"
            ],
            image: "pricing-i-1-3.png",
            buttons: [
                { text: "Order Now", className: "chatbtn1" },
                { text: "Let's Chat", className: "chatbtn" }
            ]
        }
    ];

    return (
        <div className="tab-pane show active animated fadeInUp" id="socialmedia">
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
                                                <button onClick={openChat} className={`thm-btn pricing-one__btn ${button.className}`}>
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
};

export default SocialMedia;
