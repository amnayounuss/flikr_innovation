import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class BannerV3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="banner-three  go-top">
			  <div className="banner-three__circle-1" />{/* /.banner-three__circle-1 */}
			  <div className="banner-three__circle-2" />{/* /.banner-three__circle-2 */}
			  <img src={publicUrl+"assets/images/resources/banner-3-moc-1-1.png"} alt={ imagealt } className="banner-three__moc" />
			  <div className="container">
			    <div className="row">
			      <div className="col-xl-6 col-lg-9">
			        <div className="banner-three__content">
			          <h3>Innovation <br /> Your <span>New Life &amp;</span> <br /> New Thoughts</h3>
			          <p>We are professional &amp; Experiene Digital Agency</p>
			          <a href="#" className="thm-btn banner-three__btn">Download Now <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn banner-three__btn */}
			        </div>{/* /.banner-three__content */}
			      </div>{/* /.col-lg-6 */}
			    </div>{/* /.row */}
			  </div>{/* /.container */}
			</section>
        }
}

export default BannerV3