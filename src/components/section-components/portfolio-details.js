import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class PortFolioDetails extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <section className="portfolio-details">
        <div className="container">
          <h3 className="portfolio-details__title">Creative Illustration</h3>
          <br />
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
            sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
            ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum</p>
          <br />
          <img src={publicUrl+"assets/images/portfolio/portfolio-d-1.jpg"} alt={ imagealt } className="img-fluid" />
          <br />
          <br />
          <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I
            will give you a complete account of the system, and expound the actual teachings of the great explorer of
            the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself,
            because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter
            consequences that are extremely painful. Nor again is there anyone who</p>
          <br />
          <h4>Project Info</h4>
          <br />
          <div className="portfolio-details__box">
            <div className="portfolio-details__box-single">
              <h3>Project Name</h3>
              <p>Creative Design</p>
            </div>{/* /.portfolio-details__box-single */}
            <div className="portfolio-details__box-single">
              <h3>Project Date</h3>
              <p>05 July 2019</p>
            </div>{/* /.portfolio-details__box-single */}
            <div className="portfolio-details__box-single">
              <h3>Our Clients </h3>
              <p>Bc Design Studio</p>
            </div>{/* /.portfolio-details__box-single */}
            <div className="portfolio-details__box-single">
              <h3>Location</h3>
              <p>850 Street, Chicago</p>
            </div>
            <div className="portfolio-details__box-single">
              <h3>End Date</h3>
              <p>10 July 2019</p>
            </div>
          </div>
        </div>
      </section>


        }
}

export default PortFolioDetails