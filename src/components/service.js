import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import Service from './section-components/service-v5';
import Footer from './global-components/footer-v2';
import CTA from './section-components/cta';
import TestimonialOne from './section-components/testimonial-style-one';


const ServiceV1 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Our Services"  />
        <Service />
        <CTA />
        <TestimonialOne/>
        <Footer />
    </div>
}

export default ServiceV1

