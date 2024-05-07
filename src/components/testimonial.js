import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import TestimonialV5 from './section-components/testimonial-v5';


import Footer from './global-components/footer-v2';

const Testimonial = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Testimonials"  />
        <TestimonialV5  />
        <Footer />
    </div>
}

export default Testimonial

