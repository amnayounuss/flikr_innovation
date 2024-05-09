import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class FreeQuoteV1 extends Component {

  render() {

      let publicUrl = process.env.PUBLIC_URL+'/';
      let imagealt = 'image';

      return (
          <section className="faq-one faq-one__faq-page">
              <div className="container">
                  <div className="row">
                  <div className='col-lg-3'></div>
                      <div className="col-lg-6" style={{border:' 1px solid grey', padding: '0px 50px 50px 50px'}}>
                          <div className="faq-one__form-wrap">
                              <form action="#" className="contact-one__form">
                                  <h3>Let’s Create Something Extraordinary Together</h3>
                                  <div className="row">
                                      <div className="col-lg-12">
                                          <div className="contact-one__input-group">
                                              <i className="contact-one__input-icon far fa-user" />
                                              <input type="text" placeholder="Your Full Name" />
                                          </div>
                                      </div>
                                      <div className="col-lg-12">
                                          <div className="contact-one__input-group">
                                              <i className="contact-one__input-icon far fa-envelope" />
                                              <input type="text" placeholder="Your Email " />
                                          </div>
                                      </div>
                                      <div className="col-lg-12">
                                          <div className="contact-one__input-group">
                                              <select className="selectpicker">
                                                  <option value="" disabled>Select a Service</option>
                                                  <option value="website-development">Website Development</option>
                                                  <option value="logo-design">Logo Design</option>
                                                  <option value="ebook">E-Book</option>
                                                  <option value="mobile-app">Mobile App</option>
                                                  <option value="seo">SEO</option>
                                                  <option value="marketing">Marketing</option>
                                              </select>
                                          </div>
                                      </div>
                                      <div className="col-lg-12">
                                          <div className="contact-one__input-group">
                                              <i className="contact-one__input-icon far fa-phone" />
                                              <input type="text" placeholder="Your Phone" />
                                          </div>
                                      </div>
                                      <div className="col-lg-12">
                                          <div className="contact-one__input-group">
                                              <i className="contact-one__input-icon far fa-pencil-alt" />
                                              <textarea placeholder="Write Message" defaultValue={""} />
                                          </div>
                                      </div>
                                      <div className="col-lg-12">
                                          <button type="submit" className="thm-btn contact-one__form-btn">Send Message <i className="fa fa-angle-double-right" /></button>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      );
  }
}

export default FreeQuoteV1;
