import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Contact extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <section className="contact-one">
			  <div className="container">
			    <div className="block-title-two text-center">
			      <p>get a quote</p>
			      <h3>Don't Hesitate To Contact <br /> With Us Get A Call</h3>
			    </div>{/* /.block-title-two */}
			    <div className="row">
			      <div className="col-lg-5">
			        <div className="contact-one__box" style={{backgroundImage: 'url('+publicUrl+'assets/images/resources/contact-1-1.jpg)'}}>
			          <div className="contact-one__box-inner">
			            <h3>Do You Have <br /> Any Questions?</h3>
			            <p>But we ipsum dolor sit amet consectetur adeisicing elit, sed do eiusmod tncididunt ut labore
			              et dolore magna aliqua</p>
			            <a href="#" className="thm-btn contact-one__box-btn">Contact Us <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn contact-one__box-btn */}
			          </div>{/* /.contact-one__box-inner */}
			        </div>{/* /.contact-one__box */}
			      </div>{/* /.col-lg-5 */}
			      <div className="col-lg-7 d-flex">
			        <div className="my-auto">
			          <form action="#" className="contact-one__form">
			            <h3>Plase Fill Up The Form To Contact With Us</h3>
			            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
			              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			            </p>
			            <div className="row">
			              <div className="col-lg-6">
			                <div className="contact-one__input-group">
			                  <i className="contact-one__input-icon far fa-user" />
			                  <input type="text" name="name" placeholder="Your Full Name" />
			                </div>{/* /.contact-one__input-group */}
			              </div>{/* /.col-lg-6 */}
			              <div className="col-lg-6">
			                <div className="contact-one__input-group">
			                  <i className="contact-one__input-icon far fa-envelope" />
			                  <input type="text" required name="email" placeholder="Your Email " />
			                </div>{/* /.contact-one__input-group */}
			              </div>{/* /.col-lg-6 */}
			              <div className="col-lg-6">
			                <div className="contact-one__input-group">
			                  <select className="selectpicker">
			                    <option value>Your Subject</option>
			                    <option value="#">Query For Pricing</option>
			                    <option value>Query For Busniess</option>
			                  </select>{/* /.selectpicker */}
			                </div>{/* /.contact-one__input-group */}
			              </div>{/* /.col-lg-6 */}
			              <div className="col-lg-6">
			                <div className="contact-one__input-group">
			                  <i className="contact-one__input-icon far fa-phone" />
			                  <input type="text" name="phone" placeholder="Your Phone" />
			                </div>{/* /.contact-one__input-group */}
			              </div>{/* /.col-lg-6 */}
			              <div className="col-lg-12">
			                <div className="contact-one__input-group">
			                  <i className="contact-one__input-icon far fa-pencil-alt" />
			                  <textarea name="message" required placeholder="Write Message" defaultValue={""} />
			                </div>{/* /.contact-one__input-group */}
			              </div>{/* /.col-lg-12 */}
			              <div className="col-lg-12">
			                <button type="submit" className="thm-btn contact-one__form-btn">Send Message <i className="fa fa-angle-double-right" /></button>
			                {/* /.thm-btn contact-one__form-btn */}
			              </div>{/* /.col-lg-12 */}
			            </div>{/* /.row */}
			          </form>{/* /.contact-one__form */}
			        </div>{/* /.my-auto */}
			      </div>{/* /.col-lg-7 */}
			    </div>{/* /.row */}
			  </div>{/* /.container */}
			</section>


        }
}

export default Contact