import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SEO extends Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        let imagealt = 'image';

        // Define an array of printing data
        const seos = [
            { id: 1, image: "seo1.png" },
            { id: 2, image: "seo2.png" },
            { id: 3, image: "seo3.png" },
            { id: 4, image: "seo4.png" },
            { id: 5, image: "seo5.png" },
            { id: 6, image: "seo6.png" },
            { id: 7, image: "seo7.png" }
        ];

        return (
            <React.Fragment>
                {/* Map over the printing data and render each item dynamically */}
                {seos.map(seo => (
                    <div key={seo.id} className="col-lg-3 col-md-6 col-sm-12 seo masonary-item">
                        <div className="portfolio-three__single">
                            <div className="portfolio-three__image">
                                <img src={publicUrl + "assets/images/portfolio/seo/" + seo.image} alt={imagealt} />
                            </div>
                            <div className="portfolio-three__content">
                                <div className="portfolio-three__content-inner">
                                    <Link to="/pricing" className="portfolio-three__link"><i className="fa fa-long-arrow-alt-right" /></Link>
                                    <h3><Link to="/pricing">Printing Work</Link></h3>
                                    <p><Link to="/pricing">Perform.</Link><Link to="/portfolio-details">SEO</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </React.Fragment>
        );
    }
}

export default SEO;
