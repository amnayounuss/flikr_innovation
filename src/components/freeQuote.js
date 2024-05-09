import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import Faqpage from './section-components/freequote-v1';
import Footer from './global-components/footer-v2';
import Contact from './section-components/contact-page';
import FreeQuoteV1 from './section-components/freequote-v1';

const FreeQuote = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Free Quote"  subheader="Get a Free Quote" />
        {/* <Faqpage /> */}
        <FreeQuoteV1/>
        <Footer />
    </div>
}

export default FreeQuote

