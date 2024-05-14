import React from 'react';
import Navbar from './global-components/navbar';
import Banner from './section-components/banner';
import WhyChooseUs from './section-components/why-choose-us';
import AboutStyleOne from './section-components/about-style-one';
import Portfolio from './section-components/portfolio-style-one';
import Funfact from './section-components/funfact';
import Testimonial from './section-components/testimonial-style-one';
import CTA from './section-components/cta';
import Footer_v2 from './global-components/footer-v2';

const Home_V1 = () => {
    return <div>
        <Navbar />
        <Banner />
        <WhyChooseUs />
        <AboutStyleOne />
        <Portfolio />
        <Funfact />
        <Testimonial />
        <CTA />
        <Footer_v2/>

    </div>
}

export default Home_V1

