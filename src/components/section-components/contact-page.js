import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import emailjs from 'emailjs-com';

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			subject: '',
			message: ''
		};
		this.formRef = React.createRef();
	}

	handleInputChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	}

	sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm('service_4m6ok65', 'template_rgyp6wg', this.formRef.current, 'vC6T0jDA8CeeqTtU8')
			.then(
				(result) => {
					console.log('SUCCESS!', result.text);
					// Reset the form fields after successful submission
					this.setState({
						name: '',
						email: '',
						subject: '',
						message: ''
					});
				},
				(error) => {
					console.log('FAILED...', error.text);
				}
			);
	};

	render() {
		let publicUrl = process.env.PUBLIC_URL + '/';

		return (
			<div>
				<section className="contact-two">
					<div className="container">
						<div className="row">
							<div className="col-lg-5">
								<div className="contact-two__content">
									<div className="contact-two__block">
										<h3>Don't Hesitate To Contact Us</h3>
									</div>
									<ul className="list-unstyled contact-two__info-list">
										<li>
											<div className="contact-two__info-list-title">
												<i className="far fa-map-marked" />
												Address :
											</div>
											<p>123 Street, NY, USA</p>
										</li>
										<li>
											<div className="contact-two__info-list-title">
												<i className="far fa-phone" />
												Call Us :
											</div>
											<p><a href="tel:08964712365">+1 (917) 732 0181</a></p>
										</li>
										<li>
											<div className="contact-two__info-list-title">
												<i className="far fa-envelope" />
												Email Us :
											</div>
											<p><a href="mailto:support@gmail.com">info@flikrinnovation.com</a></p>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-7">
								<form ref={this.formRef} onSubmit={this.sendEmail} className="contact-two__form">
									<div className="contact-two__block">
										<h3>Get In Touch</h3>
									</div>
									<div className="row">
										<div className="col-md-6">
											<input type="text" placeholder="Full Name" name="name" value={this.state.name} onChange={this.handleInputChange} />
										</div>
										<div className="col-md-6">
											<input type="text" placeholder="Email Address" name="email" value={this.state.email} onChange={this.handleInputChange} />
										</div>
										<div className="col-md-12">
											<input type="text" placeholder="Subject" name="subject" value={this.state.subject} onChange={this.handleInputChange} />
										</div>
										<div className="col-md-12">
											<textarea name="message" placeholder="Message" value={this.state.message} onChange={this.handleInputChange} />
											<button type="submit" className="thm-btn contact-two__btn">Send Message <i className="fa fa-angle-double-right" /></button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</section>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" className="google-map__contact" allowFullScreen />
			</div>
		);
	}
}

export default Contact;
