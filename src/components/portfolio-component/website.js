import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Website extends Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        let imagealt = 'image';

        // Define an array of website data
        const websites = [
            { id: 1, image: "w1.jpg" },
            { id: 2, image: "w2.jpg" },
            { id: 3, image: "w3.jpg" },
            { id: 4, image: "w4.png" },
            { id: 5, image: "w5.png" },
            { id: 6, image: "w6.png" },
            { id: 7, image: "w7.png" },
            { id: 8, image: "w8.jpg" },
            { id: 9, image: "w9.jpg" },
            { id: 10, image: "w10.jpg" }
        ];

        return (
            <React.Fragment>
                {/* Map over the websites array and render each website dynamically */}
                {websites.map(website => (
                    <div key={website.id} className="col-lg-3 col-md-6 col-sm-12 website masonary-item">
                        <div className="portfolio-three__single">
                            <div className="portfolio-three__image">
                                <img src={publicUrl + "assets/images/portfolio/website/" + website.image} alt={imagealt} />
                            </div>
                            <div className="portfolio-three__content">
                                <div className="portfolio-three__content-inner">
                                    <Link to="/portfolio-details" className="portfolio-three__link"><i className="fa fa-long-arrow-alt-right" /></Link>
                                    <h3><Link to="/portfolio-details">Creative Work</Link></h3>
                                    <p><Link to="/portfolio-details">Develop.</Link><Link to="/portfolio-details">Website</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </React.Fragment>
        );
    }
}

export default Website;
