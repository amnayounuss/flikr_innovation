import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutV4 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="about-four  go-top">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-6">
		        <div className="about-four__content">
		          <div className="block-title-two text-left">
		            <h3>Perfect Application <br /> For Your Business</h3>
		          </div>{/* /.block-title-two text-left */}
		          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiuses
		            mod tempor incididunt ut labore et dolore magna aliqua. Ut enimminim veniam, quis nostrud
		            exercitation</p>
		          <div className="about-four__box-wrap">
		            <div className="about-four__box">
		              <div className="about-four__box-icon">
		                <i className="fal fa-atom-alt" />
		              </div>{/* /.about-four__box-icon */}
		              <div className="about-four__box-content">
		                <h3>Connect Ideas</h3>
		                <p>But we ipsum dolor sit amet consectetur adipisicing elit sed do eiusesmod tempor
		                  incididunt</p>
		              </div>{/* /.about-four__box-content */}
		            </div>{/* /.about-four__box */}
		            <div className="about-four__box">
		              <div className="about-four__box-icon">
		                <i className="fal fa-clock" />
		              </div>{/* /.about-four__box-icon */}
		              <div className="about-four__box-content">
		                <h3>Make Schedules</h3>
		                <p>But we ipsum dolor sit amet consectetur adipisicing elit sed do eiusesmod tempor
		                  incididunt</p>
		              </div>{/* /.about-four__box-content */}
		            </div>{/* /.about-four__box */}
		            <div className="about-four__box">
		              <div className="about-four__box-icon">
		                <i className="fal fa-atom-alt" />
		              </div>{/* /.about-four__box-icon */}
		              <div className="about-four__box-content">
		                <h3>Working Mobile</h3>
		                <p>But we ipsum dolor sit amet consectetur adipisicing elit sed do eiusesmod tempor
		                  incididunt</p>
		              </div>{/* /.about-four__box-content */}
		            </div>{/* /.about-four__box */}
		          </div>{/* /.about-four__box-wrap */}
		        </div>{/* /.about-four__content */}
		      </div>{/* /.col-lg-6 */}
		      <div className="col-lg-6">
		        <img src={publicUrl+"assets/images/resources/cta-5-1.png"} className="about-four__moc" alt={ imagealt } />
		      </div>{/* /.col-lg-6 */}
		    </div>{/* /.row */}
		  </div>{/* /.container */}
		</section>

        }
}

export default AboutV4