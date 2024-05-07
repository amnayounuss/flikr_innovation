import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import PortfolioDetailsPage from './section-components/portfolio-details';
import RelatedProjct from './section-components/related-project';
import Cta from './section-components/cta-v10';
import Footer from './global-components/footer-v2';

const PortfolioDetails = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Portfolio Details"  />
        <PortfolioDetailsPage />
        <RelatedProjct />
        <Cta />
        <Footer />
    </div>
}

export default PortfolioDetails

