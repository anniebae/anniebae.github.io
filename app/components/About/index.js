import React, { Component } from 'react';
import { render } from 'react-dom'
import {Route, Router, IndexRoute, browserHistory, Link} from 'react-router';
import Styles from './styles.scss';



class About extends Component {
  render() {
    return (

        <div className="about-wrapper">
            {/* container open */}
            <div className="container">

              {/*Top Navigation */}
              <section>
                <p>
                  <button id="trigger-overlay" type="button">
                  </button>
                </p>
              </section>
            </div>
            {/* container close */}

            <div className="overlay overlay-hugeinc">
              <button type="button" className="overlay-close">Close</button>
              <nav>
                <ul>
                  <li><Link to="/" id="btn-home">Home</Link></li>
                  <li><Link to="/about" id="btn-about">About</Link></li>
                  <li><Link to="/work" id="btn-work">Work</Link></li>
                </ul>
              </nav>
            </div>


            <div className="hero">
              <p className="animated fadeInUp">ABOUT
                <div className="hero-sub">
                    WEB DEVELOPER | INFJ | CAPRICORN
                </div>
                {/* <span>WEB DEVELOPER | INFJ | CAPRICORN</span> */}
              </p>
            </div>

            <div className="hello">
              <div className="part">
                <div className="part-title">Currently</div>
                <div className="part-desc">
                  New York City-based developer working at Tenthwave Digital LLC.      
                </div>
              </div>
              
              <div className="part">
                <div className="part-title">In a nutshell</div>
                <div className="part-desc">
                  Alumna of Rutgers University (Communications & Digital Media) and General Assembly (Web Development Immersive). My interest in coding developed from working in the fashion industry, to creating ecommerce content, which eventually lead to building beautiful websites.
                </div>
              </div>
              
              <div className="part">
                <div className="part-title">Things I like</div>
                <div className="part-desc">
                  Hobbies include <a href="http://abaebae.blogspot.com/" target="_blank">photography</a>, running, people-watching, and pestering my cat.
                </div>
              </div>
              
                
                

              <div className="part">
                <div className="part-title">Stack</div>
                <div className="part-desc">
                  languages:  JavaScript, HTML5/CSS3, SASS
                  libraries:  jQuery, Underscore
                  frameworks:  Backbone, Angular
                  tools:  BrowserStack, Litmus, MAMP, SourceTree, Transmit, Photoshop, FogBugz
                  other:  Git, SVN, RWD/UI, Cross Browser Testing, Mobile Testing
                </div>
              </div>
             
            </div>
        </div>

        )
    }
}

export default About;