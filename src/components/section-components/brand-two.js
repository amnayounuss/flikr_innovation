import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class BrandTwo extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="brand-one brand-one__home-two">
      <div className="container">
        <div className="block-title-two text-center">
          <p>our clients</p>
          <h3>We Have Many Others Partners <br /> Our Global Clients Here</h3>
        </div>{/* /.block-title-two */}
        <div className="brand-one__carousel owl-carousel owl-theme thm__owl-carousel" data-options="{&quot;loop&quot;: true, &quot;autoplay&quot;: true, &quot;autoplayTimeout&quot;: 5000, &quot;items&quot;: 6, &quot;margin&quot;: 150, &quot;smartSpeed&quot;: 700, &quot;nav&quot;: false, &quot;dots&quot;: false, &quot;responsive&quot;: { &quot;0&quot;: { &quot;items&quot;: 2, &quot;margin&quot;: 15 },&quot;575&quot;: { &quot;items&quot;: 3, &quot;margin&quot;: 30 },&quot;767&quot;: { &quot;items&quot;: 3, &quot;margin&quot;: 30 }, &quot;991&quot;: { &quot;items&quot;: 4, &quot;margin&quot;: 30 }, &quot;1199&quot;: { &quot;items&quot;: 4, &quot;margin&quot;: 75 }, &quot;1200&quot;: { &quot;items&quot;: 6 } }}">
          <div className="item">
            <img src={publicUrl+"assets/images/brand/brand-2-1.png"} alt="" />
          </div>{/* /.item */}
          <div className="item">
            <img src={publicUrl+"assets/images/brand/brand-2-2.png"} alt="" />
          </div>{/* /.item */}
          <div className="item">
            <img src={publicUrl+"assets/images/brand/brand-2-3.png"} alt="" />
          </div>{/* /.item */}
          <div className="item">
            <img src={publicUrl+"assets/images/brand/brand-2-4.png"} alt="" />
          </div>{/* /.item */}
          <div className="item">
            <img src={publicUrl+"assets/images/brand/brand-2-5.png"} alt="" />
          </div>{/* /.item */}
          <div className="item">
            <img src={publicUrl+"assets/images/brand/brand-2-6.png"} alt="" />
          </div>{/* /.item */}
          <div className="item">
            <img src={publicUrl+"assets/images/brand/brand-2-1.png"} alt="" />
          </div>{/* /.item */}
          <div className="item">
            <img src={publicUrl+"assets/images/brand/brand-2-2.png"} alt="" />
          </div>{/* /.item */}
          <div className="item">
            <img src={publicUrl+"assets/images/brand/brand-2-3.png"} alt="" />
          </div>{/* /.item */}
          <div className="item">
            <img src={publicUrl+"assets/images/brand/brand-2-4.png"} alt="" />
          </div>{/* /.item */}
          <div className="item">
            <img src={publicUrl+"assets/images/brand/brand-2-5.png"} alt="" />
          </div>{/* /.item */}
          <div className="item">
            <img src={publicUrl+"assets/images/brand/brand-2-6.png"} alt="" />
          </div>{/* /.item */}
        </div>{/* /.brand-one__carousel owl-carousel owl-theme thm__owl-carousel */}
      </div>{/* /.container */}
    </section>


        }
}

export default BrandTwo