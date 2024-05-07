import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import TeamPage from './section-components/team-page';
import Cta from './section-components/cta-v10';
import Case from './section-components/case';
import Footer from './global-components/footer-v2';
import Brand from './section-components/brand-v3';


const Team = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Exclusive Team" subheader="Our Team"  />
        <TeamPage />
        <Cta />
        <Brand />
        <Case customclass="case-one__team-page" />
        <Footer />
    </div>
}

export default Team

