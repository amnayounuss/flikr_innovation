import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import BlogGridView from './blog-components/blog-list';
import Footer from './global-components/footer-v2';

const BlogList = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Standard Blog"  />
        <BlogGridView />
        <Footer />
    </div>
}

export default BlogList

