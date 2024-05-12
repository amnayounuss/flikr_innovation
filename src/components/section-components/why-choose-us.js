import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class WhyChooseUs extends Component {

  render() {

    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'

    return <section className="service-one go-top">
      <div className="container">
        <div className="block-title text-center">
          <p><span>Why Like Us</span></p>
          <h3>Success Your Business With <br />
            Establish Agency</h3>
          <div className="block-title__line" />
        </div>
        <div className="row high-gutter  go-top">
          <div className="col-lg-4">
            <div className="service-one__single">
              <div className="service-one__top">
                <div className="service-one__icon">
                  <img src={publicUrl + "assets/images/shapes/service-i-1.png"} alt={imagealt} />
                </div>
                <div className="service-one__top-content">
                  <h3><Link to="/portfolio-standard">Business Strategy &amp; Market Research</Link></h3>
                  <p>Digital Marketing</p>
                </div>
              </div>
              <p>Elevate your online presence with our dynamic digital marketing
                solutions, blending creativity and innovation to drive remarkable results.</p>
            </div>{/* /.service-one__single */}
          </div>{/* /.col-lg-4 */}
          <div className="col-lg-4">
            <div className="service-one__single">
              <div className="service-one__top">
                <div className="service-one__icon">
                  <img src={publicUrl + "assets/images/shapes/service-i-2.png"} alt={imagealt} />
                </div>{/* /.service-one__icon */}
                <div className="service-one__top-content">
                  <h3><Link to="/portfolio-standard">SEO, PPC &amp; Social
                    Media Soluation</Link></h3>
                  <p>SEO Optimization</p>
                </div>
              </div>
              <p>Elevate your brand online with Flikr Innovation's visionary Local SEO Services,
                blending technology and creativity for effective audience connection."</p>
            </div>{/* /.service-one__single */}
          </div>{/* /.col-lg-4 */}
          <div className="col-lg-4">
            <div className="service-one__single">
              <div className="service-one__top">
                <div className="service-one__icon">
                  <img src={publicUrl + "assets/images/shapes/service-i-3.png"} alt={imagealt} />
                </div>{/* /.service-one__icon */}
                <div className="service-one__top-content">
                  <h3><Link to="/portfolio-standard">Web Design And
                    Development</Link></h3>
                  <p>Web Soluations</p>
                </div>
              </div>
              <p>Step into the future with Flikr Innovation's web development services in the USA.
                Transform your business with a sleek,
                futuristic website tailored to your needs.</p>
            </div>{/* /.service-one__single */}
          </div>{/* /.col-lg-4 */}

        </div>{/* /.row */}

        <div className="row high-gutter  go-top">
          <div className="col-lg-2">
          </div>
          <div className="col-lg-4">
            <div className="service-one__single">
              <div className="service-one__top">
                <div className="service-one__icon">
                  <img src={publicUrl + "assets/images/shapes/service-i-4.png"} alt={imagealt} />
                </div>
                <div className="service-one__top-content">
                  <h3><Link to="/portfolio-standard">Mobile Application Development</Link></h3>
                  <p>App Development</p>
                </div>
              </div>
              <p>We prioritize user experience, security, and innovation in app development, ensuring 
              high-quality, impactful applications from meticulous planning to rigorous testing</p>
            </div>{/* /.service-one__single */}
          </div>{/* /.col-lg-4 */}
          <div className="col-lg-4">
            <div className="service-one__single">
              <div className="service-one__top">
                <div className="service-one__icon">
                  <img src={publicUrl + "assets/images/shapes/service-i-5.png"} alt={imagealt} />
                </div>{/* /.service-one__icon */}
                <div className="service-one__top-content">
                  <h3><Link to="/portfolio-standard">Designing</Link></h3>
                  <p>Graphic Designing</p>
                </div>
              </div>
              <p>Flikr Innovation's graphic design services ensure your brand
               maintains its visual identity, crafting stunning logos and UI/UX that 
               leave a lasting impression.</p>
            </div>{/* /.service-one__single */}
          </div>{/* /.col-lg-4 */}
          <div className="col-lg-2">
          </div>

        </div>
      </div>{/* /.container */}
    </section>

  }
}

export default WhyChooseUs