import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutStyleTwo extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="about-two  go-top">
		  <img src={publicUrl+"assets/images/shapes/about-two-bg.png"} alt={ imagealt } className="about-two__bg" />
		  <div className="container">
		    <img src={publicUrl+"assets/images/resources/cta-2-1.png"} alt={ imagealt } className="about-two__moc" />
		    <div className="row">
		      <div className="col-lg-6">
		        <div className="about-two__content">
		          <div className="block-title text-left">
		            <p><span>What We Do</span></p>
		            <h3>We Offer Best Soluation <br /> For Your Business</h3>
		            <div className="block-title__line" />{/* /.block-title__line */}
		          </div>{/* /.block-title */}
		          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod tempor incid idunt ut labore
		            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc itation ullamco laboris nisi
		            ut aliquip exea commodo consequat.</p>
		          <div className="about-two__box">
		            <div className="about-two__box-icon">
		              <i className="far fa-leaf" />
		            </div>{/* /.about-two__box-icon */}
		            <div className="about-two__box-content">
		              <h3>Manage Your Project</h3>
		              <p>Consectetur adipisicing elit sed eiusmod tempor incididunt ut labore et dolore magna
		                aliqua. Ut enim ad minim veniam</p>
		            </div>{/* /.about-two__box-content */}
		          </div>{/* /.about-two__box */}
		          <div className="about-two__box">
		            <div className="about-two__box-icon">
		              <i className="far fa-laptop-code" />
		            </div>{/* /.about-two__box-icon */}
		            <div className="about-two__box-content">
		              <h3>Business &amp; Data Analytics</h3>
		              <p>Consectetur adipisicing elit sed eiusmod tempor incididunt ut labore et dolore magna
		                aliqua. Ut enim ad minim veniam</p>
		            </div>{/* /.about-two__box-content */}
		          </div>{/* /.about-two__box */}
		        </div>{/* /.about-two__content */}
		      </div>{/* /.col-lg-6 */}
		    </div>{/* /.row */}
		  </div>{/* /.container */}
		</section>


        }
}

export default AboutStyleTwo