import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CtaV5 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="cta-eight text-center  go-top">
			  <div className="cta-eight__content">
			    <h3>Most Opportunity Features <br /> Including In This Saas Landing</h3>
			    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam <br /> rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae</p>
			  </div>{/* /.cta-eight__content */}
			  <img src={publicUrl+"assets/images/resources/home-4-moc-3.png"} alt={ imagealt } className="img-fluid" />
			</section>

        }
	}

export default CtaV5