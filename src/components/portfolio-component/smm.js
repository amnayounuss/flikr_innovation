import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Marketing extends Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        let imagealt = 'image';

        // Define an array of marketing data
        const marketingImages = [
            { id: 1, image: "s1.jpg" },
            { id: 2, image: "s2.jpg" },
            { id: 3, image: "s3.jpg" },
            { id: 4, image: "s4.jpg" },
            { id: 5, image: "s5.jpg" },
            { id: 6, image: "s6.jpg" },
            { id: 7, image: "s7.jpg" },
            { id: 8, image: "s8.jpg" },
            { id: 9, image: "s9.jpg" },
            { id: 10, image: "s10.jpg" }
        ];

        return (
            <React.Fragment>
                {/* Map over the marketingImages array and render each image dynamically */}
                {marketingImages.map(image => (
                    <div key={image.id} className="col-lg-3 col-md-6 col-sm-12 design masonary-item">
                        <div className="portfolio-three__single">
                            <div className="portfolio-three__image">
                                <img src={publicUrl + "assets/images/portfolio/smm/" + image.image} alt={imagealt} />
                            </div>
                            <div className="portfolio-three__content">
                                <div className="portfolio-three__content-inner">
                                    <Link to="/portfolio-details" className="portfolio-three__link"><i className="fa fa-long-arrow-alt-right" /></Link>
                                    <h3><Link to="/portfolio-details">Marketing Image</Link></h3>
                                    <p><Link to="/portfolio-details">Design.</Link><Link to="/portfolio-details">Branding</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </React.Fragment>
        );
    }
}

export default Marketing;
