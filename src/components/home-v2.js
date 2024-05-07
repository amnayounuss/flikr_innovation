import React from 'react';
import Navbar from './global-components/navbar-v2';
import Banner from './section-components/banner-style-two';
import Brand from './section-components/brand-two';
import WhyChooseUs from './section-components/why-choose-us-v2';
import Service from './section-components/service';
import FunfactV2 from './section-components/funfact-v2';
import Video from './section-components/video';
import Cta from './section-components/cta-v2';
import Case from './section-components/case';
import TestimonialV2 from './section-components/testimonial-v2';
import Pricing from './section-components/pricing';
import Contact from './section-components/contact';
import BrandV3 from './section-components/brand-v3';
import BlogPost from './section-components/blog-post';
import Footer from './global-components/footer-v2';

const Home_V2 = () => {
    return <div>
        <Navbar />
        <Banner />
        <Brand />
        <WhyChooseUs />
        <Service />
        <FunfactV2 />
        <Video />
        <Cta />
        <Case />
        <TestimonialV2 />
        <Pricing />
        <Contact />
        <BrandV3 />
        <BlogPost />
        <Footer />
    </div>
}

export default Home_V2

