import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutV6 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="about-three about-three__about-page  go-top">
			  <div className="container">
			    <div className="row">
			      <div className="col-xl-6">
			        <div className="about-three__content">
			          <div className="block-title-two text-left">
			            <p>What we do</p>
			            <h3>Marketing Is Our <br /> Professional Business </h3>
			          </div>{/* /.block-title-two */}
			          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo
			            remque laudantium totam rem aperiam eaque ipsa quae abillo inventore veritatis et quasi
			            architecto beatae vitae dicta sunt explicabo. </p>
			          <h4>Started With Us</h4>
			          <p>Domnis iste natus error sit voluptatem accusantium mque laudantium totam see
			            rem aperiam eaque ipsa quae abillo inventore veritatis et quasi</p>
			          <Link to="/service-details" className="thm-btn about-three__btn">Read More <i className="fa fa-angle-double-right" /></Link>
			          {/* /.thm-btn about-three__btn */}
			        </div>{/* /.about-three__content */}
			      </div>{/* /.col-lg-6 */}
			      <div className="col-xl-6 d-flex justify-content-center">
			        <div className="video-one__box">
			          <img src={publicUrl+"assets/images/resources/video-4-1.png"} alt={ imagealt } />
			          <a href="https://www.youtube.com/watch?v=Rw1JBhaoHBs" className="video-popup video-one__btn"><i className="fa fa-play" /></a>{/* /.video-popup video-one__btn */}
			        </div>{/* /.video-one__box */}
			      </div>{/* /.col-lg-6 */}
			    </div>{/* /.row */}
			  </div>{/* /.container */}
			</section>
        }
}

export default AboutV6