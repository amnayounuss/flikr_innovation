import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FooterV4 extends Component {

  componentDidMount() {
    const $ = window.$;

    let publicUrl = process.env.PUBLIC_URL + '/'
    const minscript = document.createElement("script");
    minscript.async = true;
    minscript.src = publicUrl + "assets/js/theme.js";

    document.body.appendChild(minscript);

    $('.go-top').find('a').on('click', function () {
      $(window).scrollTop(0);
    });


  }

  render() {

    let publicUrl = process.env.PUBLIC_URL + '/'
    let imgattr = "Footer logo"

    return (
      <footer className="site-footer-four  go-top">
        <div className="site-footer-four__bubble-1" />{/* /.site-footer-four__bubble-1 */}
        <div className="site-footer-four__bubble-2" />{/* /.site-footer-four__bubble-2 */}
        <div className="site-footer-four__bubble-3" />{/* /.site-footer-four__bubble-3 */}
        <div className="site-footer-four__bubble-4" />{/* /.site-footer-four__bubble-4 */}
        <div className="site-footer-four__mc-wrap">
          <div className="container">
            <div className="site-footer-four__mc-text text-center">
              <h3>Singup Newsletter To Get Update</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan
                <br />tiumrem aperiam eaque ipsa quae ab illo inventore</p>
            </div>{/* /.site-footer-four__mc-text */}
            <form action="#" className="site-footer-four__mc-from">
              <input type="text" name="email" placeholder="Enter Your Email" />
              <button type="submit" className="site-footer-four__mc-btn">Sign Up <i className="fa fa-angle-double-right" /></button>
            </form>{/* /.site-footer-four__mc-from */}
          </div>{/* /.container */}
        </div>{/* /.site-footer-four__mc-wrap */}
        <div className="site-footer-four__upper">
          <div className="container">
            <div className="site-footer-four__upper-sep" />{/* /.site-footer-four__upper-sep */}
            <div className="row">
              <div className="col-lg-4">
                <div className="footer-widget footer-widget__about">
                  <a href="index-2.html">
                    <img src={publicUrl + "assets/images/logo-full-light.png"} alt={imgattr} />
                  </a>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium doloreque
                    laudantiu totam rem aperiam </p>
                </div>{/* /.footer-widget footer-widget__about */}
              </div>{/* /.col-lg-4 */}
              <div className="col-lg-4">
                <div className="footer-widget footer-widget__links">
                  <h3 className="footer-widget__title">Company</h3>{/* /.footer-widget__title */}
                  <ul className="list-unstyled">
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/service">Our Services</Link></li>
                    <li><Link to="/about">Setting &amp; Privecy</Link></li>
                    <li><Link to="/contact">Need a Job?</Link></li>
                    <li><Link to="/blog-grid">Latest Blog</Link></li>
                    <li><Link to="/contact">Get a Quote</Link></li>
                  </ul>{/* /.list-unstyled */}
                </div>{/* /.footer-widget footer-widget__links */}
              </div>{/* /.col-lg-4 */}
              <div className="col-lg-4">
                <div className="footer-widget">
                  <ul className="footer-widget__menu list-unstyled">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">Features</Link></li>
                    <li><Link to="/service">Service</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                  </ul>{/* /.footer-widget__menu list-unstyled */}
                  <div className="footer-widget__social">
                    <p>Folow Us On Social Media</p>
                    <a href="https://www.facebook.com/webtend/"><i className="fab fa-facebook-f" /></a>
                    <a href="https://www.twitter.com/webtend/"><i className="fab fa-twitter" /></a>
                    <a href="https://www.google.com/webtend/"><i className="fab fa-google-plus-g" /></a>
                    <a href="https://www.behance.com/webtend/"><i className="fab fa-behance" /></a>
                  </div>{/* /.footer-widget__social */}
                </div>{/* /.footer-widget */}
              </div>{/* /.col-lg-4 */}
            </div>{/* /.row */}
          </div>{/* /.container */}
        </div>{/* /.site-footer-four__upper */}
        <div className="site-footer-four__bottom">
          <div className="container text-center">
            <div className="site-footer-four__bottom-sep" />{/* /.site-footer-four__upper-sep */}
            <p>Copy@2022 <a href="#">Bizkar</a>. All Right Reserved.</p>
          </div>{/* /.container */}
        </div>{/* /.site-footer-four__bottom */}
      </footer>

    )
  }
}


export default FooterV4