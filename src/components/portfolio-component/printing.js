import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Printing extends Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        let imagealt = 'image';

        // Define an array of printing data
        const printings = [
            { id: 1, image: "p1.jpg" },
            { id: 2, image: "p2.png" },
            { id: 3, image: "p3.jpg" },
            { id: 4, image: "p4.png" },
            { id: 5, image: "p5.jpg" },
            { id: 6, image: "p6.jpg" },
            { id: 7, image: "p7.jpg" },
            { id: 8, image: "p8.png" },
            { id: 9, image: "p9.jpg" },
            { id: 10, image: "p10.jpg" }
        ];

        return (
            <React.Fragment>
                {/* Map over the printing data and render each item dynamically */}
                {printings.map(printing => (
                    <div key={printing.id} className="col-lg-3 col-md-6 col-sm-12 printing masonary-item">
                        <div className="portfolio-three__single">
                            <div className="portfolio-three__image">
                                <img src={publicUrl + "assets/images/portfolio/printing/" + printing.image} alt={imagealt} />
                            </div>
                            <div className="portfolio-three__content">
                                <div className="portfolio-three__content-inner">
                                    <Link to="/portfolio-details" className="portfolio-three__link"><i className="fa fa-long-arrow-alt-right" /></Link>
                                    <h3><Link to="/portfolio-details">Printing Work</Link></h3>
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

export default Printing;
