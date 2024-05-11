import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Logo extends Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        let imagealt = 'image';

        // Define an array of logo data
        const logos = [
            { id: 1, image: "logo1.png" },
            { id: 2, image: "logo2.jpg" },
            { id: 3, image: "logo3.png" },
            { id: 4, image: "logo4.png" },
            { id: 5, image: "logo5.jpg" },
            { id: 6, image: "logo6.jpg" },
            { id: 7, image: "logo7.jpg" },
            { id: 8, image: "logo8.jpg" },
            { id: 9, image: "logo9.jpg" },
            { id: 10, image: "logo10.jpg" }
        ];

        return (
            <React.Fragment>
                {/* Map over the logos array and render each logo dynamically */}
                {logos.map(logo => (
                    <div key={logo.id} className="col-lg-3 col-md-6 col-sm-12 logo masonary-item">
                        <div className="portfolio-three__single">
                            <div className="portfolio-three__image">
                                <img src={publicUrl + "assets/images/portfolio/logo/" + logo.image} alt={imagealt} />
                            </div>
                            <div className="portfolio-three__content">
                                <div className="portfolio-three__content-inner">
                                    <Link to="/portfolio-details" className="portfolio-three__link"><i className="fa fa-long-arrow-alt-right" /></Link>
                                    <h3><Link to="/portfolio-details">Logo Design</Link></h3>
                                    <p><Link to="/portfolio-details">Design.</Link><Link to="/portfolio-details">Logo</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </React.Fragment>
        );
    }
}

export default Logo;
