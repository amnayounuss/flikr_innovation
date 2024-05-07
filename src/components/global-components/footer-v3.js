import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FooterV3 extends Component {

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
      <footer className="site-footer-three  go-top">
        <div className="container text-center">
          <Link to="/" className="site-footer-three__logo">
            <img src={publicUrl + "assets/images/logo-3-1.png"} alt={imgattr} />
          </Link>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incid dunt ut <br /> labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          <p>Copy@ 2022 <a href="#">Bizkar</a>. All Right Reserved. Design By <a href="#">Layerdrops</a></p>
        </div>{/* /.container */}
      </footer>

    )
  }
}


export default FooterV3