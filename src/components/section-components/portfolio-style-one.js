import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class PortfolioONe extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return    <section className="portfolio-one go-top">
			  <div className="container">
			    <div className="block-title text-center">
			      <p><span>Our Project</span></p>
			      <h3>Let’s See Our Populer <br /> Project</h3>
			      <div className="block-title__line" />
			    </div>
			    <div className="row">
			      <div className="col-lg-4">
			        <div className="portfolio-one__single">
						<img src={publicUrl +"assets/images/portfolio/portfolio-4-1.png"} alt={ imagealt } />
			          <div className="portfolio-one__content">
			            <div className="portfolio-one__content-inner">
								<h3><Link to="/portfolio-standard">Creative App</Link></h3>
			              <p>Mobile Application</p>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4">
			        <div className="portfolio-one__single">
						<img src={publicUrl +"assets/images/portfolio/ebook.jpg"} alt={ imagealt } />
			          <div className="portfolio-one__content">
			            <div className="portfolio-one__content-inner">
			              <h3><Link to="/portfolio-standard">Creative ebook</Link></h3>
			              <p>E-Book</p>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4">
			        <div className="portfolio-one__single">
						<img src={publicUrl +"assets/images/portfolio/w10.jpg"} alt={ imagealt } />
			          <div className="portfolio-one__content">
			            <div className="portfolio-one__content-inner">
			              <h3><Link to="/portfolio-standard">Creative website</Link></h3>
			              <p>Website</p>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			    <div className="portfolio-one__more-btn__block text-center">
			      <Link to="/portfolio-standard" className="thm-btn portfolio-one__more-btn">View More <i className="fa fa-angle-double-right" /></Link>
			    </div>
			  </div>
			</section>

        }
}

export default PortfolioONe