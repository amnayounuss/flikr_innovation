import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MobileApp extends Component {
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
                price: 1500,
                features: [
                    "Around 30 screens or 100 days effort",
                    "Around 30 Get data API calls & ~10 Write back / Update calls",
                    "Only simple validations on device",
                    "No offline storage of data",
                    "Timeline - Within 2 months",
                    "Team consists of: Dev Team: <br /> 1 Developer<br /> 1 Senior Developer <br /> 1 Team Lead at 50% loading",
                ],
                image: "pricing-i-1-1.png",
                buttons: [
                    { text: "Order Now", className: "chatbtn1" },
                    { text: "Let's Chat", className: "chatbtn" }
                ]
            },
            {
                name: "Regular",
                price: 2000,
                features: [
                    "Around 100 Screens or 320 Days effort, 30% being complex",
                    "Around 50 Get data API calls & ~20 Write back / Update calls",
                    "Simple business logic for Validations / Calculations / Chart Data etc.",
                    "Some local storage of data",
                    "Timeline - Within 4 months",
                    "Team consists of: <br /> Dev Team - 2 Developers<br /> 2 Senior Developers <br /> 1 Team Lead",
                    "1 Project Manager at 50% loading",
                    "2 Code Audits on months - 2nd & 4th reports provided",
                    "Project managed by Innominds and tracked by customer daily",
                    "1 month notice for early termination",
                ],
                image: "pricing-i-1-2.png",
                buttons: [
                    { text: "Order Now", className: "chatbtn1" },
                    { text: "Let's Chat", className: "chatbtn" },
                ]
            },
            {
                name: "Premium",
                price: 3000,
                features: [
                    "Around 200 Screens or 975 days effort, 50% being complex",
                    "Around 100 Get data API calls & ~50 Write back / Update calls",
                    "Complex business logic like Interactive Charts, Animations, Validations, Conditions etc.",
                    "Complete local storage of data used by App",
                    "Timeline - Within 6 months",
                    "Team consists of: Dev Team: <br /> 1 Developer<br /> 1 Senior Developer <br /> 1 Team Lead at 50% loading",
                    "1 Project Manager - Full time",
                    "1 Team Lead - Onsite",
                    "Code Audits every alternate month, reports provided",
                    "Project managed by Innominds and tracked by customer",
                    "Test Driven Development - Unit Tests & Test Automation",
                    "Onsite + Offshore Model",
                    "2 month notice for early termination",
                ],
                image: "pricing-i-1-3.png",
                buttons: [
                    { text: "Order Now", className: "chatbtn1" },
                    { text: "Let's Chat", className: "chatbtn" }
                ]
            },
        ];

        return (
            <div className="tab-pane show active animated fadeInUp" id="mobile">
                <div className="row">
                    {plans.map((plan, index) => (
                        <div className="col-lg-4" key={index}>
                            <div className="pricing-one__single">
                                <div className="pricing-one__inner">
                                    <img src={publicUrl + "assets/images/shapes/" + plan.image} alt={imagealt} />
                                    <div className="pricing-one__top">
                                        <h3>{plan.name}</h3>
                                        <p><span>$</span>{plan.price}</p>
                                    </div>
                                    <ul className="pricing-one__list list-unstyled">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} style={{ display: 'flex', alignItems: 'center' }}>
                                                <div><i className="far fa-check" /></div>
                                                <div dangerouslySetInnerHTML={{ __html: feature }} />
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

export default MobileApp;
