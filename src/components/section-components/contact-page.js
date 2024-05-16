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
			message: '',
			popUpMessage: '', // New state for pop-up message
			popUpVisible: false // New state for pop-up visibility
		};
		this.formRef = React.createRef();
	}

	handleInputChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	}

	sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm('service_f2pd4c1', 'template_zzchn6m', this.formRef.current, 'DvbxUaRDB9psE-mBX')
			.then(
				(result) => {
					console.log('SUCCESS!', result.text);
					// Reset the form fields after successful submission
					this.setState({
						name: '',
						email: '',
						subject: '',
						message: '',
						popUpMessage: 'Form submitted successfully!', // Set success message
						popUpVisible: true // Show pop-up
					});

					// Hide the pop-up after 3 seconds
					setTimeout(() => {
						this.setState({ popUpVisible: false });
					}, 3000);
				},
				(error) => {
					console.log('FAILED...', error.text);
					this.setState({
						popUpMessage: 'Failed to submit the form. Please try again.', // Set error message
						popUpVisible: true // Show pop-up
					});

					// Hide the pop-up after 3 seconds
					setTimeout(() => {
						this.setState({ popUpVisible: false });
					}, 3000);
				}
			);
	};

	render() {
		const { popUpMessage, popUpVisible } = this.state;
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
											<p>341 S Grand Ave Los Angeles, CA 90071, USA</p>
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
											<input type="text" placeholder="Full Name" name="name" value={this.state.name} onChange={this.handleInputChange} required />
										</div>
										<div className="col-md-6">
											<input type="email" placeholder="Email Address" name="email" value={this.state.email} onChange={this.handleInputChange} required />
										</div>
										<div className="col-md-12">
											<input type="text" placeholder="Subject" name="subject" value={this.state.subject} onChange={this.handleInputChange} required />
										</div>
										<div className="col-md-12">
											<textarea name="message" placeholder="Message" value={this.state.message} onChange={this.handleInputChange} required />
											<button type="submit" className="thm-btn contact-two__btn">Send Message <i className="fa fa-angle-double-right" /></button>
										</div>
									</div>
								</form>
								{popUpVisible && <div className="pop-up-message">{popUpMessage}</div>}
							</div>
						</div>
					</div>
				</section>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.6713336700063!2d-118.25461532518545!3d34.052301017728716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c64ccf95d9db%3A0xde9c42a303d21f43!2s341%20S%20Grand%20Ave%2C%20Los%20Angeles%2C%20CA%2090071%2C%20USA!5e0!3m2!1sen!2s!4v1715899880737!5m2!1sen!2s" className="google-map__contact" allowFullScreen />

			</div>
		);
	}
}

export default Contact;
