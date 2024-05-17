import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

class TestimonialOne extends Component {
    componentDidMount() {
        Aos.init({ duration: 2000, easing: 'ease-in-out', once: true, disable: false });

        const $ = window.$;
        if ($('.thm__owl-carousel').length) {
            $('.thm__owl-carousel').each(function () {
                var Self = $(this);
                var carouselOptions = Self.data('options');
                var carouselPrevSelector = Self.data('carousel-prev-btn');
                var carouselNextSelector = Self.data('carousel-next-btn');
                var thmCarousel = Self.owlCarousel(carouselOptions);
                if (carouselPrevSelector !== undefined) {
                    $(carouselPrevSelector).on('click', function () {
                        thmCarousel.trigger('prev.owl.carousel');
                        return false;
                    });
                }
                if (carouselNextSelector !== undefined) {
                    $(carouselNextSelector).on('click', function () {
                        thmCarousel.trigger('next.owl.carousel');
                        return false;
                    });
                }
            });
        }
    }

    render() {
        let publicUrl = process.env.PUBLIC_URL + '/'
        let imagealt = 'image'

        return (
            <section className="testimonials-one" style={{ marginTop: '50px' }}>
                <div className="container">
                    <div className="testimonials-one__top" data-aos="fade-up">
                        <div className="block-title text-left">
                            <p><span>Clients Say</span></p>
                            <h3>know Everything About <br /> Professional Skills</h3>
                            <div className="block-title__line" />
                        </div>
                        <div className="testimonials-one__carousel-btn__wrap">
                            <a href="#" className="testimonials-one__carousel-btn-left"><i className="fa fa-angle-double-left" /></a>
                            <a href="#" className="testimonials-one__carousel-btn-right"><i className="fa fa-angle-double-right" /></a>
                        </div>
                    </div>
                    <div className="testimonials-one__arrow-decor-wrap" data-aos="fade-right">
                        <i className="fa fa-angle-right" />
                        <i className="fa fa-angle-right" />
                        <i className="fa fa-angle-right" />
                        <i className="fa fa-angle-right" />
                    </div>
                    <div className="testimonials-one__carousel owl-carousel thm__owl-carousel owl-theme" data-carousel-prev-btn=".testimonials-one__carousel-btn-left" data-carousel-next-btn=".testimonials-one__carousel-btn-right" data-options="{&quot;loop&quot;: true, &quot;margin&quot;: 65, &quot;stagePadding&quot;: 50, &quot;items&quot;: 3, &quot;smartSpeed&quot;: 700, &quot;autoplay&quot;: true, &quot;autoplayTimeout&quot;: 7000, &quot;nav&quot;: false, &quot;dots&quot;: false, &quot;responsive&quot;: { &quot;0&quot;: { &quot;items&quot;: 1, &quot;stagePadding&quot;: 20 }, &quot;1199&quot;: { &quot;items&quot;: 2 }, &quot;1200&quot;: { &quot;items&quot;: 3 } }}">
                        <div className="item" data-aos="zoom-in">
                            <div className="testimonials-one__single">
                                <div className="testimonials-one__image">
                                    <img src={publicUrl + "assets/images/testimonials/testimonial-1-1.jpg"} alt={imagealt} />
                                </div>
                                <div className="testimonials-one__content">
                                    <p className='testimonialcontent'>I cannot express enough praise for Flikr Innovation. Throughout our project
                                        journey, from the first consultation to the final product delivery, their team
                                        consistently exceeded expectations. Their unparalleled expertise, meticulous
                                        attention to detail, and unwavering dedication to customer satisfaction distinguish
                                        them from the rest. We are delighted with the outcomes and eagerly anticipate
                                        collaborating with them on future ventures.</p>
                                    <h3>Katrina Taylor</h3>
                                    <span>CTO of Flikr Innovation</span>
                                    <i className="fa fa-quote-right testimonials-one__qoute-icon" />
                                </div>
                            </div>
                        </div>
                        <div className="item" data-aos="zoom-in" data-aos-delay="200">
                            <div className="testimonials-one__single">
                                <div className="testimonials-one__image">
                                    <img src={publicUrl + "assets/images/testimonials/testimonial-1-2.jpg"} alt={imagealt} />
                                </div>
                                <div className="testimonials-one__content">
                                    <p className='testimonialcontent'>Partnering with Flikr Innovations proved transformative for our business.
                                        Their team not only provided a resilient and intuitive solution but also
                                        showcased remarkable professionalism and responsiveness throughout the development journey.
                                        enthusiastically endorse their services to anyone seeking superior software solutions.</p>
                                    <h3> Steve Anderson</h3>
                                    <span>CEO of Flikr Innovations</span>
                                    <i className="fa fa-quote-right testimonials-one__qoute-icon" />
                                </div>
                            </div>
                        </div>
                        <div className="item" data-aos="zoom-in" data-aos-delay="400">
                            <div className="testimonials-one__single">
                                <div className="testimonials-one__image">
                                    <img src={publicUrl + "assets/images/testimonials/testimonial-1-3.jpg"} alt={imagealt} />
                                </div>
                                <div className="testimonials-one__content">
                                    <p className='testimonialcontent'>Flikr Innovation surpassed our expectations on all fronts.
                                        Their capacity to comprehend our distinct needs and transform them
                                        into a scalable software solution was remarkable. Thanks to their
                                        effective project management and transparent communication, the project
                                        was delivered on schedule and within budget. We are highly content with
                                        the results and wholeheartedly endorse their services to others. </p>
                                    <h3>Jofra Derik</h3>
                                    <span>COO of Flikr Innovation</span>
                                    <i className="fa fa-quote-right testimonials-one__qoute-icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default TestimonialOne;
