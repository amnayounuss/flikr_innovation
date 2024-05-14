import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
    

import Footer from './global-components/footer-v2';
import TestimonialOne from './section-components/testimonial-style-one';

const Testimonial = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Testimonials"  />
        <TestimonialOne/>
        <Footer />
    </div>
}

export default Testimonial

