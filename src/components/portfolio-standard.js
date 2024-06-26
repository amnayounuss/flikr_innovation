import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import Portfolio from './section-components/portfolio-standard';
import Footer from './global-components/footer-v2';

const PortfolioStandard = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Portfolio"  />
        <Portfolio />
        {/* <Cta /> */}
        <Footer />
    </div>
}

export default PortfolioStandard

