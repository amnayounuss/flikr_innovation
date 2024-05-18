import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import AOS from 'aos';
import 'aos/dist/aos.css';

class ServiceV5 extends Component {
    componentDidMount() {
        AOS.init({ duration: 1500, easing: 'ease-in-out', once: true, disable: false });
    }

    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        let imagealt = 'image';

    return	<section className="service-two service-two__service-page  go-top">
		  <div className="container">
		    <div className="row">
		        <div className="service-two__block">
		          <div className="block-title-two text-left">
		            <p>Our Services</p>
		            <h3>We Offer Exclusive <br /> Service For You</h3>
		          </div>
		          
		      </div>
		      
		    </div>{/* /.row */}

			<div className='row'>
			<div className="service-two__box-wrap">
		          <div className="row">
		            <div className="col-md-6">
		              <div className="service-two__single js-tilt">
		                <div className="service-two__single-image" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/service-bg-1-1.png)'}} />
		                <div className="service-two__single-inner">
		                  <i className="fal fa-solid fa-globe" />
		                  <h3><Link to="/portfolio-standard">Website Development</Link></h3>
		                  <p>Step into the future with Flikr Innovation's web development services in the USA. Transform your business
						   with a sleek, futuristic website tailored to your needs.</p>
		                  <Link to="/portfolio-standard" className="service-two__link"><i className="fa fa-long-arrow-alt-right" /></Link>
		                </div>
		              </div>
		            </div>
		            <div className="col-md-6">
		              <div className="service-two__single js-tilt">
		                <div className="service-two__single-image" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/service-bg-1-2.png)'}} />
		                {/* /.service-two__single-image */}
		                <div className="service-two__single-inner">
		                  <i className="fal fa-solid fa-mobile " />
		                  <h3><Link to="/portfolio-standard">Mobile App Development</Link></h3>
		                  <p>We prioritize user experience, security, and innovation in app development, ensuring high-quality,
						   impactful applications from meticulous planning to rigorous testing</p>
		                  <Link to="/portfolio-standard" className="service-two__link"><i className="fa fa-long-arrow-alt-right" /></Link>
		                  {/* /.service-two__link */}
		                </div>{/* /.service-two__single-inner */}
		              </div>{/* /.service-two__single */}
		            </div>{/* /.col-md-6 */}
					
		            <div className="col-md-6">
		              <div className="service-two__single js-tilt">
		                <div className="service-two__single-image" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/service-bg-1-3.png)'}} />
		                {/* /.service-two__single-image */}
		                <div className="service-two__single-inner">
		                  <i className="fal fa-solid fa-laptop" />
		                  <h3><Link to="/portfolio-standard">Graphic Designing</Link></h3>
		                  <p>Flikr Innovation's graphic design services ensure your brand maintains its visual identity, 
						  crafting stunning logos and UI/UX that leave a lasting impression.</p>
		                  <Link to="/portfolio-standard" className="service-two__link"><i className="fa fa-long-arrow-alt-right" /></Link>
		                  {/* /.service-two__link */}
		                </div>{/* /.service-two__single-inner */}
		              </div>{/* /.service-two__single */}
		            </div>{/* /.col-md-6 */}
					<div className="col-md-6">
		              <div className="service-two__single js-tilt">
		                <div className="service-two__single-image" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/service-bg-1-4.jpg)'}} />
		                {/* /.service-two__single-image */}
		                <div className="service-two__single-inner">
		                  <i className="fal fa-solid fa-book" />
		                  <h3><Link to="/portfolio-standard">E-Book</Link></h3>
		                  <p>Flikr Innovation's e-books offer invaluable insights for maintaining your brand's visual identity and crafting stunning UI/UX.
						   Dive into our collection to elevate your online presence and leave a lasting impression.</p>
		                  <Link to="/portfolio-standard" className="service-two__link"><i className="fa fa-long-arrow-alt-right" /></Link>
		                  {/* /.service-two__link */}
		                </div>{/* /.service-two__single-inner */}
		              </div>{/* /.service-two__single */}
		            </div>{/* /.col-md-6 */}
					
		            
					
					
		          </div>{/* /.row */}
				  <div className='row'>
				  <div className="col-md-6">
		              <div className="service-two__single js-tilt">
		                <div className="service-two__single-image" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/service-bg-1-5.jpg)'}} />
		                {/* /.service-two__single-image */}
		                <div className="service-two__single-inner">
		                  <i className="fal fa-solid fa-bullhorn" />
		                  <h3><Link to="/portfolio-standard">Digital Marketing</Link></h3>
		                  <p>Elevate your online presence with our dynamic digital marketing solutions,
						   blending creativity and innovation to drive remarkable results.</p>
		                  <Link to="/portfolio-standard" className="service-two__link"><i className="fa fa-long-arrow-alt-right" /></Link>
		                  {/* /.service-two__link */}
		                </div>{/* /.service-two__single-inner */}
		              </div>{/* /.service-two__single */}
		            </div>{/* /.col-md-6 */}
		            <div className="col-md-6">
		              <div className="service-two__single js-tilt">
		                <div className="service-two__single-image" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/service-bg-1-6.png)'}} />
		                {/* /.service-two__single-image */}
		                <div className="service-two__single-inner">
		                  <i className="fal fa-chart-network" />
		                  <h3><Link to="/portfolio-standard">SEO</Link></h3>
		                  <p>Elevate your brand online with Flikr Innovation's visionary Local SEO Services,
						   blending technology and creativity for effective audience connection.</p>
		                  <Link to="/portfolio-standard" className="service-two__link"><i className="fa fa-long-arrow-alt-right" /></Link>
		                  {/* /.service-two__link */}
		                </div>{/* /.service-two__single-inner */}
		              </div>{/* /.service-two__single */}
		            </div>{/* /.col-md-6 */}
					
				  </div>




		        </div>{/* /.service-two__box-wrap */}
			</div>



		  </div>{/* /.container */}
		</section>

        }
}

export default ServiceV5