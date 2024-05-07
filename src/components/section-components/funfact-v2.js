import React, { Component } from 'react';
import parse from 'html-react-parser';

class FunfactV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <section className="funfact-one funfact-one__home-two">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1500ms">
		        <div className="funfact-one__single">
		          <div className="funfact-one__icon">
		            <i className="far fa-user-alt" />
		          </div>{/* /.funfact-one__icon */}
		          <h3><span className="counter">2500</span>{/* /.counter */}+</h3>
		          <p>Project</p>
		        </div>{/* /.funfact-one__single */}
		      </div>{/* /.col-lg-3 col-md-6 */}
		      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1500ms">
		        <div className="funfact-one__single">
		          <div className="funfact-one__icon">
		            <i className="far fa-heart" />
		          </div>{/* /.funfact-one__icon */}
		          <h3><span className="counter">2960</span>{/* /.counter */}+</h3>
		          <p>Satisfied Clients</p>
		        </div>{/* /.funfact-one__single */}
		      </div>{/* /.col-lg-3 col-md-6 */}
		      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1500ms">
		        <div className="funfact-one__single">
		          <div className="funfact-one__icon">
		            <i className="far fa-cloud-download" />
		          </div>{/* /.funfact-one__icon */}
		          <h3><span className="counter">5620</span>{/* /.counter */}
		          </h3>
		          <p>Win Awards</p>
		        </div>{/* /.funfact-one__single */}
		      </div>{/* /.col-lg-3 col-md-6 */}
		      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1500ms">
		        <div className="funfact-one__single">
		          <div className="funfact-one__icon">
		            <i className="far fa-star" />
		          </div>{/* /.funfact-one__icon */}
		          <h3><span className="counter">365</span>{/* /.counter */}+</h3>
		          <p>Team Member</p>
		        </div>{/* /.funfact-one__single */}
		      </div>{/* /.col-lg-3 col-md-6 */}
		    </div>{/* /.row */}
		  </div>{/* /.container */}
		</section>



        }
}

export default FunfactV2