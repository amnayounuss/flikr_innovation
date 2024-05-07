import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class VideoV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <section className="video-two">
              <div className="container">
                <div className="video-two__block">
                  <h3>How Does It Works</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusesmod tempor incididunt ut <br /> labore et dolore magna aliqua. Ut enimminim veniam exercitation</p>
                </div>{/* /.video-two__block */}
                <div className="video-two__box text-center">
                  <a href="https://www.youtube.com/watch?v=fDftH_IlfBk" className="video-popup">
                    <img src={publicUrl+"assets/images/resources/video-2-1.png"} alt={ imagealt } />
                  </a>{/* /.video-popup */}
                </div>{/* /.video-two__box */}
              </div>{/* /.container */}
            </section>


        }
}

export default VideoV2