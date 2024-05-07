import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import BlogGridView from './blog-components/blog-grid';
import Footer from './global-components/footer-v2';

const BlogGrid = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Blog Grid View"  />
        <BlogGridView />
        <Footer />
    </div>
}

export default BlogGrid

