import React, { Component } from 'react';
import Logo from '../pricing/logo';
import Website from '../pricing/website';
import SocialMedia from '../pricing/socialmedia';
import Seo from '../pricing/seo';
import Content from '../pricing/content';

class PricingV4 extends Component {
  render() {
    return (
      <section className="pricing-one pricing-one__pricing-page">
        <div className="container">
          <div className="pricing-one__block">
            <div className="block-title-two text-left">
              <p>get a quote</p>
              <h3>Don't Hesitate To Contact <br /> With Us Get A Call</h3>
            </div>
          </div>

          <div className="pricing-one__btn-block">
            <ul className="list-unstyled nav nav-tabs">
              <li className="nav-item">
                <a href="#logo" className="nav-link active" data-toggle="tab">Logo</a>
              </li>
              <li className="nav-item">
                <a href="#website" className="nav-link" data-toggle="tab">Websites</a>
              </li>
              <li className="nav-item">
                <a href="#socialmedia" className="nav-link " data-toggle="tab">Social Media Marketing</a>
              </li>
              <li className="nav-item">
                <a href="#video" className="nav-link " data-toggle="tab">Video Animation</a>
              </li>
              <li className="nav-item">
                <a href="#seo" className="nav-link " data-toggle="tab">SEO</a>
              </li>
              <li className="nav-item">
                <a href="#ppc" className="nav-link " data-toggle="tab">PPC</a>
              </li>
              <li className="nav-item">
                <a href="#influencer" className="nav-link " data-toggle="tab">Influencer Marketing</a>
              </li>
              <li className="nav-item">
                <a href="#mobile" className="nav-link " data-toggle="tab">Mobile Apps</a>
              </li>
              <li className="nav-item">
                <a href="#content" className="nav-link " data-toggle="tab">Content Writing</a>
              </li>
              <li className="nav-item">
                <a href="#ebook" className="nav-link " data-toggle="tab">E-Book</a>
              </li>
              <li className="nav-item">
                <a href="#printin" className="nav-link " data-toggle="tab">Printing</a>
              </li>
            </ul>
          </div>

          <div className="tab-content" style={{ marginTop: '50px' }}>
            <div className="tab-pane show active" id="logo">
              <Logo />
            </div>
            <div className="tab-pane" id="website">
              <Website />
            </div>
            <div className="tab-pane" id="socialmedia">
              <SocialMedia/>
            </div>
            <div className="tab-pane" id="seo">
              <Seo/>
            </div>
            <div className="tab-pane" id="content">
              <Content/>
            </div>
          
          </div>
        </div>
      </section>
    );
  }
}

export default PricingV4;
