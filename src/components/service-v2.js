import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import Service from './section-components/service-v6';
import Cta from './section-components/cta-v10';
import ServiceV7 from './section-components/service-v7';
import Brand from './section-components/brand-v4';
import Case from './section-components/case';
import Footer from './global-components/footer-v2';

const ServiceV2 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Our Services"  />
        <Service />
        <Cta />
        <ServiceV7 />
        <Brand />
        <Case  customclass="case-one case-one__team-page case-one__service-page"/>
        <Footer />
    </div>
}

export default ServiceV2

