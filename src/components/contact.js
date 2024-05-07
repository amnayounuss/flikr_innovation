import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import Contact from './section-components/contact-page';
import Footer from './global-components/footer-v2';

const ContactPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Contact Us"  />
        <Contact />
        <Footer />
    </div>
}

export default ContactPage

