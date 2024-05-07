import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Comments from './comments';
import Sidebar from './sidebar';
class BlogDetails extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'

    return (
     <section className="blog-list blog-details">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-8">
		        <div className="blog-one__single">
		          <div className="blog-one__image">
		            <img src={publicUrl+"assets/images/blog/blog-s-1-1.jpg"} alt={ imagealt } />
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
		            <h3>Adobe Experience Manager vs. WordPress The Authoring Expeene
		              Compared</h3>
		            <p>But we ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut
		              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
		              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
		              voluptate velit esse cillum dolore</p>
		            <br />
		            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
		              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
		              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
		              voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
		              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
		              ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
		              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
		              architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
		              aspernatur aut odit aut fugit, sed quia consequuntur </p>
		            <br />
		            <blockquote>
		              <p>Keeping Node.js Fast Tools Techniques And Tips For Making High Performance Node Ser Ways
		                Another System Commity.
		                <i className="fal fa-quote-right" />
		              </p>
		            </blockquote>
		            <br />
		          </div>{/* /.blog-one__content */}
		          <p className="blog-details__tags">
		            <i className="far fa-tags" />
		            <span>Popular Tag : </span>
		            <a href="#">Business,</a>
		            <a href="#">SEO,</a>
		            <a href="#">Digital Marketing</a>
		          </p>{/* /.blog-details__tags */}
		          <br />
		        </div>{/* /.blog-one__single */}
		        <div className="blog-post__nav">
		          <div className="blog-post__nav-left">
		            <h3><a href="#">Building Pub Sub Service House Using Node And Redis</a></h3>
		          </div>{/* /.blog-post__nav-left */}
		          <div className="blog-post__nav-right">
		            <h3><a href="#">Once Upon Time Using Story Stre For Better Engagement</a></h3>
		          </div>{/* /.blog-post__nav-right */}
		        </div>{/* /.blog-post__nav */}
		       <Comments />
		      </div>{/* /.col-lg-8 */}
		      <Sidebar />
		    </div>{/* /.row */}
		  </div>{/* /.container */}
		</section>

    )
  }
}

export default BlogDetails;
