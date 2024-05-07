import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import PricingV4 from './section-components/pricing-v4';
import Footer from './global-components/footer-v2';
import CTA from './section-components/cta';


const PricingPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Pricing Plan"  />
        <PricingV4 />
        <CTA/>
        <Footer />
    </div>
}

export default PricingPage

