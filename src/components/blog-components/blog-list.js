import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
class BlogList extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'
    return (
      <section className="blog-list  go-top">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-8">
		        <div className="blog-one__single">
		          <div className="blog-one__image">
		            <img src={publicUrl+"assets/images/blog/blog-s-1-1.jpg" }alt={ imagealt } />
		          </div>{/* /.blog-one__image */}
		          <div className="blog-one__content">
		            <div className="blog-one__top">
		              <div className="blog-one__author">
		                <img src={ publicUrl+"assets/images/blog/blog-author-1-1.jpg"} alt={ imagealt } />
		                <p>Hakila K. Dolika</p>
		              </div>{/* /.blog-one__author */}
		              <div className="blog-one__social">
		                <span>Share Now</span>
		                <b><i className="far fa-share-alt" /></b>
		                <a href="#"><i className="fab fa-facebook-f" /></a>
		                <a href="#"><i className="fab fa-twitter" /></a>
		                <a href="#"><i className="fab fa-linkedin-in" /></a>
		              </div>{/* /.blog-one__social */}
		            </div>{/* /.blog-one__top */}
		            <h3><Link to="/blog-details">Adobe Experience Manager vs. WordPress The Authoring Expeene
		                Compared</Link></h3>
		            <p>But we ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut
		              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
		              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
		              voluptate velit esse cillum dolore</p>
		            <Link to="/blog-details" className="thm-btn blog-one__btn">Read More <i className="fa fa-angle-double-right" /></Link>
		            {/* /.thm-btn */}
		          </div>{/* /.blog-one__content */}
		        </div>{/* /.blog-one__single */}
		        <div className="blog-one__single">
		          <div className="blog-one__image">
		            <img src={publicUrl+"assets/images/blog/blog-s-1-2.jpg" }alt={ imagealt } />
		          </div>{/* /.blog-one__image */}
		          <div className="blog-one__content">
		            <div className="blog-one__top">
		              <div className="blog-one__author">
		                <img src={publicUrl+"assets/images/blog/blog-author-1-1.jpg"} alt={ imagealt } />
		                <p>Hakila K. Dolika</p>
		              </div>{/* /.blog-one__author */}
		              <div className="blog-one__social">
		                <span>Share Now</span>
		                <b><i className="far fa-share-alt" /></b>
		                <a href="#"><i className="fab fa-facebook-f" /></a>
		                <a href="#"><i className="fab fa-twitter" /></a>
		                <a href="#"><i className="fab fa-linkedin-in" /></a>
		              </div>{/* /.blog-one__social */}
		            </div>{/* /.blog-one__top */}
		            <h3><Link to="/blog-details">Monthly Web Development Update Complexity DNS Over HTTPS, And Push Notifications</Link></h3>
		            <p>But we ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut
		              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
		              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
		              voluptate velit esse cillum dolore</p>
		            <Link to="/blog-details" className="thm-btn blog-one__btn">Read More <i className="fa fa-angle-double-right" /></Link>
		            {/* /.thm-btn */}
		          </div>{/* /.blog-one__content */}
		        </div>{/* /.blog-one__single */}
		        <div className="blog-one__single blog-one__qoute-post">
		          <i className="fal fa-quote-right" />
		          <h3><Link to="/blog-details">Meet Smashing Book New Frontiers In Web Design For Better Enge Tools Techniques
		              Making</Link></h3>
		        </div>{/* /.blog-one__qoute-post */}
		        <div className="blog-one__single">
		          <div className="blog-one__image">
		            <img src={publicUrl+"assets/images/blog/blog-s-1-3.jpg"} alt={ imagealt } />
		          </div>{/* /.blog-one__image */}
		          <div className="blog-one__content">
		            <div className="blog-one__top">
		              <div className="blog-one__author">
		                <img src={publicUrl+"assets/images/blog/blog-author-1-1.jpg"} alt={ imagealt } />
		                <p>Hakila K. Dolika</p>
		              </div>{/* /.blog-one__author */}
		              <div className="blog-one__social">
		                <span>Share Now</span>
		                <b><i className="far fa-share-alt" /></b>
		                <a href="#"><i className="fab fa-facebook-f" /></a>
		                <a href="#"><i className="fab fa-twitter" /></a>
		                <a href="#"><i className="fab fa-linkedin-in" /></a>
		              </div>{/* /.blog-one__social */}
		            </div>{/* /.blog-one__top */}
		            <h3><Link to="/blog-details">Keeping Node.js Fast Tools Techniques Tips For Making High-Performance Node.js Servers</Link></h3>
		            <p>But we ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut
		              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
		              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
		              voluptate velit esse cillum dolore</p>
		            <Link to="/blog-details" className="thm-btn blog-one__btn">Read More <i className="fa fa-angle-double-right" /></Link>
		            {/* /.thm-btn */}
		          </div>{/* /.blog-one__content */}
		        </div>{/* /.blog-one__single */}
		        <div className="blog-one__single">
		          <div className="blog-one__image">
		            <img src={publicUrl+"assets/images/blog/blog-s-1-4.jpg"} alt={ imagealt } />
		          </div>{/* /.blog-one__image */}
		          <div className="blog-one__content">
		            <div className="blog-one__top">
		              <div className="blog-one__author">
		                <img src={publicUrl+"assets/images/blog/blog-author-1-1.jpg"} alt={ imagealt } />
		                <p>Hakila K. Dolika</p>
		              </div>{/* /.blog-one__author */}
		              <div className="blog-one__social">
		                <span>Share Now</span>
		                <b><i className="far fa-share-alt" /></b>
		                <a href="#"><i className="fab fa-facebook-f" /></a>
		                <a href="#"><i className="fab fa-twitter" /></a>
		                <a href="#"><i className="fab fa-linkedin-in" /></a>
		              </div>{/* /.blog-one__social */}
		            </div>{/* /.blog-one__top */}
		            <h3><Link to="/blog-details">Once Upon Time Using Story Structure For Better Enge Tools Techniques Tips For Making Performance </Link></h3>
		            <p>But we ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut
		              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
		              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
		              voluptate velit esse cillum dolore</p>
		            <Link to="/blog-details" className="thm-btn blog-one__btn">Read More <i className="fa fa-angle-double-right" /></Link>
		            {/* /.thm-btn */}
		          </div>{/* /.blog-one__content */}
		        </div>{/* /.blog-one__single */}
		        <div className="post-pagination">
		          <a href="#"><i className="fa fa-angle-left" /></a>
		          <a href="#">1</a>
		          <a href="#">2</a>
		          <a href="#"><i className="fa fa-angle-right" /></a>
		        </div>{/* /.post-pagination */}
		      </div>{/* /.col-lg-8 */}
		      <Sidebar />
		    </div>{/* /.row */}
		  </div>{/* /.container */}
		</section>

    )
  }
}

export default BlogList;
