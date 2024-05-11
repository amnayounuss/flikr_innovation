import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import Book from '../portfolio-component/book';
import Website from '../portfolio-component/website';
import Mobile from '../portfolio-component/mobile';
import Printing from '../portfolio-component/printing';
import SEO from '../portfolio-component/seo';
import Logo from '../portfolio-component/logo';
import Marketing from '../portfolio-component/smm';
import Video from '../portfolio-component/video';

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

    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'

    return <section className="portfolio-three portfolio-three__standard-page  go-top">
      <ul className="gallery-filter post-filter has-dynamic-filter-counter portfolio-filter list-unstyled masonary">
        <li className="filter active" data-filter=".masonary-item"><span>View All</span></li>
        <li className="filter" data-filter=".book"><span>Book</span></li>
        <li className="filter" data-filter=".branding"><span>Websites</span></li>
        <li className="filter" data-filter=".creative"><span>Mobile Apps</span></li>
        <li className="filter" data-filter=".minimal"><span>Printing</span></li>
        <li className="filter" data-filter=".design"><span>SEO</span></li>
        <li className="filter" data-filter=".branding"><span>Logos</span></li>
        <li className="filter" data-filter=".creative"><span>Marketing</span></li>
        <li className="filter" data-filter=".minimal"><span>Videos</span></li>  


      </ul>
      <div className="container-fluid">
        <div className="row gallery-content filter-layout">

          <Book />
          <Website />
          <Mobile/>
          <Printing/>
          <SEO/>
          <Logo/>
          <Marketing/>
          <Video/>




        </div>{/* /.row no-gutters */}
      </div>{/* /.container-fluid */}
    </section>


  }
}

export default PortFolioStandard