import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CtaV4 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="cta-seven  go-top">
			  <img src={publicUrl+"assets/images/resources/home-4-moc-2.png"} className="cta-seven__moc" alt={ imagealt } />
			  <div className="container">
			    <div className="row justify-content-end">
			      <div className="col-lg-5">
			        <div className="cta-seven__content">
			          <div className="cta-six__icon">
			            <i className="fas fa-envelope-open" />
			          </div>{/* /.cta-six__icon */}
			          <h3>Perfect Application <br /> For Your Business</h3>
			          <p>Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
			            totam rem aperieeaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
			            dicta sunt explicabo emo enim ipsam</p>
			          <Link to="/contact" className="thm-btn cta-six__btn">Get Started <i className="fa fa-angle-double-right" /></Link>
			          {/* /.thm-btn cta-six__btn */}
			        </div>{/* /.cta-seven__content */}
			      </div>{/* /.col-lg-5 */}
			    </div>{/* /.row */}
			  </div>{/* /.container */}
			</section>

        }
	}

export default CtaV4