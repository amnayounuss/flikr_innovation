import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class PortFolioFull extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <section className="portfolio-three  go-top">
        <div className="container-fluid">
          <div className="block-title-two text-center">
            <p>latest work</p>
            <h3>Let’s See Our Most <br /> Recent Work</h3>
          </div>{/* /.block-title-two */}
          <div className="row no-gutters ">
            <div className="col-md-4 col-sm-12">
              <div className="portfolio-three__single">
                <div className="portfolio-three__image">
                  <img src={publicUrl+"assets/images/portfolio/portfolio-3-1.jpg" }alt={ imagealt } />
                </div>{/* /.portfolio-three__image */}
                <div className="portfolio-three__content">
                  <div className="portfolio-three__content-inner">
                    <Link to="/portfolio-details" className="portfolio-three__link"><i className="fa fa-long-arrow-alt-right" /></Link>
                    <h3><Link to="/portfolio-details">Creative Work</Link></h3>
                    <p><Link to="/portfolio-details">Design.</Link><Link to="/portfolio-details">Branding</Link></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="portfolio-three__single">
                <div className="portfolio-three__image">
                  <img src={publicUrl+"assets/images/portfolio/portfolio-3-2.jpg"} alt="" />
                </div>
                <div className="portfolio-three__content">
                  <div className="portfolio-three__content-inner">
                    <Link to="/portfolio-details" className="portfolio-three__link"><i className="fa fa-long-arrow-alt-right" /></Link>
                    <h3><Link to="/portfolio-details">Creative Work</Link></h3>
                    <p><Link to="/portfolio-details">Design.</Link><Link to="/portfolio-details">Branding</Link></p>
                  </div>
                </div>
              </div>{/* /.portfolio-three__single */}
            </div>{/* /.col-md-4 col-sm-12 */}
            <div className="col-md-4 col-sm-12">
              <div className="portfolio-three__single">
                <div className="portfolio-three__image">
                  <img src={publicUrl+"assets/images/portfolio/portfolio-3-3.jpg"} alt="" />
                </div>
                <div className="portfolio-three__content">
                  <div className="portfolio-three__content-inner">
                    <Link to="/portfolio-details" className="portfolio-three__link"><i className="fa fa-long-arrow-alt-right" /></Link>
                    <h3><Link to="/portfolio-details">Creative Work</Link></h3>
                    <p><Link to="/portfolio-details">Design.</Link><Link to="/portfolio-details">Branding</Link></p>
                  </div>
                </div>
              </div>{/* /.portfolio-three__single */}
            </div>{/* /.col-md-4 col-sm-12 */}
            <div className="col-md-6 col-sm-12">
              <div className="portfolio-three__single">
                <div className="portfolio-three__image">
                  <img src={publicUrl+"assets/images/portfolio/portfolio-3-4.jpg"} alt="" />
                </div>
                <div className="portfolio-three__content">
                  <div className="portfolio-three__content-inner">
                    <Link to="/portfolio-details" className="portfolio-three__link"><i className="fa fa-long-arrow-alt-right" /></Link>
                    <h3><Link to="/portfolio-details">Creative Work</Link></h3>
                    <p><Link to="/portfolio-details">Design.</Link><Link to="/portfolio-details">Branding</Link></p>
                  </div>
                </div>
              </div>{/* /.portfolio-three__single */}
            </div>{/* /.col-md-4 col-sm-12 */}
            <div className="col-md-6 col-sm-12">
              <div className="portfolio-three__single">
                <div className="portfolio-three__image">
                  <img src={publicUrl+"assets/images/portfolio/portfolio-3-5.jpg"} alt="" />
                </div>
                <div className="portfolio-three__content">
                  <div className="portfolio-three__content-inner">
                    <Link to="/portfolio-details" className="portfolio-three__link"><i className="fa fa-long-arrow-alt-right" /></Link>
                    <h3><Link to="/portfolio-details">Creative Work</Link></h3>
                    <p><Link to="/portfolio-details">Design.</Link><Link to="/portfolio-details">Branding</Link></p>
                  </div>
                </div>
              </div>{/* /.portfolio-three__single */}
            </div>{/* /.col-md-4 col-sm-12 */}
            <div className="col-md-4 col-sm-12">
              <div className="portfolio-three__single">
                <div className="portfolio-three__image">
                  <img src={publicUrl+"assets/images/portfolio/portfolio-3-6.jpg"} alt="" />
                </div>
                <div className="portfolio-three__content">
                  <div className="portfolio-three__content-inner">
                    <Link to="/portfolio-details" className="portfolio-three__link"><i className="fa fa-long-arrow-alt-right" /></Link>
                    <h3><Link to="/portfolio-details">Creative Work</Link></h3>
                    <p><Link to="/portfolio-details">Design.</Link><Link to="/portfolio-details">Branding</Link></p>
                  </div>
                </div>
              </div>{/* /.portfolio-three__single */}
            </div>{/* /.col-md-4 col-sm-12 */}
            <div className="col-md-4 col-sm-12">
              <div className="portfolio-three__single">
                <div className="portfolio-three__image">
                  <img src={publicUrl+"assets/images/portfolio/portfolio-3-7.jpg"} alt="" />
                </div>
                <div className="portfolio-three__content">
                  <div className="portfolio-three__content-inner">
                    <Link to="/portfolio-details" className="portfolio-three__link"><i className="fa fa-long-arrow-alt-right" /></Link>
                    <h3><Link to="/portfolio-details">Creative Work</Link></h3>
                    <p><Link to="/portfolio-details">Design.</Link><Link to="/portfolio-details">Branding</Link></p>
                  </div>
                </div>
              </div>{/* /.portfolio-three__single */}
            </div>{/* /.col-md-4 col-sm-12 */}
            <div className="col-md-4 col-sm-12">
              <div className="portfolio-three__single">
                <div className="portfolio-three__image">
                  <img src={publicUrl+"assets/images/portfolio/portfolio-3-8.jpg"} alt="" />
                </div>
                <div className="portfolio-three__content">
                  <div className="portfolio-three__content-inner">
                    <Link to="/portfolio-details" className="portfolio-three__link"><i className="fa fa-long-arrow-alt-right" /></Link>
                    <h3><Link to="/portfolio-details">Creative Work</Link></h3>
                    <p><Link to="/portfolio-details">Design.</Link><Link to="/portfolio-details">Branding</Link></p>
                  </div>
                </div>
              </div>{/* /.portfolio-three__single */}
            </div>{/* /.col-md-4 col-sm-12 */}
          </div>{/* /.row no-gutters */}
        </div>
      </section>

        }
}

export default PortFolioFull