import React, { Component } from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

class FunfactV3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <section className="funfact-one funfact-one__home-three">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-6">
			        <div className="funfact-one__home-three-wrap">
			          <div className="row ">
			            <div className="col-md-6">
			              <div className="funfact-one__single">
			                <div className="funfact-one__icon">
			                  <i className="far fa-user-alt" />
			                </div>{/* /.funfact-one__icon */}
			                <h3><span className="counter">2500</span>{/* /.counter */}+</h3>
			                <p>Project</p>
			              </div>{/* /.funfact-one__single */}
			            </div>{/* /.col-md-6 */}
			            <div className="col-md-6">
			              <div className="funfact-one__single">
			                <div className="funfact-one__icon">
			                  <i className="far fa-heart" />
			                </div>{/* /.funfact-one__icon */}
			                <h3><span className="counter">2960</span>{/* /.counter */}+</h3>
			                <p>Satisfied Clients</p>
			              </div>{/* /.funfact-one__single */}
			            </div>{/* /.col-md-6 */}
			            <div className="col-md-6">
			              <div className="funfact-one__single">
			                <div className="funfact-one__icon">
			                  <i className="far fa-cloud-download" />
			                </div>{/* /.funfact-one__icon */}
			                <h3><span className="counter">5620</span>{/* /.counter */}
			                </h3>
			                <p>Win Awards</p>
			              </div>{/* /.funfact-one__single */}
			            </div>{/* /.col-md-6 */}
			            <div className="col-md-6">
			              <div className="funfact-one__single">
			                <div className="funfact-one__icon">
			                  <i className="far fa-star" />
			                </div>{/* /.funfact-one__icon */}
			                <h3><span className="counter">365</span>{/* /.counter */}+</h3>
			                <p>Team Member</p>
			              </div>{/* /.funfact-one__single */}
			            </div>{/* /.col-md-6 */}
			          </div>{/* /.row */}
			        </div>{/* /.funfact-one__home-three-wrap */}
			      </div>{/* /.col-lg-6 */}
			      <div className="col-lg-6 d-flex">
			        <div className="my-auto">
			          <div className="funfact-one__block">
			            <div className="block-title-two text-left">
			              <h3>Let’s See Our Business Statistics</h3>
			            </div>{/* /.block-title-two text-left */}
			            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiuses
			              mod tempor incididunt ut labore et dolore magna aliqua. Ut enimminim veniam, quis nostrud
			              exercitation</p>
			            <Link to="/about" className="thm-btn funfact-one__btn">Read More <i className="fa fa-angle-double-right" /></Link>
			            {/* /.thm-btn funfact-one__btn */}
			          </div>{/* /.funfact-one__block */}
			        </div>{/* /.my-auto */}
			      </div>{/* /.col-lg-6 */}
			    </div>{/* /.row */}
			  </div>{/* /.container */}
			</section>




        }
}

export default FunfactV3