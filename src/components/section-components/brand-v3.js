import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class BrandThree extends Component {

       componentDidMount() {

        const $ = window.$;
        if ($('.thm__owl-carousel').length) {
            $('.thm__owl-carousel').each(function () {
                var Self = $(this);
                var carouselOptions = Self.data('options');
                var carouselPrevSelector = Self.data('carousel-prev-btn');
                var carouselNextSelector = Self.data('carousel-next-btn');
                var thmCarousel = Self.owlCarousel(carouselOptions);
                if (carouselPrevSelector !== undefined) {
                    $(carouselPrevSelector).on('click', function () {
                        thmCarousel.trigger('prev.owl.carousel');
                        return false;
                    });
                }
                if (carouselNextSelector !== undefined) {
                    $(carouselNextSelector).on('click', function () {
                        thmCarousel.trigger('next.owl.carousel');
                        return false;
                    });
                }
            });
        }
    }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="brand-one brand-one__home-two">
        <div className="container">
          <div className="brand-one__carousel owl-carousel owl-theme thm__owl-carousel" data-options="{&quot;loop&quot;: true, &quot;autoplay&quot;: true, &quot;autoplayTimeout&quot;: 5000, &quot;items&quot;: 6, &quot;margin&quot;: 150, &quot;smartSpeed&quot;: 700, &quot;nav&quot;: false, &quot;dots&quot;: false, &quot;responsive&quot;: { &quot;0&quot;: { &quot;items&quot;: 2, &quot;margin&quot;: 15 },&quot;575&quot;: { &quot;items&quot;: 3, &quot;margin&quot;: 30 },&quot;767&quot;: { &quot;items&quot;: 3, &quot;margin&quot;: 30 }, &quot;991&quot;: { &quot;items&quot;: 4, &quot;margin&quot;: 30 }, &quot;1199&quot;: { &quot;items&quot;: 4, &quot;margin&quot;: 75 }, &quot;1200&quot;: { &quot;items&quot;: 6 } }}">
            <div className="item">
              <img src={publicUrl+"assets/images/brand/brand-2-1.png"} alt={ imagealt } />
            </div>{/* /.item */}
            <div className="item">
              <img src={publicUrl+"assets/images/brand/brand-2-2.png"} alt={ imagealt } />
            </div>{/* /.item */}
            <div className="item">
              <img src={publicUrl+"assets/images/brand/brand-2-3.png"} alt={ imagealt } />
            </div>{/* /.item */}
            <div className="item">
              <img src={publicUrl+"assets/images/brand/brand-2-4.png"} alt={ imagealt } />
            </div>{/* /.item */}
            <div className="item">
              <img src={publicUrl+"assets/images/brand/brand-2-5.png"} alt={ imagealt } />
            </div>{/* /.item */}
            <div className="item">
              <img src={publicUrl+"assets/images/brand/brand-2-6.png"} alt={ imagealt } />
            </div>{/* /.item */}
            <div className="item">
              <img src={publicUrl+"assets/images/brand/brand-2-1.png"} alt={ imagealt } />
            </div>{/* /.item */}
            <div className="item">
              <img src={publicUrl+"assets/images/brand/brand-2-2.png"} alt={ imagealt } />
            </div>{/* /.item */}
            <div className="item">
              <img src={publicUrl+"assets/images/brand/brand-2-3.png"} alt={ imagealt } />
            </div>{/* /.item */}
            <div className="item">
              <img src={publicUrl+"assets/images/brand/brand-2-4.png"} alt={ imagealt } />
            </div>{/* /.item */}
            <div className="item">
              <img src={publicUrl+"assets/images/brand/brand-2-5.png"} alt={ imagealt } />
            </div>{/* /.item */}
            <div className="item">
              <img src={publicUrl+"assets/images/brand/brand-2-6.png"} alt={ imagealt } />
            </div>{/* /.item */}
          </div>{/* /.brand-one__carousel owl-carousel owl-theme thm__owl-carousel */}
        </div>{/* /.container */}
      </section>



        }
}

export default BrandThree