import React, { Component } from 'react';

class Book extends Component {
    render() {
        const publicUrl = process.env.PUBLIC_URL + '/';
        const imagealt = 'image';

        const plans = [
            {
                name: "Startup",
                price: 999,
                features: [
                    "Strategize and develop/update the book outline.",
                    "Craft original content through ghostwriting, utilizing interviews or research.",
                    "Ensure timely completion of your book in accordance with specified requirements.",
                    "Implement revisions based on your feedback and guidance.",
                    "Free Icon Design",
                    "Conduct thorough editing to guarantee error-free text.",
                    "Adjust layout and presentation to meet publishing standards.",
                    "Include up to 5 custom illustrations.",
                    "Offer unlimited revisions to meet your satisfaction.",
                    "Guarantee a turnaround time of 45-90 days.",
                    "Provide complete ownership rights for making changes to your book.",
                    "Handle editing, proofreading, and formatting.",
                    "Receive a complimentary book cover as part of the package."
                ],
                image: "pricing-i-1-1.png"
            },
            {
                name: "Regular",
                price: 1499,
                features: [
                    "Develop or update the book outline through strategic planning.",
                    "Craft original content through ghostwriting, drawing from interviews or research.",
                    "Ensure the timely completion of your book, adhering to specified requirements and outline.",
                    "Incorporate revisions based on your feedback and guidance.",
                    "Conduct meticulous editing to guarantee an error-free text.",
                    "Adjust the layout and presentation to meet publishing standards.",
                    "Include up to 5 custom illustrations.",
                    "Provide unlimited revisions to ensure your satisfaction.",
                    "Design an attention-grabbing book cover.",
                    "Guarantee a turnaround time of 45-90 days.",
                    "Grant complete ownership rights for making changes to your book.",
                    "Manage editing, proofreading, and formatting tasks.",
                    "Facilitate publishing on Amazon and Kindle platforms.",
                    "Release the book in three formats: eBook, Paperback, and Hardcover."
                ],
                image: "pricing-i-1-2.png"
            },
            {
                name: "Premium",
                price: 2750,
                features: [
                    "Develop, create, or update the book outline through strategic planning.",
                    "Craft original content through ghostwriting, incorporating interviews or research.",
                    "Ensure the timely completion of your book in accordance with specified requirements and outline.",
                    "500 Business Cards",
                    "Implement revisions based on your feedback and guidance.",
                    "Conduct meticulous editing to guarantee an error-free text.",
                    "Adjust the layout and presentation to meet high publishing standards.",
                    "Include up to 20 custom illustrations for a personalized touch.",
                    "Provide unlimited revisions to ensure your complete satisfaction.",
                    "Design a captivating book cover to enhance visual appeal.",
                    "Guarantee a turnaround time of 45-90 days.",
                    "Grant complete ownership rights for making changes to your book.",
                    "Manage editing, proofreading, and formatting tasks.",
                    "Establish an author's profile website for enhanced visibility.",
                    "Conduct social media marketing on platforms such as Facebook, Twitter, and LinkedIn.",
                    "Facilitate publishing on Amazon, Kindle, Barnes and Noble platforms.",
                    "Release the book in three formats: eBook, Paperback, and Hardcover."
                ],
                image: "pricing-i-1-3.png"
            }
        ];

        return (
            <div className="tab-pane show active animated fadeInUp" id="ebook">
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

export default Book;
