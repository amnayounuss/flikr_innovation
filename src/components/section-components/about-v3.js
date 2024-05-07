import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutV3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="about-three  go-top">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-6">
		        <img src={publicUrl+"assets/images/resources/cta-4-1.png"} className="about-three__moc" alt={ imagealt } />
		      </div>{/* /.col-lg-6 */}
		      <div className="col-lg-6">
		        <div className="about-three__content">
		          <div className="block-title-two text-left">
		            <h3>Showcase Your Apps With Bizkar</h3>
		          </div>{/* /.block-title-two */}
		          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eius
		            mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
		            exercitation</p>
		          <h4>Started With Us</h4>
		          <p>But we must ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut
		            labore dolore magna aliqua. </p>
		          <Link to="/about" className="thm-btn about-three__btn">Read More <i className="fa fa-angle-double-right" /></Link>
		          {/* /.thm-btn about-three__btn */}
		        </div>{/* /.about-three__content */}
		      </div>{/* /.col-lg-6 */}
		    </div>{/* /.row */}
		  </div>{/* /.container */}
		</section>


        }
}

export default AboutV3