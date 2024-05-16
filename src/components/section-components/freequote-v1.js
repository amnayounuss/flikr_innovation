import React, { Component } from 'react';
import emailjs from 'emailjs-com';

class FreeQuoteV1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            service: '',
            phone: '',
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
                        service: '',
                        phone: '',
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

        return (
            <section className="faq-one faq-one__faq-page" style={{ backgroundColor: 'transparent' }}>
                <div className="container">
                    <div className="row">
                        <div className='col-lg-3'></div>
                        <div className="col-lg-6 formshadow" style={{ border: ' 1px solid #D8D8D8', borderRadius: '25px', padding: '0px 50px 50px 50px' }}>
                            <div className="faq-one__form-wrap">
                                <form action="#" className="contact-one__form" ref={this.formRef} onSubmit={this.sendEmail}>
                                    <h3>Let’s Create Something Extraordinary Together</h3>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="contact-one__input-group">
                                                <i className="contact-one__input-icon far fa-user" />
                                                <input
                                                    type="text"
                                                    placeholder="Your Full Name"
                                                    name='name'
                                                    value={this.state.name}
                                                    onChange={this.handleInputChange}
                                                    style={{ backgroundColor: 'transparent' }}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="contact-one__input-group">
                                                <i className="contact-one__input-icon far fa-envelope" />
                                                <input
                                                    type="email"
                                                    placeholder="Your Email "
                                                    name='email'
                                                    value={this.state.email}
                                                    onChange={this.handleInputChange}
                                                    style={{ backgroundColor: 'transparent' }}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="contact-one__input-group">
                                                <select
                                                    className='picker'
                                                    name='service'
                                                    value={this.state.service}
                                                    onChange={this.handleInputChange}
                                                    style={{ backgroundColor: 'transparent' }}
                                                    required
                                                >
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
                                                <input
                                                    type="text"
                                                    placeholder="Your Phone"
                                                    name='phone'
                                                    value={this.state.phone}
                                                    onChange={this.handleInputChange}
                                                    style={{ backgroundColor: 'transparent' }}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="contact-one__input-group">
                                                <i className="contact-one__input-icon far fa-pencil-alt" />
                                                <textarea
                                                    placeholder="Write Message"
                                                    name='message'
                                                    value={this.state.message}
                                                    onChange={this.handleInputChange}
                                                    style={{ backgroundColor: 'transparent' }}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <button type="submit" className="thm-btn contact-one__form-btn">Send Message <i className="fa fa-angle-double-right" /></button>
                                        </div>
                                    </div>
                                </form>
                                {popUpVisible && <div className="pop-up-message">{popUpMessage}</div>}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FreeQuoteV1;
