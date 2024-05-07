import React, { Component } from 'react';
import parse from 'html-react-parser';

class SocialCounter extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <section className="social-counter">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="social-counter__single">
                <div className="social-counter__icon">
                  <i className="fab fa-facebook-f" />
                </div>{/* /.social-counter__icon */}
                <div className="social-counter__content">
                  <h3><span className="counter">2560</span>{/* /.counter */}K</h3>
                  <p>Followers</p>
                </div>{/* /.social-counter__content */}
              </div>{/* /.social-counter__single */}
            </div>{/* /.col-lg-3 col-md-6 */}
            <div className="col-lg-3 col-md-6">
              <div className="social-counter__single">
                <div className="social-counter__icon">
                  <i className="fab fa-youtube" />
                </div>{/* /.social-counter__icon */}
                <div className="social-counter__content">
                  <h3><span className="counter">9680</span>{/* /.counter */}K</h3>
                  <p>Followers</p>
                </div>{/* /.social-counter__content */}
              </div>{/* /.social-counter__single */}
            </div>{/* /.col-lg-3 col-md-6 */}
            <div className="col-lg-3 col-md-6">
              <div className="social-counter__single">
                <div className="social-counter__icon">
                  <i className="fab fa-dribbble" />
                </div>{/* /.social-counter__icon */}
                <div className="social-counter__content">
                  <h3><span className="counter">2560</span>{/* /.counter */}K</h3>
                  <p>Followers</p>
                </div>{/* /.social-counter__content */}
              </div>{/* /.social-counter__single */}
            </div>{/* /.col-lg-3 col-md-6 */}
            <div className="col-lg-3 col-md-6">
              <div className="social-counter__single">
                <div className="social-counter__icon">
                  <i className="fab fa-twitter" />
                </div>{/* /.social-counter__icon */}
                <div className="social-counter__content">
                  <h3><span className="counter">2560</span>{/* /.counter */}K</h3>
                  <p>Followers</p>
                </div>{/* /.social-counter__content */}
              </div>{/* /.social-counter__single */}
            </div>{/* /.col-lg-3 col-md-6 */}
          </div>{/* /.row */}
        </div>{/* /.container */}
      </section>

        }
}

export default SocialCounter