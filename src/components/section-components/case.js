import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Case extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
       let CustomClass = this.props.customclass ? this.props.customclass : ''
    
    return  <section className={"case-one "+CustomClass}>
        <div className="container  go-top">
          <div className="case-one__top">
            <div className="block-title-two text-left">
              <p>our project</p>
              <h3>Recent Company <br /> Case Studies</h3>
            </div>{/* /.block-title-two */}
            <div className="case-one__top-btn-block">
              <Link to="/service" className="thm-btn">View All Cases <i className="fa fa-angle-double-right" /></Link>
              {/* /.thm-btn */}
            </div>{/* /.case-one__top-btn-block */}
          </div>{/* /.case-one__top */}
          <div className="row">
            <div className="col-lg-4">
              <div className="case-one__single">
                <div className="case-one__image">
                  <img src={publicUrl+"assets/images/case/case-1-1.jpg"} alt={ imagealt } />
                </div>{/* /.case-one__image */}
                <div className="case-one__content">
                  <h3><Link to="/service-details">How To Improve <br /> Business</Link></h3>
                </div>{/* /.case-one__content */}
              </div>{/* /.case-one__single */}
            </div>{/* /.col-lg-4 */}
            <div className="col-lg-4">
              <div className="case-one__single">
                <div className="case-one__image">
                  <img src={publicUrl+"assets/images/case/case-1-2.jpg"} alt={ imagealt } />
                </div>{/* /.case-one__image */}
                <div className="case-one__content">
                  <h3><Link to="/service-details">How To Improve <br /> Business</Link></h3>
                </div>{/* /.case-one__content */}
              </div>{/* /.case-one__single */}
            </div>{/* /.col-lg-4 */}
            <div className="col-lg-4">
              <div className="case-one__single">
                <div className="case-one__image">
                  <img src={publicUrl+"assets/images/case/case-1-3.jpg"} alt={ imagealt } />
                </div>{/* /.case-one__image */}
                <div className="case-one__content">
                  <h3><Link to="/service-details">How To Improve <br /> Business</Link></h3>
                </div>{/* /.case-one__content */}
              </div>{/* /.case-one__single */}
            </div>{/* /.col-lg-4 */}
          </div>{/* /.row */}
        </div>{/* /.container */}
      </section>

        }
}

export default Case