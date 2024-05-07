import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import Faqpage from './section-components/faq-v3';
import Footer from './global-components/footer-v2';

const Faq = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Ask Questions"  subheader="FAQ" />
        <Faqpage />
        <Footer />
    </div>
}

export default Faq

