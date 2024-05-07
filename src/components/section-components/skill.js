import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Skill extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="progress-one">
			  <img src={publicUrl+"assets/images/shapes/progress-bg-1.png"} alt={ imagealt } className="progress-one__bg" />
			  <div className="container">
			    <img src={publicUrl+"assets/images/resources/progress-1-1.png"} alt={ imagealt } className="progress-one__moc" />
			    <div className="row justify-content-end">
			      <div className="col-lg-6">
			        <div className="progress-one__content">
			          <div className="block-title text-left">
			            <p><span>Our Skills</span></p>
			            <h3>know Everything About <br /> Professional Skills</h3>
			            <div className="block-title__line" />{/* /.block-title__line */}
			          </div>{/* /.block-title */}
			          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod tempor incid idunt ut labore
			            et dolore magna aliqua. Ut enim ad minim veniam</p>
			          <div className="progress-one__progress-wrap">
			            <div className="progress-one__progress__bar">
			              <div className="progress-one__progress__bar-top">
			                <h3>Business Strategy</h3>
			              </div>{/* /.progress-one__progress__bar-top */}
			              <div className="progress-one__progress__bar-line">
			                <span className="wow fadeIn" data-wow-duration="1500ms" style={{width: '95%', backgroundColor: '#3f02a8'}}>
			                  <b>95%</b></span>
			              </div>{/* /.progress-one__progress__bar-line */}
			            </div>{/* /.progress-one__progress__bar */}
			            <div className="progress-one__progress__bar">
			              <div className="progress-one__progress__bar-top">
			                <h3>SEO Optimization</h3>
			              </div>{/* /.progress-one__progress__bar-top */}
			              <div className="progress-one__progress__bar-line">
			                <span className="wow fadeIn" data-wow-duration="1500ms" style={{width: '87%', backgroundColor: '#ff57a4'}}>
			                  <b>87%</b></span>
			              </div>{/* /.progress-one__progress__bar-line */}
			            </div>{/* /.progress-one__progress__bar */}
			            <div className="progress-one__progress__bar">
			              <div className="progress-one__progress__bar-top">
			                <h3>Social Media Marketing</h3>
			              </div>{/* /.progress-one__progress__bar-top */}
			              <div className="progress-one__progress__bar-line">
			                <span className="wow fadeIn" data-wow-duration="1500ms" style={{width: '63%', backgroundColor: '#00c8b3'}}>
			                  <b>63%</b></span>
			              </div>{/* /.progress-one__progress__bar-line */}
			            </div>{/* /.progress-one__progress__bar */}
			            <div className="progress-one__progress__bar">
			              <div className="progress-one__progress__bar-top">
			                <h3>Web Development</h3>
			              </div>{/* /.progress-one__progress__bar-top */}
			              <div className="progress-one__progress__bar-line">
			                <span className="wow fadeIn" data-wow-duration="1500ms" style={{width: '55%', backgroundColor: '#ff9b0d'}}>
			                  <b>55%</b></span>
			              </div>{/* /.progress-one__progress__bar-line */}
			            </div>{/* /.progress-one__progress__bar */}
			          </div>{/* /.progress-one__progress-wrap */}
			        </div>{/* /.progress-one__content */}
			      </div>{/* /.col-lg-6 */}
			    </div>{/* /.row justify-content-end */}
			  </div>{/* /.container */}
			</section>


        }
}

export default Skill