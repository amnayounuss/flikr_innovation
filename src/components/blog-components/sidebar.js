import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Sidebar extends Component {
  render() {
   let anchor = '#'
   let imagealt = 'image'
   let publicUrl = process.env.PUBLIC_URL+'/'
    return (
      <div className="col-lg-4  go-top">
		        <div className="sidebar">
		          <div className="sidebar__single sidebar__search">
		            <form action="#" className="sidebar__search-form">
		              <input type="text" placeholder="Search Keywords" />
		              <button type="submit"><i className="far fa-search" /></button>
		            </form>
		          </div>{/* /.sidebar__single */}
		          <div className="sidebar__single sidebar__category">
		            <h3 className="sidebar__title">Category
		              <span />
		            </h3>{/* /.sidebar__title */}
		            <ul className="sidebar__category-list list-unstyled">
		              <li><Link to="/blog-grid">Business Strategy</Link></li>
		              <li><Link to="/blog-grid">Investment Planning</Link></li>
		              <li><Link to="/blog-grid">Financial Investment</Link></li>
		              <li><Link to="/blog-grid">Banking &amp; Insurance</Link></li>
		              <li><Link to="/blog-grid">Free Consulting</Link></li>
		              <li><Link to="/blog-grid">Meet Our Team</Link></li>
		            </ul>{/* /.sidebar__category-list */}
		          </div>{/* /.sidebar__single */}
		          <div className="sidebar__single sidebar__post">
		            <h3 className="sidebar__title">Recent News
		              <span />
		            </h3>{/* /.sidebar__title */}
		            <div className="sidebar__post-single">
		              <div className="sidebar__post-image">
		                <img src={publicUrl+"assets/images/blog/blog-lp-1-1.jpg" }alt={ imagealt } />
		              </div>{/* /.sidebar__post-image */}
		              <div className="sidebar__post-content">
		                <h3><Link to="/blog-details">Quick Win For Improe Perfor Security Of Your Website.</Link></h3>
		                <span>05 Apr 2019</span>
		              </div>{/* /.sidebar__post-content */}
		            </div>{/* /.sidebar__post-single */}
		            <div className="sidebar__post-single">
		              <div className="sidebar__post-image">
		                <img src={publicUrl+"assets/images/blog/blog-lp-1-1.jpg"} alt={ imagealt } />
		              </div>{/* /.sidebar__post-image */}
		              <div className="sidebar__post-content">
		                <h3><Link to="/blog-details">Quick Win For Improe Perfor Security Of Your Website.</Link></h3>
		                <span>05 Apr 2019</span>
		              </div>{/* /.sidebar__post-content */}
		            </div>{/* /.sidebar__post-single */}
		            <div className="sidebar__post-single">
		              <div className="sidebar__post-image">
		                <img src={publicUrl+"assets/images/blog/blog-lp-1-1.jpg"} alt={ imagealt } />
		              </div>{/* /.sidebar__post-image */}
		              <div className="sidebar__post-content">
		                <h3><Link to="/blog-details">Quick Win For Improe Perfor Security Of Your Website.</Link></h3>
		                <span>05 Apr 2019</span>
		              </div>{/* /.sidebar__post-content */}
		            </div>{/* /.sidebar__post-single */}
		          </div>{/* /.sidebar__single sidebar__post */}
		          <div className="sidebar__single sidebar__newsletter">
		            <h3 className="sidebar__title">Newsletters
		              <span />
		            </h3>{/* /.sidebar__title */}
		            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor ince didunt ut
		              labore dolore magne.</p>
		            <form action="#" className="sidebar__newsletter-form">
		              <input type="text" placeholder="Enter your email" />
		              <button className="thm-btn sidebar__newsletter-btn" type="submit">Subscribe Now <i className="fa fa-angle-double-right" /></button>
		            </form>{/* /.sidebar__newsletter-form */}
		          </div>{/* /.sidebar__single */}
		          <div className="sidebar__single sidebar__tags">
		            <h3 className="sidebar__title">Tags
		              <span />
		            </h3>{/* /.sidebar__title */}
		            <div className="sidebar__tags-list">
		              <Link to="/blog-grid">Cleaning</Link>
		              <Link to="/blog-grid">Business</Link>
		              <Link to="/blog-grid">Booking</Link>
		              <Link to="/blog-grid">Car</Link>
		              <Link to="/blog-grid">House</Link>
		              <Link to="/blog-grid">Apartment</Link>
		              <Link to="/blog-grid">Washing</Link>
		              <Link to="/blog-grid">Agency</Link>
		              <Link to="/blog-grid">Listing</Link>
		            </div>{/* /.sidebar__tags-list */}
		          </div>{/* /.sidebar__single */}
		          <div className="sidebar__single sidebar__cta" style={{backgroundImage: 'url(assets/images/blog/blog-s-cta-1.jpg)'}}>
		            <h3>Work <br /> Together</h3>
		            <p>Bur wemust ipsum dolor sit amet <br /> consectetur adipisicing elit sed eiusmod <br /> tempor
		              incididunt ut labore</p>
		            <a href="#" className="thm-btn sidebar__cta-btn">Contact Now <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn sidebar__cta-btn */}
		          </div>
		        </div>
		      </div>
    )
  }
}

export default Sidebar;
