import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Content extends Component {
    openChat = (e) => {
        e.preventDefault();
        if (window.Tawk_API && window.Tawk_API.maximize) {
            window.Tawk_API.maximize();
        }
    };

    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        let imagealt = 'image';
        const plans = [
            {
                name: "Startup",
                price: 299,
                features: [
                    "Up to 5 Pages",
                    "Quantity Per Web Pages Writing (500-600 Words)",
                    "Research Into Your Company, Target Audience, Industry, Etc.",
                    "Keyword Optimized Content",
                    "Title Tags and Meta Descriptions",
                    "Professional Copy Editing And Proofreading",
                    "Plagiarism Checking",
                    "SEO Optimized Content",
                    "H1 & H2 Headings Optimized",
                    "NLP Optimize Content",
                    "E-A-T Optimize Content",
                    "Deliverable: Google Docs Or MS Word"
                ],
                image: "pricing-i-1-1.png",
                buttons: [
                    { text: "Order Now", class: "chatbtn1" },
                    { text: "Let's Chat", class: "chatbtn" }
                ]
            },
            {
                name: "Regular",
                price: 599,
                features: [
                    "Up to 10 Pages",
                    "Quantity Per Web Pages Writing (500-600 Words)",
                    "Research Into Your Company, Target Audience, Industry, Etc.",
                    "Keyword Optimized Content",
                    "Title Tags and Meta Descriptions",
                    "Professional Copy Editing And Proofreading",
                    "Plagiarism Checking",
                    "SEO Optimized Content",
                    "H1 & H2 Headings Optimized",
                    "NLP Optimize Content",
                    "E-A-T Optimize Content",
                    "Deliverable: Google Docs Or MS Word"
                ],
                image: "pricing-i-1-2.png",
                buttons: [
                    { text: "Order Now", class: "chatbtn1" },
                    { text: "Let's Chat", class: "chatbtn" }
                ]
            },
            {
                name: "Premium",
                price: 999,
                features: [
                    "Up to 20 Pages",
                    "Quantity Per Web Pages Writing (500-600 Words)",
                    "Research Into Your Company, Target Audience, Industry, Etc.",
                    "Keyword Optimized Content",
                    "Title Tags and Meta Descriptions",
                    "Professional Copy Editing And Proofreading",
                    "Plagiarism Checking",
                    "SEO Optimized Content",
                    "H1 & H2 Headings Optimized",
                    "NLP Optimize Content",
                    "E-A-T Optimize Content",
                    "Deliverable: Google Docs Or MS Word"
                ],
                image: "pricing-i-1-3.png",
                buttons: [
                    { text: "Order Now", class: "chatbtn1" },
                    { text: "Let's Chat", class: "chatbtn" }
                ]
            }
        ];

        return (
            <div className="tab-pane show active animated fadeInUp" id="writing">
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
                                                {button.class === 'chatbtn' ? (
                                                    <button onClick={this.openChat} className={`thm-btn pricing-one__btn ${button.class}`}>
                                                        {button.text} <i className="fa fa-angle-double-right" />
                                                    </button>
                                                ) : (
                                                    <Link to="/free-quote" className={`thm-btn pricing-one__btn ${button.class}`}>
                                                        {button.text} <i className="fa fa-angle-double-right" />
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

export default Content;
