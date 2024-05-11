import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Mobile extends Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        let imagealt = 'image';

        // Define an array of mobile data
        const mobiles = [
            { id: 1, image: "app1.png" },
            { id: 2, image: "app2.png" },
            { id: 3, image: "app3.png" },
            { id: 4, image: "app4.png" },
            { id: 5, image: "app5.png" },
            { id: 6, image: "app6.png" },
            { id: 7, image: "app7.png" },
            { id: 8, image: "app8.png" },
            { id: 9, image: "app9.png" },
            { id: 10, image: "app10.png" }
        ];

        return (
            <React.Fragment>
                {/* Map over the mobiles array and render each mobile dynamically */}
                {mobiles.map(mobile => (
                    <div key={mobile.id} className="col-lg-3 col-md-6 col-sm-12 design masonary-item">
                        <div className="portfolio-three__single">
                            <div className="portfolio-three__image">
                                <img src={publicUrl + "assets/images/portfolio/mobile/" + mobile.image} alt={imagealt} />
                            </div>
                            <div className="portfolio-three__content">
                                <div className="portfolio-three__content-inner">
                                    <Link to="/portfolio-details" className="portfolio-three__link"><i className="fa fa-long-arrow-alt-right" /></Link>
                                    <h3><Link to="/portfolio-details">Creative Work</Link></h3>
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

export default Mobile;
