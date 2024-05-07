import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Video extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <section className="video-one  go-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="video-one__box wow fadeInLeft" data-wow-duration="1500ms">
                  <img src={publicUrl+"assets/images/resources/video-1-1.jpg"} alt={ imagealt } />
                  <a href="https://www.youtube.com/watch?v=Rw1JBhaoHBs" className="video-popup video-one__btn"><i className="fa fa-play" /></a>{/* /.video-popup video-one__btn */}
                </div>{/* /.video-one__box */}
              </div>{/* /.col-lg-6 */}
              <div className="col-lg-6 d-flex">
                <div className="my-auto">
                  <div className="video-one__content">
                    <div className="block-title-two text-left">
                      <p>What we do</p>
                      <h3>Investment Planning <br /> Pays Best Interest.</h3>
                    </div>{/* /.block-title-two */}
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tem
                      por incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo </p>
                    <ul className="list-unstyled video-one__list">
                      <li>
                        <i className="far fa-check" />
                        Smashing Book 6 Is Here New Frontiers In Web Design
                      </li>
                      <li>
                        <i className="far fa-check" />
                        Introduction To Animation And The iMessage App Store With Shruggie
                      </li>
                      <li>
                        <i className="far fa-check" />
                        Get Your Mobile Site Ready For The 2018 Holiday ways goods
                      </li>
                      <li>
                        <i className="far fa-check" />
                        Making Distributed Product Teams Work More Efficiently other
                      </li>
                    </ul>{/* /.list-unstyled video-one__list */}
                    <Link to="/about" className="thm-btn">Read More <i className="fa fa-angle-double-right" /></Link>
                    {/* /.thm-btn */}
                  </div>{/* /.video-one__content */}
                </div>{/* /.my-auto */}
              </div>{/* /.col-lg-6 */}
            </div>{/* /.row */}
          </div>{/* /.container */}
        </section>

        }
}

export default Video