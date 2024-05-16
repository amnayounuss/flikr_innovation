import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Logo from '../pricing/logo';
import Website from '../pricing/website';
import SocialMedia from '../pricing/socialmedia';
import Seo from '../pricing/seo';
import Content from '../pricing/content';
import MobileApp from '../pricing/mobileapp';
import Book from '../pricing/book';
import Printing from '../pricing/printing';
import Animation from '../pricing/animation';
import Influencer from '../pricing/influencermarketing';

class PricingV4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'logo'
    };
  }

  componentDidMount() {
    const { state } = this.props.location;
    if (state && state.activeTab) {
      this.setState({ activeTab: state.activeTab });
    }
  }

  render() {
    const { activeTab } = this.state;

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
                <a href="#logo" className={`nav-link ${activeTab === 'logo' ? 'active' : ''}`} data-toggle="tab">Logo</a>
              </li>
              <li className="nav-item">
                <a href="#website" className={`nav-link ${activeTab === 'website' ? 'active' : ''}`} data-toggle="tab">Websites</a>
              </li>
              <li className="nav-item">
                <a href="#mobile" className={`nav-link ${activeTab === 'mobile' ? 'active' : ''}`} data-toggle="tab">Apps</a>
              </li>
              <li className="nav-item">
                <a href="#ebook" className={`nav-link ${activeTab === 'ebook' ? 'active' : ''}`} data-toggle="tab">E-Book</a>
              </li>
              <li className="nav-item">
                <a href="#printing" className={`nav-link ${activeTab === 'printing' ? 'active' : ''}`} data-toggle="tab">Printing</a>
              </li>
              <li className="nav-item">
                <a href="#socialmedia" className={`nav-link ${activeTab === 'socialmedia' ? 'active' : ''}`} data-toggle="tab">SMM</a>
              </li>
              <li className="nav-item">
                <a href="#animation" className={`nav-link ${activeTab === 'animation' ? 'active' : ''}`} data-toggle="tab">Animation</a>
              </li>
              <li className="nav-item">
                <a href="#seo" className={`nav-link ${activeTab === 'seo' ? 'active' : ''}`} data-toggle="tab">SEO</a>
              </li>
              <li className="nav-item">
                <a href="#influencer" className={`nav-link ${activeTab === 'influencer' ? 'active' : ''}`} data-toggle="tab">Marketing</a>
              </li>
              <li className="nav-item">
                <a href="#content" className={`nav-link ${activeTab === 'content' ? 'active' : ''}`} data-toggle="tab">Writing</a>
              </li>
            </ul>
          </div>

          <div className="tab-content" style={{ marginTop: '50px' }}>
            <div className={`tab-pane ${activeTab === 'logo' ? 'show active' : ''}`} id="logo">
              <Logo />
            </div>
            <div className={`tab-pane ${activeTab === 'website' ? 'show active' : ''}`} id="website">
              <Website />
            </div>
            <div className={`tab-pane ${activeTab === 'mobile' ? 'show active' : ''}`} id="mobile">
              <MobileApp />
            </div>
            <div className={`tab-pane ${activeTab === 'ebook' ? 'show active' : ''}`} id="ebook">
              <Book />
            </div>
            <div className={`tab-pane ${activeTab === 'printing' ? 'show active' : ''}`} id="printing">
              <Printing />
            </div>
            <div className={`tab-pane ${activeTab === 'socialmedia' ? 'show active' : ''}`} id="socialmedia">
              <SocialMedia />
            </div>
            <div className={`tab-pane ${activeTab === 'animation' ? 'show active' : ''}`} id="animation">
              <Animation />
            </div>
            <div className={`tab-pane ${activeTab === 'seo' ? 'show active' : ''}`} id="seo">
              <Seo />
            </div>
            <div className={`tab-pane ${activeTab === 'influencer' ? 'show active' : ''}`} id="influencer">
              <Influencer />
            </div>
            <div className={`tab-pane ${activeTab === 'content' ? 'show active' : ''}`} id="content">
              <Content />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(PricingV4);
