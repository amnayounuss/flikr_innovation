import React, { Component } from 'react';

class Animation extends Component {
    render() {
        const publicUrl = process.env.PUBLIC_URL + '/';
        const imagealt = 'image';

        const plans = [
            {
                name: "Startup",
                price: 749,
                features: [
                    "Custom Artwork",
                    "Hand-Drawn Character Illustrations",
                    "Script Writing",
                    "Professional Voiceover",
                    "Unlimited Storyboard Revisions",
                    "SFX & Background Music",
                    "Full HD Video Format",
                    "Dedicated Account Manager",
                ],
                image: "pricing-i-1-1.png"
            },
            {
                name: "Regular",
                price: 999,
                features: [
                    "Custom Artwork",
                    "Script Writing",
                    "Professional Voiceover",
                    "Unlimited Storyboard Revisions",
                    "3D Modeling",
                    "Texturing",
                    "Lighting",
                    "Rigging & Camera Setting",
                    "VFX & Animations",
                    "Music & Foley",
                    "Full HD Video Format",
                    "Dedicated Account Manager",
                ],
                image: "pricing-i-1-2.png"
            },
            {
                name: "Premium",
                price: 1499,
                features: [
                    "Custom Artwork",
                    "Script Writing",
                    "Professional Voiceover",
                    "Unlimited Storyboard Revisions",
                    "3D Modeling",
                    "Texturing",
                    "Lighting",
                    "Rigging & Camera Setting",
                    "VFX & Animations",
                    "Music & Foley",
                    "Full HD Video Format",
                    "Dedicated Account Manager",
                ],
                image: "pricing-i-1-3.png"
            }
        ];

        return (
            <div className="tab-pane show active animated fadeInUp" id="animation">
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

export default Animation;
