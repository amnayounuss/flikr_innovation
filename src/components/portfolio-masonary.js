import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import Portfolio from './section-components/portfolio-masonary';
import Cta from './section-components/cta-v11';
import Footer from './global-components/footer-v2';

const PortfolioMasonary = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Portfolio Masonary"  />
        <Portfolio />
        <Cta />
        <Footer />
    </div>
}

export default PortfolioMasonary

