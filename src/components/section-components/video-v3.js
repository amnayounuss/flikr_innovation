import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class VideoV3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <section className="video-three" style={{backgroundImage: 'url('+publicUrl+'assets/images/resources/video-3-1.jpg)'}}>
            <div className="container text-center">
              <a href="https://www.youtube.com/watch?v=Rw1JBhaoHBs" className="video-popup video-three__btn"><i className="fa fa-play" /></a>
            </div>{/* /.container */}
          </section>

        }
}

export default VideoV3