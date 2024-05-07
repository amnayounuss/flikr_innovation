import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class FaqV3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <section className="faq-one faq-one__faq-page">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="faq-one__block">
                  <div className="block-title-two text-left">
                    <h3>About Our Comapny</h3>
                    <span>Know Something Us. We Are Professional</span>
                  </div>{/* /.block-title-two */}
                  <div className="accrodion-grp" data-grp-name="faq-one-accrodion">
                    <div className="accrodion ">
                      <div className="accrodion-title">
                        <h4>Monthly Web Development Update Just-In-Time ?</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>But we dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incie
                            didunt ut labore et dolore magna aliqua. Ut enim ad minim venam quis notrud
                            exercitation ullamco laboris nisi aliquip commodo consequat.</p>
                        </div>{/* /.inner */}
                      </div>
                    </div>
                    <div className="accrodion active">
                      <div className="accrodion-title">
                        <h4>Monthly Web Development Update Design ?</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>But we dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incie
                            didunt ut labore et dolore magna aliqua. Ut enim ad minim venam quis notrud
                            exercitation ullamco laboris nisi aliquip commodo consequat.</p>
                        </div>{/* /.inner */}
                      </div>
                    </div>
                    <div className="accrodion">
                      <div className="accrodion-title">
                        <h4>Splicing HTML’s DNA With CSS Attribute Selectors ?</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>But we dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incie
                            didunt ut labore et dolore magna aliqua. Ut enim ad minim venam quis notrud
                            exercitation ullamco laboris nisi aliquip commodo consequat.</p>
                        </div>{/* /.inner */}
                      </div>
                    </div>
                    <div className="accrodion">
                      <div className="accrodion-title">
                        <h4>Headless WordPress: The Ups And Downs Of Creating ?</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>But we dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incie
                            didunt ut labore et dolore magna aliqua. Ut enim ad minim venam quis notrud
                            exercitation ullamco laboris nisi aliquip commodo consequat.</p>
                        </div>{/* /.inner */}
                      </div>
                    </div>
                  </div>
                </div>{/* /.faq-one__block */}
                <div className="faq-one__block">
                  <div className="block-title-two text-left">
                    <h3>About Our Carrier</h3>
                    <span>Know Something Us. We Are Professional</span>
                  </div>{/* /.block-title-two */}
                  <div className="accrodion-grp" data-grp-name="faq-two-accrodion">
                    <div className="accrodion ">
                      <div className="accrodion-title">
                        <h4>Monthly Web Development Update Just-In-Time ?</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>But we dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incie
                            didunt ut labore et dolore magna aliqua. Ut enim ad minim venam quis notrud
                            exercitation ullamco laboris nisi aliquip commodo consequat.</p>
                        </div>{/* /.inner */}
                      </div>
                    </div>
                    <div className="accrodion active">
                      <div className="accrodion-title">
                        <h4>Monthly Web Development Update Design ?</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>But we dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incie
                            didunt ut labore et dolore magna aliqua. Ut enim ad minim venam quis notrud
                            exercitation ullamco laboris nisi aliquip commodo consequat.</p>
                        </div>{/* /.inner */}
                      </div>
                    </div>
                    <div className="accrodion">
                      <div className="accrodion-title">
                        <h4>Splicing HTML’s DNA With CSS Attribute Selectors ?</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>But we dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incie
                            didunt ut labore et dolore magna aliqua. Ut enim ad minim venam quis notrud
                            exercitation ullamco laboris nisi aliquip commodo consequat.</p>
                        </div>{/* /.inner */}
                      </div>
                    </div>
                    <div className="accrodion">
                      <div className="accrodion-title">
                        <h4>Headless WordPress: The Ups And Downs Of Creating ?</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>But we dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incie
                            didunt ut labore et dolore magna aliqua. Ut enim ad minim venam quis notrud
                            exercitation ullamco laboris nisi aliquip commodo consequat.</p>
                        </div>{/* /.inner */}
                      </div>
                    </div>
                  </div>
                </div>{/* /.faq-one__block */}
              </div>{/* /.col-lg-8 */}
              <div className="col-lg-4">
                <div className="faq-one__form-wrap">
                  <form action="#" className="contact-one__form">
                    <h3>Plase Fill Up The Form To Contact With Us</h3>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="contact-one__input-group">
                          <i className="contact-one__input-icon far fa-user" />
                          <input type="text" placeholder="Your Full Name" />
                        </div>{/* /.contact-one__input-group */}
                      </div>{/* /.col-lg-6 */}
                      <div className="col-lg-12">
                        <div className="contact-one__input-group">
                          <i className="contact-one__input-icon far fa-envelope" />
                          <input type="text" placeholder="Your Email " />
                        </div>{/* /.contact-one__input-group */}
                      </div>{/* /.col-lg-6 */}
                      <div className="col-lg-12">
                        <div className="contact-one__input-group">
                          <select className="selectpicker">
                            <option value>Your Subject</option>
                            <option value="#">Query For Pricing</option>
                            <option value>Query For Busniess</option>
                          </select>{/* /.selectpicker */}
                        </div>{/* /.contact-one__input-group */}
                      </div>{/* /.col-lg-6 */}
                      <div className="col-lg-12">
                        <div className="contact-one__input-group">
                          <i className="contact-one__input-icon far fa-phone" />
                          <input type="text" placeholder="Your Phone" />
                        </div>{/* /.contact-one__input-group */}
                      </div>{/* /.col-lg-6 */}
                      <div className="col-lg-12">
                        <div className="contact-one__input-group">
                          <i className="contact-one__input-icon far fa-pencil-alt" />
                          <textarea placeholder="Write Message" defaultValue={""} />
                        </div>{/* /.contact-one__input-group */}
                      </div>{/* /.col-lg-12 */}
                      <div className="col-lg-12">
                        <button type="submit" className="thm-btn contact-one__form-btn">Send Message <i className="fa fa-angle-double-right" /></button>
                        {/* /.thm-btn contact-one__form-btn */}
                      </div>{/* /.col-lg-12 */}
                    </div>{/* /.row */}
                  </form>{/* /.contact-one__form */}
                </div>{/* /.faq-one__form-wrap */}
              </div>{/* /.col-lg-4 */}
            </div>{/* /.row */}
          </div>{/* /.container */}
        </section>


        }
}

export default FaqV3