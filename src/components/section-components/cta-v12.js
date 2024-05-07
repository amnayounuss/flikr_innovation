import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CtaV12 extends Component {

    render() {
      let publicUrl = process.env.PUBLIC_URL+'/'
      let imagealt = 'image'

    return <section className="cta-one cta-one__pricing-page  go-top">
        <img src={publicUrl+"assets/images/shapes/pricing-shape-2-1.png"} className="cta-one__moc-1" alt={ imagealt }/>
        <img src={publicUrl+"assets/images/shapes/pricing-shape-2-2.png"} className="cta-one__moc-2" alt={ imagealt }/>
        <div className="container">
          <div className="inner-container">
            <div className="cta-one__left">
              <h3>Build Your Business</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
            </div>{/* /.cta-one__left */}
            <div className="cta-one__right">
              <Link to="/contact" className="thm-btn cta-one__btn">Contact Us <i className="fa fa-angle-double-right" /></Link>
            </div>
          </div>
        </div>
      </section>
        }
	}

export default CtaV12