import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class PricingV3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <section className="pricing-two">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="pricing-two__single">
                <div className="pricing-two__top">
                  <div className="pricing-two__bubble-1" />{/* /.pricing-two__bubble-1 */}
                  <div className="pricing-two__bubble-2" />{/* /.pricing-two__bubble-2 */}
                  <div className="pricing-two__bubble-3" />{/* /.pricing-two__bubble-3 */}
                  <div className="pricing-two__bubble-4" />{/* /.pricing-two__bubble-4 */}
                  <img src={publicUrl+"assets/images/shapes/pricing-shape-1-1.png"} className="pricing-two__shape" alt={ imagealt } />
                  <h3>Startup</h3>
                  <img src={publicUrl+"assets/images/shapes/pricing-i-2-1.png"} alt={ imagealt } />
                </div>{/* /.pricing-two__top */}
                <div className="pricing-two__bottom">
                  <ul className="list-unstyled pricing-two__list">
                    <li><i className="far fa-check" />50GB Bandwidth</li>
                    <li><i className="far fa-check" />Business &amp; Financ Analysing</li>
                    <li><i className="far fa-check" />24 hour support</li>
                    <li><i className="far fa-check" />Customer Managemet</li>
                    <li><i className="far fa-check" />One Mail Box</li>
                  </ul>{/* /.list-unstyled pricing-two__list */}
                  <p><b>$</b> 24.99 <span>Monthly</span></p>
                  <div className="text-center">
                    <a href="#" className="thm-btn pricing-one__btn pricing-two__btn">Choose Plan <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn pricing-one__btn */}
                  </div>{/* /.text-center */}
                </div>{/* /.pricing-two__bottom */}
              </div>{/* /.pricing-two__single */}
            </div>{/* /.col-lg-4 */}
            <div className="col-lg-4">
              <div className="pricing-two__single">
                <div className="pricing-two__top">
                  <div className="pricing-two__bubble-1" />{/* /.pricing-two__bubble-1 */}
                  <div className="pricing-two__bubble-2" />{/* /.pricing-two__bubble-2 */}
                  <div className="pricing-two__bubble-3" />{/* /.pricing-two__bubble-3 */}
                  <div className="pricing-two__bubble-4" />{/* /.pricing-two__bubble-4 */}
                  <img src={publicUrl+"assets/images/shapes/pricing-shape-1-1.png"} className="pricing-two__shape" alt={ imagealt } />
                  <h3>Corporate</h3>
                  <img src={publicUrl+"assets/images/shapes/pricing-i-2-2.png"} alt={ imagealt } />
                </div>{/* /.pricing-two__top */}
                <div className="pricing-two__bottom">
                  <ul className="list-unstyled pricing-two__list">
                    <li><i className="far fa-check" />50GB Bandwidth</li>
                    <li><i className="far fa-check" />Business &amp; Financ Analysing</li>
                    <li><i className="far fa-check" />24 hour support</li>
                    <li><i className="far fa-check" />Customer Managemet</li>
                    <li><i className="far fa-check" />One Mail Box</li>
                  </ul>{/* /.list-unstyled pricing-two__list */}
                  <p><b>$</b> 24.99 <span>Monthly</span></p>
                  <div className="text-center">
                    <a href="#" className="thm-btn pricing-one__btn pricing-two__btn">Choose Plan <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn pricing-one__btn */}
                  </div>{/* /.text-center */}
                </div>{/* /.pricing-two__bottom */}
              </div>{/* /.pricing-two__single */}
            </div>{/* /.col-lg-4 */}
            <div className="col-lg-4">
              <div className="pricing-two__single">
                <div className="pricing-two__top">
                  <div className="pricing-two__bubble-1" />{/* /.pricing-two__bubble-1 */}
                  <div className="pricing-two__bubble-2" />{/* /.pricing-two__bubble-2 */}
                  <div className="pricing-two__bubble-3" />{/* /.pricing-two__bubble-3 */}
                  <div className="pricing-two__bubble-4" />{/* /.pricing-two__bubble-4 */}
                  <img src={publicUrl+"assets/images/shapes/pricing-shape-1-1.png"} className="pricing-two__shape" alt={ imagealt } />
                  <h3>Premium</h3>
                  <img src={publicUrl+"assets/images/shapes/pricing-i-2-3.png"} alt={ imagealt } />
                </div>{/* /.pricing-two__top */}
                <div className="pricing-two__bottom">
                  <ul className="list-unstyled pricing-two__list">
                    <li><i className="far fa-check" />50GB Bandwidth</li>
                    <li><i className="far fa-check" />Business &amp; Financ Analysing</li>
                    <li><i className="far fa-check" />24 hour support</li>
                    <li><i className="far fa-check" />Customer Managemet</li>
                    <li><i className="far fa-check" />One Mail Box</li>
                  </ul>{/* /.list-unstyled pricing-two__list */}
                  <p><b>$</b> 24.99 <span>Monthly</span></p>
                  <div className="text-center">
                    <a href="#" className="thm-btn pricing-one__btn pricing-two__btn">Choose Plan <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn pricing-one__btn */}
                  </div>{/* /.text-center */}
                </div>{/* /.pricing-two__bottom */}
              </div>{/* /.pricing-two__single */}
            </div>{/* /.col-lg-4 */}
          </div>{/* /.row */}
        </div>{/* /.container */}
      </section>


        }
}

export default PricingV3