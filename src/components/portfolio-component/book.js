import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Book extends Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        let imagealt = 'image';

        // Define an array of book data
        const books = [
            { id: 1, image: "book1.jpg" },
            { id: 2, image: "book2.jpg" },
            { id: 3, image: "book3.jpg" },
            { id: 4, image: "book4.jpg" },
            { id: 5, image: "book5.jpg" },
            { id: 6, image: "book6.jpg" },
            { id: 7, image: "book7.jpg" },
            { id: 8, image: "book8.jpg" },
            { id: 9, image: "book9.jpg" },
            { id: 10, image: "book10.jpg" }
        ];

        return (
            <React.Fragment>
                {/* Map over the books array and render each book dynamically */}
                {books.map(book => (
                    <div key={book.id} className="col-lg-3 col-md-6 col-sm-12 book masonary-item">
                        <div className="portfolio-three__single">
                            <div className="portfolio-three__image">
                                <img src={publicUrl + "assets/images/portfolio/book/" + book.image} alt={imagealt} />
                            </div>
                            <div className="portfolio-three__content">
                                <div className="portfolio-three__content-inner">
                                    <Link to="/portfolio-details" className="portfolio-three__link"><i className="fa fa-long-arrow-alt-right" /></Link>
                                    <h3><Link to="/portfolio-details">Creative Work</Link></h3>
                                    <p><Link to="/portfolio-details">Design.</Link><Link to="/portfolio-details">Book</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </React.Fragment>
        );
    }
}

export default Book;
