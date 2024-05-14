import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Book extends Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        let imagealt = 'image';


        return (
            <div className="tab-pane show active  animated fadeInUp" id="ebook">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="pricing-one__single">
                            <div className="pricing-one__inner">
                                <img src={publicUrl + "assets/images/shapes/pricing-i-1-1.png"} alt={imagealt} />
                                <div className="pricing-one__top">
                                    <h3>Startup</h3>
                                    <p><span>$</span>999</p>
                                </div>
                                <ul className="pricing-one__list list-unstyled">
                                    <li><i className="far fa-check" />Strategize and develop/update the book outline.</li>
                                    <li><i className="far fa-check" />Craft original content through ghostwriting, utilizing interviews or research.</li>
                                    <li><i className="far fa-check" />Ensure timely completion of your book in accordance with specified requirements.</li>
                                    <li><i className="far fa-check" />Implement revisions based on your feedback and guidance.</li>
                                    <li><i className="far fa-check" />Free Icon Design</li>
                                    <li><i className="far fa-check" />Conduct thorough editing to guarantee error-free text.</li>
                                    <li><i className="far fa-check" />Adjust layout and presentation to meet publishing standards.</li>
                                    <li><i className="far fa-check" />Include up to 5 custom illustrations.</li>
                                    <li><i className="far fa-check" />Offer unlimited revisions to meet your satisfaction.</li>
                                    <li><i className="far fa-check" />Guarantee a turnaround time of 45-90 days.</li>
                                    <li><i className="far fa-check" />Provide complete ownership rights for making changes to your book.</li>
                                    <li><i className="far fa-check" />Handle editing, proofreading, and formatting.</li>
                                    <li><i className="far fa-check" />Receive a complimentary book cover as part of the package.</li>
                                </ul>
                                <a href="#" className="thm-btn pricing-one__btn">Let's Chat<i className="fa fa-angle-double-right" /></a>{/* /.thm-btn pricing-one__btn */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="pricing-one__single">
                            <div className="pricing-one__inner">
                                {/* <span className="pricing-one__corner-ribbon">Best</span> */}

                                <img src={publicUrl + "assets/images/shapes/pricing-i-1-2.png"} alt={imagealt} />
                                <div className="pricing-one__top">
                                    <h3>Regular</h3>
                                    <p><span>$</span>1499</p>
                                </div>
                                <ul className="pricing-one__list list-unstyled">
                                    <li><i className="far fa-check" />Develop or update the book outline through strategic planning.</li>
                                    <li><i className="far fa-check" />Craft original content through ghostwriting,  drawing from interviews or research.</li>
                                    <li><i className="far fa-check" />Ensure the timely completion of your book, adhering to specified requirements and outline.</li>
                                    <li><i className="far fa-check" />Incorporate revisions based on your feedback and guidance.</li>
                                    <li><i className="far fa-check" />Conduct meticulous editing to guarantee an error-free text.</li>
                                    <li><i className="far fa-check" />Adjust the layout and presentation to meet publishing standards.</li>
                                    <li><i className="far fa-check" />Include up to 5 custom illustrations.</li>
                                    <li><i className="far fa-check" />Provide unlimited revisions to ensure your satisfaction.</li>
                                    <li><i className="far fa-check" />Design an attention-grabbing book cover.</li>
                                    <li><i className="far fa-check" />Guarantee a turnaround time of 45-90 days.</li>
                                    <li><i className="far fa-check" />Grant complete ownership rights for making changes to your book.</li>
                                    <li><i className="far fa-check" />Manage editing, proofreading, and formatting tasks.</li>
                                    <li><i className="far fa-check" />Facilitate publishing on Amazon and Kindle platforms.</li>
                                    <li><i className="far fa-check" />Release the book in three formats: eBook, Paperback, and Hardcover.</li>
                                </ul>
                                <a href="#" className="thm-btn pricing-one__btn">Let's Chat <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn pricing-one__btn */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="pricing-one__single">
                            <div className="pricing-one__inner">
                                <img src={publicUrl + "assets/images/shapes/pricing-i-1-3.png"} alt="pricing" />
                                <div className="pricing-one__top">
                                    <h3>Premium</h3>
                                    <p><span>$</span>2750</p>
                                </div>
                                <ul className="pricing-one__list list-unstyled">
                                    <li><i className="far fa-check" />Develop, create, or update the book outline through strategic planning.</li>
                                    <li><i className="far fa-check" />Craft original content through ghostwriting, incorporating interviews or research. </li>
                                    <li><i className="far fa-check" />Ensure the timely completion of your book in accordance with specified requirements and outline.</li>
                                    <li><i className="far fa-check" />500 Business Cards</li>
                                    <li><i className="far fa-check" />Implement revisions based on your feedback and guidance.</li>
                                    <li><i className="far fa-check" />Conduct meticulous editing to guarantee an error-free text.</li>
                                    <li><i className="far fa-check" />Adjust the layout and presentation to meet high publishing standards.</li>
                                    <li><i className="far fa-check" />Include up to 20 custom illustrations for a personalized touch.</li>
                                    <li><i className="far fa-check" />Provide unlimited revisions to ensure your complete satisfaction.</li>
                                    <li><i className="far fa-check" />Design a captivating book cover to enhance visual appeal.</li>
                                    <li><i className="far fa-check" />Guarantee a turnaround time of 45-90 days.</li>
                                    <li><i className="far fa-check" />Grant complete ownership rights for making changes to your book.</li>
                                    <li><i className="far fa-check" />Manage editing, proofreading, and formatting tasks.</li>
                                    <li><i className="far fa-check" />Establish an author's profile website for enhanced visibility.</li>
                                    <li><i className="far fa-check" />Conduct social media marketing on platforms such as Facebook, Twitter, and LinkedIn.</li>
                                    <li><i className="far fa-check" />Facilitate publishing on Amazon, Kindle, Barnes and Noble platforms.</li>
                                    <li><i className="far fa-check" />Release the book in three formats: eBook, Paperback, and Hardcover.</li>
                                </ul>
                                <a href="#" className="thm-btn pricing-one__btn">Let's Chat <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn pricing-one__btn */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Book;
