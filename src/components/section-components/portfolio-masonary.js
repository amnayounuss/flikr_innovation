import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class PortFolioMasonary extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <section className="portfolio-masonary  go-top">
            <div className="container">
              <div className="row masonary-layout">
                <div className="col-md-6 masonary-item">
                  <div className="portfolio-two__single">
                    <div className="portfolio-two__image">
                      <img src={publicUrl+"assets/images/portfolio/portfolio-5-1.jpg"} alt={ imagealt } />
                    </div>
                    <div className="portfolio-two__content">
                      <h3><Link to="/portfolio-details">Creative Illustration</Link></h3>
                      <p>product design</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 masonary-item">
                  <div className="portfolio-two__single">
                    <div className="portfolio-two__image">
                      <img src={publicUrl+"assets/images/portfolio/portfolio-5-2.jpg"}  alt={ imagealt } />
                    </div>{/* /.portfolio-two__image */}
                    <div className="portfolio-two__content">
                      <h3><Link to="/portfolio-details">Creative Illustration</Link></h3>
                      <p>product design</p>
                    </div>
                  </div>{/* /.portfolio-two__single */}
                </div>{/* /.col-md-6 masonary-item */}
                <div className="col-md-6 masonary-item">
                  <div className="portfolio-two__single">
                    <div className="portfolio-two__image">
                      <img src={publicUrl+"assets/images/portfolio/portfolio-5-3.jpg"} alt="" />
                    </div>{/* /.portfolio-two__image */}
                     <div className="portfolio-two__content">
                      <h3><Link to="/portfolio-details">Creative Illustration</Link></h3>
                      <p>product design</p>
                    </div>
                  </div>{/* /.portfolio-two__single */}
                </div>{/* /.col-md-6 masonary-item */}
                <div className="col-md-6 masonary-item">
                  <div className="portfolio-two__single">
                    <div className="portfolio-two__image">
                      <img src={publicUrl+"assets/images/portfolio/portfolio-5-4.jpg"} alt="" />
                    </div>{/* /.portfolio-two__image */}
                     <div className="portfolio-two__content">
                      <h3><Link to="/portfolio-details">Creative Illustration</Link></h3>
                      <p>product design</p>
                    </div>
                  </div>{/* /.portfolio-two__single */}
                </div>{/* /.col-md-6 masonary-item */}
                <div className="col-md-6 masonary-item">
                  <div className="portfolio-two__single">
                    <div className="portfolio-two__image">
                      <img src={publicUrl+"assets/images/portfolio/portfolio-5-5.jpg"} alt="" />
                    </div>{/* /.portfolio-two__image */}
                     <div className="portfolio-two__content">
                      <h3><Link to="/portfolio-details">Creative Illustration</Link></h3>
                      <p>product design</p>
                    </div>
                  </div>{/* /.portfolio-two__single */}
                </div>{/* /.col-md-6 masonary-item */}
                <div className="col-md-6 masonary-item">
                  <div className="portfolio-two__single">
                    <div className="portfolio-two__image">
                      <img src={publicUrl+"assets/images/portfolio/portfolio-5-6.jpg"} alt="" />
                    </div>{/* /.portfolio-two__image */}
                     <div className="portfolio-two__content">
                      <h3><Link to="/portfolio-details">Creative Illustration</Link></h3>
                      <p>product design</p>
                    </div>
                  </div>{/* /.portfolio-two__single */}
                </div>{/* /.col-md-6 masonary-item */}
              </div>{/* /.row masonary-layout */}
              <div className="text-center">
                <Link to="/portfolio-full" className="portfolio-masonary__more-btn thm-btn">View More <i className="fa fa-angle-double-right" /></Link>
              </div>{/* /.text-center */}
            </div>{/* /.container */}
          </section>

        }
}

export default PortFolioMasonary