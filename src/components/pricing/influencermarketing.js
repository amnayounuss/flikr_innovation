import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Influencer extends Component {
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
                description: "Ideal for small businesses or startups looking for targeted exposure.",
                price: 449,
                features: [
                    "1 Instagram post (1 image or video)",
                    "1 Facebook post (with targeted audience boost)",
                    "1 Twitter post (with hashtags for increased visibility)",
                    "Basic analytics report (engagement, reach, and impressions)",
                    "1-week campaign duration",
                    "Content creation and scheduling",
                    "Social media engagement monitoring",
                    "Campaign optimization based on analytics"
                ],
                image: "pricing-i-1-1.png",
                buttons: [
                    { text: "Order Now", class: "chatbtn1" },
                    { text: "Let's Chat", class: "chatbtn" }
                ]
            },
            {
                name: "Regular",
                description: "Suitable for medium-sized businesses seeking broader audience engagement.",
                price: 749,
                features: [
                    "2 Instagram posts (with stories and swipe-up links)",
                    "2 Facebook posts (with targeted audience boost)",
                    "2 Twitter posts (with custom hashtags and retweets)",
                    "Advanced analytics report (detailed insights and demographics)",
                    "2-week campaign duration",
                    "Content creation and strategy planning",
                    "Social media influencer outreach",
                    "Cross-platform promotion and integration"
                ],
                image: "pricing-i-1-2.png",
                buttons: [
                    { text: "Order Now", class: "chatbtn1" },
                    { text: "Let's Chat", class: "chatbtn" }
                ]
            },
            {
                name: "Premium",
                description: "For large corporations or extensive campaigns aiming for maximum visibility.",
                price: 1199,
                features: [
                    "5 Instagram posts (with carousel albums and IGTV videos)",
                    "5 Facebook posts (with sponsored content and interactive polls)",
                    "5 Twitter posts (with trending hashtags and influencer shoutouts)",
                    "Comprehensive analytics report (in-depth analysis and competitor benchmarking)",
                    "1-month campaign duration",
                    "Full-service influencer marketing strategy",
                    "Influencer partnership management",
                    "Customized campaign content and branding"
                ],
                image: "pricing-i-1-3.png",
                buttons: [
                    { text: "Order Now", class: "chatbtn1" },
                    { text: "Let's Chat", class: "chatbtn" }
                ]
            }
        ];


        return (
            <div className="tab-pane show active animated fadeInUp" id="content">
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

export default Influencer;
