import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import Service from './section-components/service-v5';
import Cta from './section-components/cta-v10';
import FaqV2 from './section-components/faq-v2';
import Brand from './section-components/brand-v4';
import Case from './section-components/case';
import Footer from './global-components/footer-v2';
import TestimonialV5 from './section-components/testimonial-v5';

const ServiceV1 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Our Services"  />
        <Service />
        <Cta />
        <FaqV2 />
        <TestimonialV5  />
        <Brand />
        <Case  customclass="case-one case-one__team-page case-one__service-page"/>
        <Footer />
    </div>
}

export default ServiceV1

