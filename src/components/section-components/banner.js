import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Banner extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="banner-one go-top" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/banner-bg-1-1.png)'}}>
				  <img src={publicUrl+"assets/images/resources/banner-1-1.png"} alt={ imagealt } className="banner-one__moc" />
				  
				  <div className="container-fluid">
				    <div className="row">
				      <div className="col-lg-6">
				        <div className="banner-one__content">
				          <h3><span>Creative & Innovative  </span> <br />Digital <br />  Solution</h3>
				          <p>We are professional &amp; Experiene Digital Agency</p>
				          <Link to="/service" className="thm-btn banner-one__btn">Discover Now <i className="fa fa-angle-double-right" /></Link>{/* /.thm-btn */}
				        </div>
				      </div>
				    </div>
				  </div>
				</section>
        }
}

export default Banner