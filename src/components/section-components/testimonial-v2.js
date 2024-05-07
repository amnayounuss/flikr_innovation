import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class TestimonialV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let CustomClass = this.props.CustomClass ? this.props.CustomClass : ''

    return  <section className={"testimonials-two "+CustomClass}>
			  <div className="container">
			    <div className="block-title-two text-center">
			      <p>our testimonials</p>
			      <h3>What Our Client’s <br /> Say About Us</h3>
			    </div>{/* /.block-title-two */}
			    <div className="testimonials-two__carousel owl-carousel thm__owl-carousel owl-theme" data-options="{&quot;loop&quot;: true, &quot;margin&quot;: 30, &quot;stagePadding&quot;: 0, &quot;items&quot;: 3, &quot;smartSpeed&quot;: 700, &quot;autoplay&quot;: true, &quot;autoplayTimeout&quot;: 7000, &quot;nav&quot;: false, &quot;dots&quot;: true, &quot;responsive&quot;: { &quot;0&quot;: { &quot;items&quot;: 1, &quot;stagePadding&quot;: 0 }, &quot;1199&quot;: { &quot;items&quot;: 2 }, &quot;1200&quot;: { &quot;items&quot;: 3 } }}">
			      <div className="item">
			        <div className="testimonials-two__single">
			          <div className="testimonials-two__top">
			            <div className="testimonials-two__image">
			              <img src={publicUrl+"assets/images/testimonials/testimonial-2-1.jpg"} alt={ imagealt } />
			            </div>{/* /.testimonials-two__image */}
			            <div className="testimonials-two__top-content">
			              <h3>Teresa Barber</h3>
			              <span>CEO &amp; Founder</span>
			            </div>{/* /.testimonials-two__top-content */}
			          </div>{/* /.testimonials-two__top */}
			          <div className="testimonials-two__content">
			            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incid
			              idunt ut labore et dolore magna aliqua. Ut enim ad minim venquis nostrud exercitation
			              ullamco laboris nisi ut aliquip</p>
			          </div>{/* /.testimonials-two__content */}
			          <div className="testimonials-two__bottom">
			            <i className="far fa-quote-right testimonials-two__qoute-icon" />
			            <div className="testimonials-two__stars">
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			            </div>{/* /.testimonials-two__stars */}
			          </div>{/* /.testimonials-two__bottom */}
			        </div>{/* /.testimonials-two__single */}
			      </div>{/* /.item */}
			      <div className="item">
			        <div className="testimonials-two__single">
			          <div className="testimonials-two__top">
			            <div className="testimonials-two__image">
			              <img src={publicUrl+"assets/images/testimonials/testimonial-2-2.jpg"} alt={ imagealt } />
			            </div>{/* /.testimonials-two__image */}
			            <div className="testimonials-two__top-content">
			              <h3>Peter Allen</h3>
			              <span>CEO &amp; Founder</span>
			            </div>{/* /.testimonials-two__top-content */}
			          </div>{/* /.testimonials-two__top */}
			          <div className="testimonials-two__content">
			            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incid
			              idunt ut labore et dolore magna aliqua. Ut enim ad minim venquis nostrud exercitation
			              ullamco laboris nisi ut aliquip</p>
			          </div>{/* /.testimonials-two__content */}
			          <div className="testimonials-two__bottom">
			            <i className="far fa-quote-right testimonials-two__qoute-icon" />
			            <div className="testimonials-two__stars">
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			            </div>{/* /.testimonials-two__stars */}
			          </div>{/* /.testimonials-two__bottom */}
			        </div>{/* /.testimonials-two__single */}
			      </div>{/* /.item */}
			      <div className="item">
			        <div className="testimonials-two__single">
			          <div className="testimonials-two__top">
			            <div className="testimonials-two__image">
			              <img src={publicUrl+"assets/images/testimonials/testimonial-2-3.jpg"} alt={ imagealt } />
			            </div>{/* /.testimonials-two__image */}
			            <div className="testimonials-two__top-content">
			              <h3>Rosetta Herrera</h3>
			              <span>CEO &amp; Founder</span>
			            </div>{/* /.testimonials-two__top-content */}
			          </div>{/* /.testimonials-two__top */}
			          <div className="testimonials-two__content">
			            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incid
			              idunt ut labore et dolore magna aliqua. Ut enim ad minim venquis nostrud exercitation
			              ullamco laboris nisi ut aliquip</p>
			          </div>{/* /.testimonials-two__content */}
			          <div className="testimonials-two__bottom">
			            <i className="far fa-quote-right testimonials-two__qoute-icon" />
			            <div className="testimonials-two__stars">
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			            </div>{/* /.testimonials-two__stars */}
			          </div>{/* /.testimonials-two__bottom */}
			        </div>{/* /.testimonials-two__single */}
			      </div>{/* /.item */}
			      <div className="item">
			        <div className="testimonials-two__single">
			          <div className="testimonials-two__top">
			            <div className="testimonials-two__image">
			              <img src={publicUrl+"assets/images/testimonials/testimonial-2-1.jpg"} alt={ imagealt } />
			            </div>{/* /.testimonials-two__image */}
			            <div className="testimonials-two__top-content">
			              <h3>Alejandro Cannon</h3>
			              <span>CEO &amp; Founder</span>
			            </div>{/* /.testimonials-two__top-content */}
			          </div>{/* /.testimonials-two__top */}
			          <div className="testimonials-two__content">
			            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incid
			              idunt ut labore et dolore magna aliqua. Ut enim ad minim venquis nostrud exercitation
			              ullamco laboris nisi ut aliquip</p>
			          </div>{/* /.testimonials-two__content */}
			          <div className="testimonials-two__bottom">
			            <i className="far fa-quote-right testimonials-two__qoute-icon" />
			            <div className="testimonials-two__stars">
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			            </div>{/* /.testimonials-two__stars */}
			          </div>{/* /.testimonials-two__bottom */}
			        </div>{/* /.testimonials-two__single */}
			      </div>{/* /.item */}
			      <div className="item">
			        <div className="testimonials-two__single">
			          <div className="testimonials-two__top">
			            <div className="testimonials-two__image">
			              <img src={publicUrl+"assets/images/testimonials/testimonial-2-2.jpg"} alt={ imagealt } />
			            </div>{/* /.testimonials-two__image */}
			            <div className="testimonials-two__top-content">
			              <h3>Addie Bass</h3>
			              <span>CEO &amp; Founder</span>
			            </div>{/* /.testimonials-two__top-content */}
			          </div>{/* /.testimonials-two__top */}
			          <div className="testimonials-two__content">
			            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incid
			              idunt ut labore et dolore magna aliqua. Ut enim ad minim venquis nostrud exercitation
			              ullamco laboris nisi ut aliquip</p>
			          </div>{/* /.testimonials-two__content */}
			          <div className="testimonials-two__bottom">
			            <i className="far fa-quote-right testimonials-two__qoute-icon" />
			            <div className="testimonials-two__stars">
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			            </div>{/* /.testimonials-two__stars */}
			          </div>{/* /.testimonials-two__bottom */}
			        </div>{/* /.testimonials-two__single */}
			      </div>{/* /.item */}
			      <div className="item">
			        <div className="testimonials-two__single">
			          <div className="testimonials-two__top">
			            <div className="testimonials-two__image">
			              <img src="assets/images/testimonials/testimonial-2-3.jpg" alt={ imagealt } />
			            </div>{/* /.testimonials-two__image */}
			            <div className="testimonials-two__top-content">
			              <h3>Emily Hale</h3>
			              <span>CEO &amp; Founder</span>
			            </div>{/* /.testimonials-two__top-content */}
			          </div>{/* /.testimonials-two__top */}
			          <div className="testimonials-two__content">
			            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incid
			              idunt ut labore et dolore magna aliqua. Ut enim ad minim venquis nostrud exercitation
			              ullamco laboris nisi ut aliquip</p>
			          </div>{/* /.testimonials-two__content */}
			          <div className="testimonials-two__bottom">
			            <i className="far fa-quote-right testimonials-two__qoute-icon" />
			            <div className="testimonials-two__stars">
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			            </div>{/* /.testimonials-two__stars */}
			          </div>{/* /.testimonials-two__bottom */}
			        </div>{/* /.testimonials-two__single */}
			      </div>{/* /.item */}
			      <div className="item">
			        <div className="testimonials-two__single">
			          <div className="testimonials-two__top">
			            <div className="testimonials-two__image">
			              <img src={publicUrl+"assets/images/testimonials/testimonial-2-1.jpg"} alt={ imagealt } />
			            </div>{/* /.testimonials-two__image */}
			            <div className="testimonials-two__top-content">
			              <h3>Leon Blake</h3>
			              <span>CEO &amp; Founder</span>
			            </div>{/* /.testimonials-two__top-content */}
			          </div>{/* /.testimonials-two__top */}
			          <div className="testimonials-two__content">
			            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incid
			              idunt ut labore et dolore magna aliqua. Ut enim ad minim venquis nostrud exercitation
			              ullamco laboris nisi ut aliquip</p>
			          </div>{/* /.testimonials-two__content */}
			          <div className="testimonials-two__bottom">
			            <i className="far fa-quote-right testimonials-two__qoute-icon" />
			            <div className="testimonials-two__stars">
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			            </div>{/* /.testimonials-two__stars */}
			          </div>{/* /.testimonials-two__bottom */}
			        </div>{/* /.testimonials-two__single */}
			      </div>{/* /.item */}
			      <div className="item">
			        <div className="testimonials-two__single">
			          <div className="testimonials-two__top">
			            <div className="testimonials-two__image">
			              <img src={publicUrl+"assets/images/testimonials/testimonial-2-2.jpg"} alt={ imagealt } />
			            </div>{/* /.testimonials-two__image */}
			            <div className="testimonials-two__top-content">
			              <h3>James Marsh</h3>
			              <span>CEO &amp; Founder</span>
			            </div>{/* /.testimonials-two__top-content */}
			          </div>{/* /.testimonials-two__top */}
			          <div className="testimonials-two__content">
			            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incid
			              idunt ut labore et dolore magna aliqua. Ut enim ad minim venquis nostrud exercitation
			              ullamco laboris nisi ut aliquip</p>
			          </div>{/* /.testimonials-two__content */}
			          <div className="testimonials-two__bottom">
			            <i className="far fa-quote-right testimonials-two__qoute-icon" />
			            <div className="testimonials-two__stars">
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			            </div>{/* /.testimonials-two__stars */}
			          </div>{/* /.testimonials-two__bottom */}
			        </div>{/* /.testimonials-two__single */}
			      </div>{/* /.item */}
			      <div className="item">
			        <div className="testimonials-two__single">
			          <div className="testimonials-two__top">
			            <div className="testimonials-two__image">
			              <img src={publicUrl+"assets/images/testimonials/testimonial-2-3.jpg"} alt={ imagealt } />
			            </div>{/* /.testimonials-two__image */}
			            <div className="testimonials-two__top-content">
			              <h3>Dean Gibbs</h3>
			              <span>CEO &amp; Founder</span>
			            </div>{/* /.testimonials-two__top-content */}
			          </div>{/* /.testimonials-two__top */}
			          <div className="testimonials-two__content">
			            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incid
			              idunt ut labore et dolore magna aliqua. Ut enim ad minim venquis nostrud exercitation
			              ullamco laboris nisi ut aliquip</p>
			          </div>{/* /.testimonials-two__content */}
			          <div className="testimonials-two__bottom">
			            <i className="far fa-quote-right testimonials-two__qoute-icon" />
			            <div className="testimonials-two__stars">
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			            </div>{/* /.testimonials-two__stars */}
			          </div>{/* /.testimonials-two__bottom */}
			        </div>{/* /.testimonials-two__single */}
			      </div>{/* /.item */}
			    </div>{/* /.testimonials-two__carousel owl-carousel thm__owl-carousel owl-theme */}
			  </div>{/* /.container */}
			</section>

			 
        }
}

export default TestimonialV2