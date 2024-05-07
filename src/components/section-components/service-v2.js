import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ServiceV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return	<section className="service-three  go-top">
		  <div className="container">
		    <div className="block-title-two text-center">
		      <h3>We Are Professional Services <br /> Provider. We Are Very Unique, Clean <br /> Simple &amp; Modern</h3>
		    </div>{/* /.block-title-two text-center */}
		    <div className="row">
		      <div className="col-xl-3 col-lg-6">
		        <div className="service-three__single">
		          <i className="fal fa-star" />
		          <h3><Link to="/service-details">Clean Design</Link></h3>
		          <p>Lorem ipsum dolor sit amet consectetur adipisicing eli sed eiusmod tempor incidid</p>
		        </div>{/* /.service-three__single */}
		      </div>{/* /.col-lg-3 col-md-6 */}
		      <div className="col-xl-3 col-lg-6">
		        <div className="service-three__single">
		          <i className="fal fa-umbrella" />
		          <h3><Link to="/service-details">Secure Design</Link></h3>
		          <p>Lorem ipsum dolor sit amet consectetur adipisicing eli sed eiusmod tempor incidid</p>
		        </div>{/* /.service-three__single */}
		      </div>{/* /.col-lg-3 col-md-6 */}
		      <div className="col-xl-3 col-lg-6">
		        <div className="service-three__single">
		          <i className="fal fa-laptop-code" />
		          <h3><Link to="/service-details">User Friendly</Link></h3>
		          <p>Lorem ipsum dolor sit amet consectetur adipisicing eli sed eiusmod tempor incidid</p>
		        </div>{/* /.service-three__single */}
		      </div>{/* /.col-lg-3 col-md-6 */}
		      <div className="col-xl-3 col-lg-6">
		        <div className="service-three__single">
		          <i className="fal fa-database" />
		          <h3><Link to="/service-details">Big Data Store </Link></h3>
		          <p>Lorem ipsum dolor sit amet consectetur adipisicing eli sed eiusmod tempor incidid</p>
		        </div>{/* /.service-three__single */}
		      </div>{/* /.col-lg-3 col-md-6 */}
		    </div>{/* /.row */}
		  </div>{/* /.container */}
		</section>


        }
}

export default ServiceV2