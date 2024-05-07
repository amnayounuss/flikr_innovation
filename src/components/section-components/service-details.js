import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ServiceDetails extends Component {

    render() {

    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'

    return	<section className="service-details">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-6 clearfix">
			        <img src={publicUrl+"assets/images/resources/service-d-moc-1.png"} alt={ imagealt } className="float-right wow fadeInLeft" data-wow-duration="1500ms" />
			      </div>{/* /.col-lg-6 */}
			      <div className="col-lg-6">
			        <div className="service-details__content">
			          <h3>Software Does The <br /> Work But You're Always <br /> In Correct Soluation</h3>
			          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu doloremque laudantium,
			            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
			            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odite.</p>
			          <p>Feaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
			            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur</p>
			          <Link to="/service" className="service-details__link">Continue Reading</Link>{/* /.service-details__link */}
			        </div>{/* /.service-details__content */}
			      </div>{/* /.col-lg-6 */}
			    </div>{/* /.row */}
			    <div className="row">
			      <div className="col-lg-6">
			        <img src={publicUrl+"assets/images/resources/service-d-moc-2.png"} alt={ imagealt } className="wow fadeInRight" data-wow-duration="1500ms" />
			      </div>{/* /.col-lg-6 */}
			      <div className="col-lg-6">
			        <div className="service-details__content">
			          <h3>We Help To Grow Your <br /> Business Growth</h3>
			          <ul className="list-unstyled service-details__list">
			            <li>
			              Sed ut perspiciatis unde omnis iste natus error sit voluptatem acclor emquei laudantium,
			              totam rem aperiam, eaque ipsa quae ab illo inventore
			            </li>
			            <li>But I must explain to you how all this mistaken idea of denouncing plaerais
			              ing pain was born and I will give you a complete account of the syst expound the actual
			              teachings of the great explorer of the truth</li>
			            <li>Dccusamus et iusto odio dignissimos ducimus qui blanditiis prae oluptatum deleniti atque
			              corrupti quos dolores et quas molestia</li>
			          </ul>{/* /.list-unstyled service-details__list */}
			          <Link to="/service" className="service-details__link">Continue Reading</Link>{/* /.service-details__link */}
			        </div>{/* /.service-details__content */}
			      </div>{/* /.col-lg-6 */}
			    </div>{/* /.row */}
			  </div>{/* /.container */}
			</section>

        }
}

export default ServiceDetails