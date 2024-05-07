import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class BlogPost extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="blog-two  go-top">
			  <div className="container">
			    <div className="block-title-two text-center">
			      <p>blog &amp; news</p>
			      <h3>Our Latest Company <br /> News &amp; Blog</h3>
			    </div>{/* /.block-title-two */}
			    <div className="row">
			      <div className="col-lg-4">
			        <div className="blog-two__single">
			          <h3><Link to="/blog-details">UX And HTML5 Let’s Help Users Fill In Your Mobile Form</Link></h3>
			          <div className="blog-two__image">
			            <img src={publicUrl+"assets/images/blog/blog-2-1.jpg"} alt={ imagealt } />
			          </div>{/* /.blog-two__image */}
			          <div className="blog-two__content">
			            <ul className="list-unstyled blog-two__meta">
			              <li><Link to="/blog-details"><i className="far fa-user" /> Admin</Link></li>
			              <li><Link to="/blog-details"><i className="far fa-comment-alt" /> Comments (03)</Link></li>
			            </ul>{/* /.list-unstyled blog-two__meta */}
			            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut
			              labore </p>
			            <Link to="/blog-details" className="thm-btn blog-two__btn">Read More <i className="fa fa-angle-double-right" /></Link>
			            {/* /.thm-btn */}
			          </div>{/* /.blog-two__content */}
			        </div>{/* /.blog-two__single */}
			      </div>{/* /.col-lg-4 */}
			      <div className="col-lg-4">
			        <div className="blog-two__single">
			          <h3><Link to="/blog-details">UX And HTML5 Let’s Help Users Fill In Your Mobile Form</Link></h3>
			          <div className="blog-two__image">
			            <img src={publicUrl+"assets/images/blog/blog-2-2.jpg"} alt={ imagealt } />
			          </div>{/* /.blog-two__image */}
			          <div className="blog-two__content">
			            <ul className="list-unstyled blog-two__meta">
			              <li><Link to="/blog-details"><i className="far fa-user" /> Admin</Link></li>
			              <li><Link to="/blog-details"><i className="far fa-comment-alt" /> Comments (03)</Link></li>
			            </ul>{/* /.list-unstyled blog-two__meta */}
			            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut
			              labore </p>
			            <Link to="/blog-details" className="thm-btn blog-two__btn">Read More <i className="fa fa-angle-double-right" /></Link>
			            {/* /.thm-btn */}
			          </div>{/* /.blog-two__content */}
			        </div>{/* /.blog-two__single */}
			      </div>{/* /.col-lg-4 */}
			      <div className="col-lg-4">
			        <div className="blog-two__single">
			          <h3><Link to="/blog-details">UX And HTML5 Let’s Help Users Fill In Your Mobile Form</Link></h3>
			          <div className="blog-two__image">
			            <img src={publicUrl+"assets/images/blog/blog-2-3.jpg"} alt={ imagealt } />
			          </div>{/* /.blog-two__image */}
			          <div className="blog-two__content">
			            <ul className="list-unstyled blog-two__meta">
			              <li><Link to="/blog-details"><i className="far fa-user" /> Admin</Link></li>
			              <li><Link to="/blog-details"><i className="far fa-comment-alt" /> Comments (03)</Link></li>
			            </ul>{/* /.list-unstyled blog-two__meta */}
			            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut
			              labore </p>
			            <Link to="/blog-details" className="thm-btn blog-two__btn">Read More <i className="fa fa-angle-double-right" /></Link>
			            {/* /.thm-btn */}
			          </div>{/* /.blog-two__content */}
			        </div>{/* /.blog-two__single */}
			      </div>{/* /.col-lg-4 */}
			    </div>{/* /.row */}
			  </div>{/* /.container */}
			</section>

        }
}

export default BlogPost