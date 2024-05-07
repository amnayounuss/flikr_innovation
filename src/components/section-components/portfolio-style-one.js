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
			      <div className="block-title__line" />{/* /.block-title__line */}
			    </div>{/* /.block-title */}
			    <div className="row">
			      <div className="col-lg-4">
			        <div className="portfolio-one__single">
			          <img src={publicUrl+"assets/images/portfolio/portfolio-1-1.jpg"} alt={ imagealt } />
			          <div className="portfolio-one__content">
			            <div className="portfolio-one__content-inner">
			              <h3><Link to="/portfolio-details">Creative Arts</Link></h3>
			              <p>Design, Branding</p>
			            </div>{/* /.portfolio-one__content-inner */}
			          </div>{/* /.portfolio-one__content */}
			        </div>{/* /.portfolio-one__single */}
			      </div>{/* /.col-lg-4 */}
			      <div className="col-lg-4">
			        <div className="portfolio-one__single">
			          <img src={publicUrl+"assets/images/portfolio/portfolio-1-2.jpg"} alt={ imagealt } />
			          <div className="portfolio-one__content">
			            <div className="portfolio-one__content-inner">
			              <h3><Link to="/portfolio-details">Creative Arts</Link></h3>
			              <p>Design, Branding</p>
			            </div>{/* /.portfolio-one__content-inner */}
			          </div>{/* /.portfolio-one__content */}
			        </div>{/* /.portfolio-one__single */}
			      </div>{/* /.col-lg-4 */}
			      <div className="col-lg-4">
			        <div className="portfolio-one__single">
			          <img src={publicUrl+"assets/images/portfolio/portfolio-1-3.jpg"} alt={ imagealt } />
			          <div className="portfolio-one__content">
			            <div className="portfolio-one__content-inner">
			              <h3><Link to="/portfolio-details">Creative Arts</Link></h3>
			              <p>Design, Branding</p>
			            </div>{/* /.portfolio-one__content-inner */}
			          </div>{/* /.portfolio-one__content */}
			        </div>{/* /.portfolio-one__single */}
			      </div>{/* /.col-lg-4 */}
			    </div>{/* /.row */}
			    <div className="portfolio-one__more-btn__block text-center">
			      <Link to="/portfolio-full" className="thm-btn portfolio-one__more-btn">View More <i className="fa fa-angle-double-right" /></Link>
			      {/* /.thm-btn */}
			    </div>{/* /.portfolio-one__more-btn__block */}
			  </div>{/* /.container */}
			</section>

        }
}

export default PortfolioONe