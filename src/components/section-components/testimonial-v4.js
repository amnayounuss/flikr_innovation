import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class TestimonialV4 extends Component {

	     componentDidMount() {

        const $ = window.$;
         if ($('.testimonials-three__carousel').length) {
            //Init the carousel
            initSlider();

            function initSlider() {
                $(".testimonials-three__carousel").owlCarousel({
                    items: 1,
                    loop: true,
                    dots: false,
                    nav: false,
                    autoplay: true,
                    onInitialized: startProgressBar,
                    onTranslate: resetProgressBar,
                    onTranslated: startProgressBar
                });
            }

            function startProgressBar() {
                // apply keyframe animation
                $(".testimonials-three__slide-progress span").css({
                    width: "100%",
                    transition: "width 5000ms"
                });
            }

            function resetProgressBar() {
                $(".testimonials-three__slide-progress span").css({
                    width: 0,
                    transition: "width 0s"
                });
            }
	        }

	    }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <section className="testimonials-three">
			  <div className="container">
			    <div className="testimonials-three__block text-center">
			      <h3>What Our Client’s Say</h3>
			      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam
			        <br /> rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae</p>
			    </div>{/* /.testimonials-three__block */}
			    <div className="testimonials-three__carousel owl-carousel owl-theme">
			      <div className="item">
			        <div className="testimonials-three__single">
			          <div className="row">
			            <div className="col-lg-5">
			              <div className="testimonials-three__image">
			                <img src={publicUrl+"assets/images/testimonials/testi-3-1.png"} alt={ imagealt } />
			              </div>{/* /.testimonials-three__image */}
			            </div>{/* /.col-lg-5 */}
			            <div className="col-lg-7 d-flex">
			              <div className="my-auto">
			                <div className="testimonials-three__content">
			                  <p>Sed ut perspiciatis unde omnis iste natus error sit volupta tem accusantium
			                    doloremque laudantium totam rem apeam eaque ipsa quae ab illo inventore
			                    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
			                    luptatem quia voluptas sit aspernatur aut odit aut.</p>
			                  <h3>Kuhka Likaz</h3>
			                  <span>Web Designer</span>
			                </div>{/* /.testimonials-three__content */}
			              </div>{/* /.my-auto */}
			            </div>{/* /.col-lg-7 */}
			          </div>{/* /.row */}
			        </div>{/* /.testimonials-three__single */}
			      </div>{/* /.item */}
			      <div className="item">
			        <div className="testimonials-three__single">
			          <div className="row">
			            <div className="col-lg-5">
			              <div className="testimonials-three__image">
			                <img src={publicUrl+"assets/images/testimonials/testi-3-1.png"} alt={ imagealt } />
			              </div>{/* /.testimonials-three__image */}
			            </div>{/* /.col-lg-5 */}
			            <div className="col-lg-7 d-flex">
			              <div className="my-auto">
			                <div className="testimonials-three__content">
			                  <p>Sed ut perspiciatis unde omnis iste natus error sit volupta tem accusantium
			                    doloremque laudantium totam rem apeam eaque ipsa quae ab illo inventore
			                    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
			                    luptatem quia voluptas sit aspernatur aut odit aut.</p>
			                  <h3>Kuhka Likaz</h3>
			                  <span>Web Designer</span>
			                </div>{/* /.testimonials-three__content */}
			              </div>{/* /.my-auto */}
			            </div>{/* /.col-lg-7 */}
			          </div>{/* /.row */}
			        </div>{/* /.testimonials-three__single */}
			      </div>{/* /.item */}
			      <div className="item">
			        <div className="testimonials-three__single">
			          <div className="row">
			            <div className="col-lg-5">
			              <div className="testimonials-three__image">
			                <img src={publicUrl+"assets/images/testimonials/testi-3-1.png"} alt={ imagealt } />
			              </div>{/* /.testimonials-three__image */}
			            </div>{/* /.col-lg-5 */}
			            <div className="col-lg-7 d-flex">
			              <div className="my-auto">
			                <div className="testimonials-three__content">
			                  <p>Sed ut perspiciatis unde omnis iste natus error sit volupta tem accusantium
			                    doloremque laudantium totam rem apeam eaque ipsa quae ab illo inventore
			                    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
			                    luptatem quia voluptas sit aspernatur aut odit aut.</p>
			                  <h3>Kuhka Likaz</h3>
			                  <span>Web Designer</span>
			                </div>{/* /.testimonials-three__content */}
			              </div>{/* /.my-auto */}
			            </div>{/* /.col-lg-7 */}
			          </div>{/* /.row */}
			        </div>{/* /.testimonials-three__single */}
			      </div>{/* /.item */}
			    </div>{/* /.testimonials-three__carousel owl-carousel thm__owl-carousel owl-theme */}
			    <div className="testimonials-three__slide-progress">
			      <span />
			    </div>{/* /.slide-progress */}
			  </div>{/* /.container */}
			</section>
        }
}

export default TestimonialV4