import React, { Component } from 'react';

class Printing extends Component {
    render() {
        const publicUrl = process.env.PUBLIC_URL + '/';
        const imagealt = 'image';

        const plans = [
            {
                name: "Startup",
                price: 79,
                features: [
                    "1 Business Card Design",
                    "1 Letterhead Design",
                    "1 Envelope Design",
                    "Dedicated Designer",
                    "3 Design Revisions",
                    "Turnaround Time 24 - 48 Hours",
                    "100% Satisfaction Guaranteed",
                    "100% Ownership Rights",
                    "100% Unique Design Guarantee",
                    "100% Money Back Guarantee",
                    "All Final File Formats",
                    "Free Rush Delivery - Get Initial Concepts within 24 hours"
                ],
                image: "pricing-i-1-1.png",
                buttons: [
                    { text: "Order Now", className: "chatbtn1" },
                    { text: "Let's Chat", className: "chatbtn" }
                ]
            },
            {
                name: "Regular",
                price: 139,
                features: [
                    "2 Design Concepts (Trifold / Bi-fold)",
                    "Dedicated Designer",
                    "1 Envelope Design",
                    "Dedicated Designer",
                    "3 Design Revisions",
                    "Turnaround Time 24 - 48 Hours",
                    "100% Satisfaction Guaranteed",
                    "100% Ownership Rights",
                    "100% Unique Design Guarantee",
                    "100% Money Back Guarantee",
                    "All Final File Formats",
                    "Free Rush Delivery - Get Initial Concepts within 24 hours"
                ],
                image: "pricing-i-1-2.png",
                buttons: [
                    { text: "Order Now", className: "chatbtn1" },
                    { text: "Let's Chat", className: "chatbtn" }
                ]
            },
            {
                name: "Premium",
                price: 139,
                features: [
                    "1 Unique Design",
                    "3 Design Concepts",
                    "Dedicated Designer",
                    "2 Design Revisions",
                    "Turnaround Time 24 - 72 Hours",
                    "100% Satisfaction Guaranteed",
                    "100% Ownership Rights",
                    "100% Unique Design Guarantee",
                    "100% Money Back Guarantee",
                    "All Final File Formats",
                    "Free Rush Delivery - Get Initial Concepts within 24 hours"
                ],
                image: "pricing-i-1-3.png",
                buttons: [
                    { text: "Order Now", className: "chatbtn1" },
                    { text: "Let's Chat", className: "chatbtn" }
                ]
            }
        ];

        return (
            <div className="tab-pane show active animated fadeInUp" id="printing">
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
                                        {plan.buttons.map((button, btnIdx) => (
                                            <div className="col-md-6" key={btnIdx}>
                                                <a href="#" className={`thm-btn pricing-one__btn ${button.className}`}>{button.text} <i className="fa fa-angle-double-right" /></a>
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

export default Printing;
