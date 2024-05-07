import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class TeamPage extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="team-one team-one__team-page">
			  <div className="container">
			    <div className="team-one__top">
			      <div className="row">
			        <div className="col-md-6">
			          <div className="block-title-two text-left">
			            <p><span>Our Team</span></p>
			            <h3>We Have A Creative <br /> Team Member</h3>
			          </div>
			        </div>{/* /.col-md-6 */}
			        <div className="col-md-6 d-flex">
			          <div className="my-auto">
			            <div className="team-one__top-text">
			              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis etes quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est </p>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			    <div className="row">
			      <div className="col-lg-3 col-md-6">
			        <div className="team-one__single">
			          <div className="team-one__image">
			            <img src={publicUrl+"assets/images/team/team-1-1.jpg"} alt={ imagealt } />
			          </div>{/* /.team-one__image */}
			          <div className="team-one__content">
			            <div className="team-one__social">
			              <a href="#"><i className="fab fa-facebook-f" /></a>
			              <a href="#"><i className="fab fa-twitter" /></a>
			              <a href="#"><i className="fab fa-google-plus-g" /></a>
			              <a href="#"><i className="fab fa-behance" /></a>
			            </div>{/* /.team-one__social */}
			            <h3>Kate Sanders</h3>
			            <p>Web designer</p>
			          </div>{/* /.team-one__content */}
			        </div>{/* /.team-one__single */}
			      </div>{/* /.col-lg-3 */}
			      <div className="col-lg-3 col-md-6">
			        <div className="team-one__single">
			          <div className="team-one__image">
			            <img src={publicUrl+"assets/images/team/team-1-2.jpg"} alt={ imagealt } />
			          </div>{/* /.team-one__image */}
			          <div className="team-one__content">
			            <div className="team-one__social">
			              <a href="#"><i className="fab fa-facebook-f" /></a>
			              <a href="#"><i className="fab fa-twitter" /></a>
			              <a href="#"><i className="fab fa-google-plus-g" /></a>
			              <a href="#"><i className="fab fa-behance" /></a>
			            </div>{/* /.team-one__social */}
			            <h3>Jeffrey Walsh</h3>
			            <p>Web designer</p>
			          </div>{/* /.team-one__content */}
			        </div>{/* /.team-one__single */}
			      </div>{/* /.col-lg-3 */}
			      <div className="col-lg-3 col-md-6">
			        <div className="team-one__single">
			          <div className="team-one__image">
			            <img src={publicUrl+"assets/images/team/team-1-3.jpg"} alt={ imagealt } />
			          </div>{/* /.team-one__image */}
			          <div className="team-one__content">
			            <div className="team-one__social">
			              <a href="#"><i className="fab fa-facebook-f" /></a>
			              <a href="#"><i className="fab fa-twitter" /></a>
			              <a href="#"><i className="fab fa-google-plus-g" /></a>
			              <a href="#"><i className="fab fa-behance" /></a>
			            </div>{/* /.team-one__social */}
			            <h3>Amy Carpenter</h3>
			            <p>Web designer</p>
			          </div>{/* /.team-one__content */}
			        </div>{/* /.team-one__single */}
			      </div>{/* /.col-lg-3 */}
			      <div className="col-lg-3 col-md-6">
			        <div className="team-one__single">
			          <div className="team-one__image">
			            <img src={publicUrl+"assets/images/team/team-1-4.jpg"} alt={ imagealt } />
			          </div>{/* /.team-one__image */}
			          <div className="team-one__content">
			            <div className="team-one__social">
			              <a href="#"><i className="fab fa-facebook-f" /></a>
			              <a href="#"><i className="fab fa-twitter" /></a>
			              <a href="#"><i className="fab fa-google-plus-g" /></a>
			              <a href="#"><i className="fab fa-behance" /></a>
			            </div>{/* /.team-one__social */}
			            <h3>Allie Collins</h3>
			            <p>Web designer</p>
			          </div>{/* /.team-one__content */}
			        </div>{/* /.team-one__single */}
			      </div>{/* /.col-lg-3 */}
			      <div className="col-lg-3 col-md-6">
			        <div className="team-one__single">
			          <div className="team-one__image">
			            <img src={publicUrl+"assets/images/team/team-1-5.jpg"} alt={ imagealt } />
			          </div>{/* /.team-one__image */}
			          <div className="team-one__content">
			            <div className="team-one__social">
			              <a href="#"><i className="fab fa-facebook-f" /></a>
			              <a href="#"><i className="fab fa-twitter" /></a>
			              <a href="#"><i className="fab fa-google-plus-g" /></a>
			              <a href="#"><i className="fab fa-behance" /></a>
			            </div>{/* /.team-one__social */}
			            <h3>Eunice Sanders</h3>
			            <p>Web designer</p>
			          </div>{/* /.team-one__content */}
			        </div>{/* /.team-one__single */}
			      </div>{/* /.col-lg-3 */}
			      <div className="col-lg-3 col-md-6">
			        <div className="team-one__single">
			          <div className="team-one__image">
			            <img src={publicUrl+"assets/images/team/team-1-6.jpg"} alt={ imagealt } />
			          </div>{/* /.team-one__image */}
			          <div className="team-one__content">
			            <div className="team-one__social">
			              <a href="#"><i className="fab fa-facebook-f" /></a>
			              <a href="#"><i className="fab fa-twitter" /></a>
			              <a href="#"><i className="fab fa-google-plus-g" /></a>
			              <a href="#"><i className="fab fa-behance" /></a>
			            </div>{/* /.team-one__social */}
			            <h3>Leroy Curtis</h3>
			            <p>Web designer</p>
			          </div>{/* /.team-one__content */}
			        </div>{/* /.team-one__single */}
			      </div>{/* /.col-lg-3 */}
			      <div className="col-lg-3 col-md-6">
			        <div className="team-one__single">
			          <div className="team-one__image">
			            <img src={publicUrl+"assets/images/team/team-1-7.jpg"} alt={ imagealt } />
			          </div>{/* /.team-one__image */}
			          <div className="team-one__content">
			            <div className="team-one__social">
			              <a href="#"><i className="fab fa-facebook-f" /></a>
			              <a href="#"><i className="fab fa-twitter" /></a>
			              <a href="#"><i className="fab fa-google-plus-g" /></a>
			              <a href="#"><i className="fab fa-behance" /></a>
			            </div>{/* /.team-one__social */}
			            <h3>Jean Obrien</h3>
			            <p>Web designer</p>
			          </div>{/* /.team-one__content */}
			        </div>{/* /.team-one__single */}
			      </div>{/* /.col-lg-3 */}
			      <div className="col-lg-3 col-md-6">
			        <div className="team-one__single">
			          <div className="team-one__image">
			            <img src={publicUrl+"assets/images/team/team-1-8.jpg"} alt={ imagealt } />
			          </div>{/* /.team-one__image */}
			          <div className="team-one__content">
			            <div className="team-one__social">
			              <a href="#"><i className="fab fa-facebook-f" /></a>
			              <a href="#"><i className="fab fa-twitter" /></a>
			              <a href="#"><i className="fab fa-google-plus-g" /></a>
			              <a href="#"><i className="fab fa-behance" /></a>
			            </div>{/* /.team-one__social */}
			            <h3>Josie Welch</h3>
			            <p>Web designer</p>
			          </div>{/* /.team-one__content */}
			        </div>{/* /.team-one__single */}
			      </div>{/* /.col-lg-3 */}
			    </div>
			    <div className="text-center">
			      <a href="#" className="thm-btn team-one__more-btn">View More <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn team-one__more-btn */}
			    </div>
			  </div>
			</section>


        }
}

export default TeamPage