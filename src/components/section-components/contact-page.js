import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			subject: '',
			message: '',
			popUpMessage: '',
			popUpVisible: false
		};
		this.formRef = React.createRef();
	}

	componentDidMount() {
		AOS.init({ duration: 1500, easing: 'ease-in-out', once: true, disable: false });
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
					this.setState({
						name: '',
						email: '',
						subject: '',
						message: '',
						popUpMessage: 'Form submitted successfully!',
						popUpVisible: true
					});

					setTimeout(() => {
						this.setState({ popUpVisible: false });
					}, 3000);
				},
				(error) => {
					console.log('FAILED...', error.text);
					this.setState({
						popUpMessage: 'Failed to submit the form. Please try again.',
						popUpVisible: true
					});

					setTimeout(() => {
						this.setState({ popUpVisible: false });
					}, 3000);
				}
			);
	};

	render() {
		const { popUpMessage, popUpVisible } = this.state;

		return (
			<div>
				<section className="contact-two" data-aos="fade-up">
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
											<p> <a target='blank' href='https://www.google.com/maps/place/1613+Voorhies+Ave,+Brooklyn,+NY+11235,+USA'> 1613 Voorhies Ave, Brooklyn, NY 11235, USA </a> </p>
										</li>
										<li>
											<div className="contact-two__info-list-title">
												<i className="far fa-phone" />
												Call Us :
											</div>
											<p><a href="tel: +1 (917) 732 0181">+1 (917) 732 0181</a></p>
										</li>
										<li>
											<div className="contact-two__info-list-title">
												<i className="far fa-envelope" />
												Email Us :
											</div>
											<p><a href="mailto: info@flikrinnovation.com">info@flikrinnovation.com</a></p>
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
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.987348449604!2d-73.95513588806578!3d40.58603467129363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c244643c167dbb%3A0xd05a2549c713a252!2s1613%20Voorhies%20Ave%2C%20Brooklyn%2C%20NY%2011235%2C%20USA!5e0!3m2!1sen!2s!4v1716235709733!5m2!1sen!2s" className="google-map__contact" allowFullScreen />
			</div>
		);
	}
}

export default Contact;
