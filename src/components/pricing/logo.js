import React from 'react';

const Logo = () => {
    const publicUrl = process.env.PUBLIC_URL + '/';
    const imagealt = 'image';

    const plans = [
        {
            name: "Startup",
            price: 59,
            features: [
                "4 Original Logo Concepts",
                "2 Dedicated Logo Designer",
                "4 Revisions",
                "With Grey Scale Format",
                "Free Icon Design",
                "Bootstrap v5",
                "Formats: JPEG Only",
                "24 – 48 Business Hours Turn Around Time",
                "100% Ownership Rights",
                "Dedicated Account Manager"
            ],
            image: "pricing-i-1-1.png",
            buttons: [
                { text: "Order Now", class: "chatbtn1" },
                { text: "Let's Chat", class: "chatbtn" }
            ]
        },
        {
            name: "Regular",
            price: 199,
            features: [
                "12 Original Logo Concepts",
                "4 Dedicated Logo Designer",
                "Unlimited Revisions",
                "Stationery Design",
                "Email Signature Design",
                "With Grey Scale Format",
                "Free Icon Design",
                "Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG",
                "100% Satisfaction",
                "100% Ownership Rights",
                "Dedicated Account Manager",
                "24/7 Support"
            ],
            image: "pricing-i-1-2.png",
            buttons: [
                { text: "Order Now", class: "chatbtn1" },
                { text: "Let's Chat", class: "chatbtn" }
            ]
        },
        {
            name: "Premium",
            price: 399,
            features: [
                "Unlimited Original Logo Concepts",
                "8 Dedicated Logo Designer",
                "Stationery Design",
                "500 Business Cards",
                "Email Signature Design",
                "With Grey Scale Format",
                "Free Icon Design",
                "Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG",
                "24 – 48 Business Hours Turn Around Time",
                "100% Satisfaction",
                "100% Ownership Rights",
                "Dedicated Account Manager"
            ],
            image: "pricing-i-1-3.png",
            buttons: [
                { text: "Order Now", class: "chatbtn1" },
                { text: "Let's Chat", class: "chatbtn" }
            ]
        }
    ];

    return (
        <div className="tab-pane show active animated fadeInUp" id="logo">
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
                                            <a href="#" className={`thm-btn pricing-one__btn ${button.class}`}>{button.text} <i className="fa fa-angle-double-right" /></a>
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

export default Logo;
