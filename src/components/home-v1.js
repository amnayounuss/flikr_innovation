import React from 'react';
import Navbar from './global-components/navbar';
import Banner from './section-components/banner';
import Brand from './section-components/brand-one';
import WhyChooseUs from './section-components/why-choose-us';
import AboutStyleOne from './section-components/about-style-one';
import AboutStyleTwo from './section-components/about-style-two';
import Team from './section-components/team';
import Skill from './section-components/skill';
import Portfolio from './section-components/portfolio-style-one';
import Funfact from './section-components/funfact';
import Testimonial from './section-components/testimonial-style-one';
import CTA from './section-components/cta';
import PostSlider from './section-components/post-slider';
import Footer_v2 from './global-components/footer-v2';

const Home_V1 = () => {
    return <div>
        <Navbar />
        <Banner />
        <Brand />
        <WhyChooseUs />
        <AboutStyleOne />
        <Team />
        <Portfolio />
        <Funfact />
        <Testimonial />
        <CTA />
        <PostSlider />
        <Footer_v2/>

    </div>
}

export default Home_V1

