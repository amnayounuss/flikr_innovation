import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class BannerV4 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="banner-four  go-top">
		  <img src={publicUrl+"assets/images/resources/banner-4-1.png" }className="banner-four__moc" alt={ imagealt } />
		  <div className="container-fluid">
		    <div className="row">
		      <div className="col-lg-12">
		        <div className="banner-four__content">
		          <h4>success your mission <span>New</span></h4>
		          <h3>Innovation <br />
		            <span>Life With Sass</span></h3>
		          <p>We are professional &amp; Experiene Digital Agency</p>
		          <Link to="/service" className="thm-btn banner-four__btn">Download Now <i className="fa fa-angle-double-right" /></Link>{/* /.thm-btn banner-four__btn */}
		        </div>{/* /.banner-four__content */}
		      </div>{/* /.col-lg-12 */}
		    </div>{/* /.row */}
		  </div>{/* /.container */}
		</section>

        }
}

export default BannerV4