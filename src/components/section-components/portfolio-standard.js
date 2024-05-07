import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class PortFolioStandard extends Component {

   componentDidMount() {

      const $ = window.$;
      
       if ($('.masonary-layout').length) {
            $('.masonary-layout').isotope({
                layoutMode: 'masonry',
                itemSelector: '.masonary-item',

            });
        }

        if ($('.post-filter').length) {
            $('.filter-layout').isotope({
                filter: '.masonary-item',
                animationOptions: {
                    duration: 500,
                    easing: 'linear',
                    queue: false
                }
            });
            $('.post-filter li').children('span').on('click', function () {
                var Self = $(this);
                var selector = Self.parent().attr('data-filter');
                $('.post-filter li').children('span').parent().removeClass('active');
                Self.parent().addClass('active');
                $('.filter-layout').isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 500,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });
        }

        if ($('.post-filter.has-dynamic-filter-counter').length) {
            // var allItem = $('.single-filter-item').length;

            var activeFilterItem = $('.post-filter.has-dynamic-filter-counter').find('li');

            activeFilterItem.each(function () {
                var filterElement = $(this).data('filter');

                var count = $('.gallery-content').find(filterElement).length;

                $(this).children('span').append('<span class="count"><b>' + count + '</b></span>');
            });
        };

        
    }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <section className="portfolio-three portfolio-three__standard-page  go-top">
            <ul className="gallery-filter post-filter has-dynamic-filter-counter portfolio-filter list-unstyled masonary">
              <li className="filter active" data-filter=".masonary-item"><span>View All</span></li>
              <li className="filter" data-filter=".design"><span>Design</span></li>
              <li className="filter" data-filter=".branding"><span>Branding</span></li>
              <li className="filter" data-filter=".creative"><span>Creative</span></li>
              <li className="filter" data-filter=".minimal"><span>Minimal</span></li>
            </ul>
            <div className="container-fluid">
              <div className="row gallery-content filter-layout">

                <div className="col-lg-3 col-md-6 col-sm-12 design masonary-item">
                  <div className="portfolio-three__single">
                    <div className="portfolio-three__image">
                      <img src={publicUrl+"assets/images/portfolio/portfolio-4-1.jpg"} alt={ imagealt } />
                    </div>
                    <div className="portfolio-three__content">
                      <div className="portfolio-three__content-inner">
                        <Link to="/portfolio-details" className="portfolio-three__link"><i className="fa fa-long-arrow-alt-right" /></Link>
                        <h3><Link to="/portfolio-details">Creative Work</Link></h3>
                        <p><Link to="/portfolio-details">Design.</Link><Link to="/portfolio-details">Branding</Link></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12 masonary-item design">
                  <div className="portfolio-three__single">
                    <div className="portfolio-three__image">
                      <img src={publicUrl+"assets/images/portfolio/portfolio-4-2.jpg"} alt="" />
                    </div>
                     <div className="portfolio-three__content">
                      <div className="portfolio-three__content-inner">
                        <Link to="/portfolio-details" className="portfolio-three__link"><i className="fa fa-long-arrow-alt-right" /></Link>
                        <h3><Link to="/portfolio-details">Creative Work</Link></h3>
                        <p><Link to="/portfolio-details">Design.</Link><Link to="/portfolio-details">Branding</Link></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12 masonary-item minimal">
                  <div className="portfolio-three__single">
                    <div className="portfolio-three__image">
                      <img src={publicUrl+"assets/images/portfolio/portfolio-4-3.jpg"} alt="" />
                    </div>{/* /.portfolio-three__image */}
                     <div className="portfolio-three__content">
                      <div className="portfolio-three__content-inner">
                        <Link to="/portfolio-details" className="portfolio-three__link"><i className="fa fa-long-arrow-alt-right" /></Link>
                        <h3><Link to="/portfolio-details">Creative Work</Link></h3>
                        <p><Link to="/portfolio-details">Design.</Link><Link to="/portfolio-details">Branding</Link></p>
                      </div>
                    </div>
                  </div>{/* /.portfolio-three__single */}
                </div>{/* /.col-md-4 col-sm-12 */}
                <div className="col-lg-3 col-md-6 col-sm-12 masonary-item branding creative">
                  <div className="portfolio-three__single">
                    <div className="portfolio-three__image">
                      <img src={publicUrl+"assets/images/portfolio/portfolio-4-4.jpg"} alt="" />
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
                <div className="col-lg-3 col-md-6 col-sm-12 masonary-item design">
                  <div className="portfolio-three__single">
                    <div className="portfolio-three__image">
                      <img src={publicUrl+"assets/images/portfolio/portfolio-4-5.jpg"} alt="" />
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
                <div className="col-lg-3 col-md-6 col-sm-12 masonary-item design">
                  <div className="portfolio-three__single">
                    <div className="portfolio-three__image">
                      <img src={publicUrl+"assets/images/portfolio/portfolio-4-6.jpg" }alt="" />
                    </div>{/* /.portfolio-three__image */}
                     <div className="portfolio-three__content">
                      <div className="portfolio-three__content-inner">
                        <Link to="/portfolio-details" className="portfolio-three__link"><i className="fa fa-long-arrow-alt-right" /></Link>
                        <h3><Link to="/portfolio-details">Creative Work</Link></h3>
                        <p><Link to="/portfolio-details">Design.</Link><Link to="/portfolio-details">Branding</Link></p>
                      </div>
                    </div>
                  </div>{/* /.portfolio-three__single */}
                </div>{/* /.col-md-4 col-sm-12 */}
                <div className="col-lg-3 col-md-6 col-sm-12 masonary-item minimal">
                  <div className="portfolio-three__single">
                    <div className="portfolio-three__image">
                      <img src={publicUrl+"assets/images/portfolio/portfolio-4-7.jpg"} alt="" />
                    </div>{/* /.portfolio-three__image */}
                     <div className="portfolio-three__content">
                      <div className="portfolio-three__content-inner">
                        <Link to="/portfolio-details" className="portfolio-three__link"><i className="fa fa-long-arrow-alt-right" /></Link>
                        <h3><Link to="/portfolio-details">Creative Work</Link></h3>
                        <p><Link to="/portfolio-details">Design.</Link><Link to="/portfolio-details">Branding</Link></p>
                      </div>
                    </div>
                  </div>{/* /.portfolio-three__single */}
                </div>{/* /.col-md-4 col-sm-12 */}
                <div className="col-lg-3 col-md-6 col-sm-12 masonary-item minimal design">
                  <div className="portfolio-three__single">
                    <div className="portfolio-three__image">
                      <img src={publicUrl+"assets/images/portfolio/portfolio-4-8.jpg"} alt="" />
                    </div>{/* /.portfolio-three__image */}
                     <div className="portfolio-three__content">
                      <div className="portfolio-three__content-inner">
                        <Link to="/portfolio-details" className="portfolio-three__link"><i className="fa fa-long-arrow-alt-right" /></Link>
                        <h3><Link to="/portfolio-details">Creative Work</Link></h3>
                        <p><Link to="/portfolio-details">Design.</Link><Link to="/portfolio-details">Branding</Link></p>
                      </div>
                    </div>
                  </div>{/* /.portfolio-three__single */}
                </div>{/* /.col-md-4 col-sm-12 */}
                <div className="col-lg-3 col-md-6 col-sm-12 masonary-item creative">
                  <div className="portfolio-three__single">
                    <div className="portfolio-three__image">
                      <img src={publicUrl+"assets/images/portfolio/portfolio-4-9.jpg"} alt="" />
                    </div>{/* /.portfolio-three__image */}
                     <div className="portfolio-three__content">
                      <div className="portfolio-three__content-inner">
                        <Link to="/portfolio-details" className="portfolio-three__link"><i className="fa fa-long-arrow-alt-right" /></Link>
                        <h3><Link to="/portfolio-details">Creative Work</Link></h3>
                        <p><Link to="/portfolio-details">Design.</Link><Link to="/portfolio-details">Branding</Link></p>
                      </div>
                    </div>
                  </div>{/* /.portfolio-three__single */}
                </div>{/* /.col-md-4 col-sm-12 */}
                <div className="col-lg-3 col-md-6 col-sm-12 masonary-item">
                  <div className="portfolio-three__single">
                    <div className="portfolio-three__image">
                      <img src={publicUrl+"assets/images/portfolio/portfolio-4-10.jpg"} alt="" />
                    </div>{/* /.portfolio-three__image */}
                    <div className="portfolio-three__content">
                      <div className="portfolio-three__content-inner">
                        <Link to="/portfolio-details" className="portfolio-three__link"><i className="fa fa-long-arrow-alt-right" /></Link>
                        <h3><Link to="/portfolio-details">Creative Work</Link></h3>
                        <p><Link to="/portfolio-details">Design.</Link><Link to="/portfolio-details">Branding</Link></p>
                      </div>
                    </div>
                  </div>{/* /.portfolio-three__single */}
                </div>{/* /.col-md-4 col-sm-12 */}
                <div className="col-lg-3 col-md-6 col-sm-12 masonary-item">
                  <div className="portfolio-three__single">
                    <div className="portfolio-three__image">
                      <img src={publicUrl+"assets/images/portfolio/portfolio-4-11.jpg"} alt="" />
                    </div>{/* /.portfolio-three__image */}
                    <div className="portfolio-three__content">
                      <div className="portfolio-three__content-inner">
                        <Link to="/portfolio-details" className="portfolio-three__link"><i className="fa fa-long-arrow-alt-right" /></Link>
                        <h3><Link to="/portfolio-details">Creative Work</Link></h3>
                        <p><Link to="/portfolio-details">Design.</Link><Link to="/portfolio-details">Branding</Link></p>
                      </div>
                    </div>
                  </div>{/* /.portfolio-three__single */}
                </div>{/* /.col-md-4 col-sm-12 */}
                <div className="col-lg-3 col-md-6 col-sm-12 masonary-item">
                  <div className="portfolio-three__single">
                    <div className="portfolio-three__image">
                      <img src={ publicUrl+ "assets/images/portfolio/portfolio-4-12.jpg" }alt="" />
                    </div>{/* /.portfolio-three__image */}
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
            </div>{/* /.container-fluid */}
          </section>


        }
}

export default PortFolioStandard