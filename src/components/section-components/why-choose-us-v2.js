import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class WhyChooseUsV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <section className="cta-three  go-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 d-flex">
                  <div className="my-auto">
                    <div className="cta-three__image">
                      <img src={publicUrl+"assets/images/shapes/cta-3-1-shape.png" }alt={ imagealt } className="cta-three__image-shape" />
                      <img src={publicUrl+"assets/images/resources/cta-3-1.jpg"} alt={ imagealt } />
                    </div>{/* /.cta-three__image */}
                  </div>{/* /.my-auto */}
                </div>{/* /.col-lg-7 */}
                <div className="col-lg-5">
                  <div className="cta-three__content  go-top">
                    <div className="block-title-two text-left">
                      <p>why choose us</p>
                      <h3>We Are Exclusive <br /> Solution Agency</h3>
                    </div>{/* /.block-title-two */}
                    <div className="cta-three__box-wrap">
                      <div className="cta-three__box">
                        <div className="cta-three__box-icon">
                          <i className="far fa-tachometer" />
                        </div>{/* /.cta-three__icon */}
                        <div className="cta-three__box-content">
                          <h3>Business Strategy</h3>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor
                            incididunt ut labore et </p>
                        </div>{/* /.cta-three__box-content */}
                      </div>{/* /.cta-three__box */}
                      <div className="cta-three__box">
                        <div className="cta-three__box-icon">
                          <i className="far fa-star-of-david" />
                        </div>{/* /.cta-three__icon */}
                        <div className="cta-three__box-content">
                          <h3>Improve Business Growth</h3>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor
                            incididunt ut labore et </p>
                        </div>{/* /.cta-three__box-content */}
                      </div>{/* /.cta-three__box */}
                      <div className="cta-three__box">
                        <div className="cta-three__box-icon">
                          <i className="fa fa-desktop" />
                        </div>{/* /.cta-three__icon */}
                        <div className="cta-three__box-content">
                          <h3>Marketing Yor Business</h3>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor
                            incididunt ut labore et </p>
                        </div>{/* /.cta-three__box-content */}
                      </div>{/* /.cta-three__box */}
                    </div>{/* /.cta-three__box-wrap */}
                    <Link to="/service" className="thm-btn cta-three__btn">Get Started <i className="fa fa-angle-double-right" /></Link>
                    {/* /.thm-btn cta-three__btn */}
                  </div>{/* /.cta-three__content */}
                </div>{/* /.col-lg-5 */}
              </div>{/* /.row */}
            </div>{/* /.container */}
          </section>


        }
}

export default WhyChooseUsV2