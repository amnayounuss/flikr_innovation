import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Faq extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <section className="faq-one">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 d-flex">
                  <div className="my-auto">
                    <div className="cta-three__image">
                      <img src={publicUrl+"assets/images/shapes/cta-3-1-shape-2.png"} alt={ imagealt } className="cta-three__image-shape" />
                      <img src={publicUrl+"assets/images/resources/cta-3-2.jpg"} alt={ imagealt } />
                    </div>{/* /.cta-three__image */}
                  </div>{/* /.my-auto */}
                </div>{/* /.col-lg-6 */}
                <div className="col-lg-6">
                  <div className="faq-one__block">
                    <div className="block-title-two text-left">
                      <h3>Frequently Asked <br /> Questions</h3>
                    </div>{/* /.block-title-two */}
                    <div className="accrodion-grp" data-grp-name="faq-one-accrodion">
                      <div className="accrodion active">
                        <div className="accrodion-title">
                          <h4>Monthly Web Development Update Just-In-Time ?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>But we dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incie didunt ut labore et dolore magna aliqua. Ut enim ad minim venam quis notrud exercitation ullamco laboris nisi aliquip commodo consequat.</p>
                          </div>{/* /.inner */}
                        </div>
                      </div>
                      <div className="accrodion ">
                        <div className="accrodion-title">
                          <h4>Monthly Web Development Update Design ?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>But we dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incie didunt ut labore et dolore magna aliqua. Ut enim ad minim venam quis notrud exercitation ullamco laboris nisi aliquip commodo consequat.</p>
                          </div>{/* /.inner */}
                        </div>
                      </div>
                      <div className="accrodion">
                        <div className="accrodion-title">
                          <h4>Splicing HTML’s DNA With CSS Attribute Selectors ?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>But we dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incie didunt ut labore et dolore magna aliqua. Ut enim ad minim venam quis notrud exercitation ullamco laboris nisi aliquip commodo consequat.</p>
                          </div>{/* /.inner */}
                        </div>
                      </div>
                      <div className="accrodion">
                        <div className="accrodion-title">
                          <h4>Headless WordPress: The Ups And Downs Of Creating ?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>But we dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incie didunt ut labore et dolore magna aliqua. Ut enim ad minim venam quis notrud exercitation ullamco laboris nisi aliquip commodo consequat.</p>
                          </div>{/* /.inner */}
                        </div>
                      </div>
                    </div>
                  </div>{/* /.faq-one__block */}
                </div>{/* /.col-lg-6 */}
              </div>{/* /.row */}
            </div>{/* /.container */}
          </section>
        }
}

export default Faq