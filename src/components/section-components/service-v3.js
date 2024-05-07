import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ServiceV3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return	<section className="service-four  go-top">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-3 col-md-6">
		        <div className="service-four__single">
		          <i className="fal fa-atom-alt" />
		          <h3><Link to="/service-details">Advanced Business <br /> Solutions</Link></h3>
		          <p>Sed ut perspiciatis unde omniste <br /> natus error sit voluptatem accutium <br /> doloremque
		            laudantium</p>
		        </div>{/* /.service-four__single */}
		      </div>{/* /.col-lg-3 col-md-6 */}
		      <div className="col-lg-3 col-md-6">
		        <div className="service-four__single">
		          <i className="fal fa-bullseye-arrow" />
		          <h3><Link to="/service-details">Achieve Targets <br />
		              with Goals</Link></h3>
		          <p>Sed ut perspiciatis unde omniste <br /> natus error sit voluptatem accutium <br /> doloremque
		            laudantium</p>
		        </div>{/* /.service-four__single */}
		      </div>{/* /.col-lg-3 col-md-6 */}
		      <div className="col-lg-3 col-md-6">
		        <div className="service-four__single">
		          <i className="fal fa-recycle" />
		          <h3><Link to="/service-details">Increase the Online <br /> Workflow</Link></h3>
		          <p>Sed ut perspiciatis unde omniste <br /> natus error sit voluptatem accutium <br /> doloremque
		            laudantium</p>
		        </div>{/* /.service-four__single */}
		      </div>{/* /.col-lg-3 col-md-6 */}
		      <div className="col-lg-3 col-md-6">
		        <div className="service-four__single">
		          <i className="fal fa-anchor" />
		          <h3><Link to="/service-details">Higher Annualized <br /> Growth</Link></h3>
		          <p>Sed ut perspiciatis unde omniste <br /> natus error sit voluptatem accutium <br /> doloremque
		            laudantium</p>
		        </div>{/* /.service-four__single */}
		      </div>{/* /.col-lg-3 col-md-6 */}
		    </div>{/* /.row */}
		    <div className="service-four__box">
		      <p>But I must explain to you how all this mistaken idea of denouncing pleasure and <br /> praising pain was
		        born and I will give you a complete </p>
		      <div className="service-four__btn-block">
		        <Link to="/service" className="thm-btn service-four__box-btn">Get Started <i className="fa fa-angle-double-right" /></Link>
		      </div>{/* /.service-four__btn-block */}
		    </div>{/* /.service-four__box */}
		  </div>{/* /.container */}
		</section>



        }
}

export default ServiceV3