import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import Portfolio from './section-components/portfolio-standard';
import Cta from './section-components/cta-v10';
import Footer from './global-components/footer-v2';

const PortfolioStandard = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Portfolio Standard"  />
        <Portfolio />
        <Cta />
        <Footer />
    </div>
}

export default PortfolioStandard

