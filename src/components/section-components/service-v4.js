import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ServiceV4 extends Component {

    render() {


    return	<section className="service-five  go-top">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-4">
			        <div className="service-five__single">
			          <div className="service-five__single-inner">
			            <div className="service-five__icon">
			              <i className="far fa-chart-line" />
			            </div>{/* /.service-five__icon */}
			            <h3><Link to="/service-details">Best Performance</Link></h3>
			            <p>Sed ut perspiciatis unde omnis iste
			              natus error sit voluptatem accusante
			              um doloremque laudantium totam
			              rem aperiam eaque ipsa </p>
			          </div>{/* /.service-five__single-inner */}
			        </div>{/* /.service-five__single */}
			      </div>{/* /.col-lg-4 */}
			      <div className="col-lg-4">
			        <div className="service-five__single">
			          <div className="service-five__single-inner">
			            <div className="service-five__icon">
			              <i className="far fa-rss" />
			            </div>{/* /.service-five__icon */}
			            <h3><Link to="/service-details">Easy Configuration</Link></h3>
			            <p>Sed ut perspiciatis unde omnis iste
			              natus error sit voluptatem accusante
			              um doloremque laudantium totam
			              rem aperiam eaque ipsa </p>
			          </div>{/* /.service-five__single-inner */}
			        </div>{/* /.service-five__single */}
			      </div>{/* /.col-lg-4 */}
			      <div className="col-lg-4">
			        <div className="service-five__single">
			          <div className="service-five__single-inner">
			            <div className="service-five__icon">
			              <i className="far fa-unlock-alt" />
			            </div>{/* /.service-five__icon */}
			            <h3><Link to="/service-details">Best Security Sass</Link></h3>
			            <p>Sed ut perspiciatis unde omnis iste
			              natus error sit voluptatem accusante
			              um doloremque laudantium totam
			              rem aperiam eaque ipsa </p>
			          </div>{/* /.service-five__single-inner */}
			        </div>{/* /.service-five__single */}
			      </div>{/* /.col-lg-4 */}
			    </div>{/* /.row */}
			  </div>{/* /.container */}
			</section>


        }
}

export default ServiceV4