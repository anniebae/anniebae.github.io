import React, { Component } from 'react';
import Styles from './styles.scss';
import {Route, Router, IndexRoute, browserHistory, Link} from 'react-router';
import {render} from 'react-dom';



class Work extends Component {
  render() {
    return (
      <div className="work-wrapper">
        
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

        {/* open/close */}
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
          <p className="animated fadeInUp">WORK
            <div className="hero-sub">2014 - 2016</div>
          </p>
        </div>
        
        <div className="work">  
            <div className="col-md-4 col-sm-6" id="1">
              <img src="images/projects/portfolio.png" className="work-img" alt="" />
            </div>

            <div className="col-md-4 col-sm-6" id="2">
              <div className="travelography"> 
                <a href="images/projects/travelography/main.png">
                  <img src="images/projects/travelography/main.png" className="work-img" alt="Travelography" />
                </a>
                <a href="images/projects/travelography/t1.png"></a>
                <a href="images/projects/travelography/t2.png"></a>
                <a href="images/projects/travelography/t3.png"></a>     
              </div>
            </div>

            <div className="col-md-4 col-sm-6" id="3">
              <div className="sub-urbvn"> 
                <a href="images/projects/suburban/main.png">
                  <img src="images/projects/suburban/main.png" className="work-img" alt="SUB-URBVN" />
                </a>
                <a href="images/projects/suburban/s1.png"></a>
                <a href="images/projects/suburban/s2.png"></a>
                <a href="images/projects/suburban/s3.png"></a>
                <a href="images/projects/suburban/s4.png"></a>    
              </div>
            </div>

            <div className="col-md-4 col-sm-6" id="4">
              <div className="whiskers"> 
                <a href="images/projects/whiskers/main.png">
                  <img src="images/projects/whiskers/main.png" className="work-img" alt="Whiskers" />
                </a>
                <a href="images/projects/whiskers/w1.png"></a>
                <a href="images/projects/whiskers/w2.png"></a>
                <a href="images/projects/whiskers/w3.png"></a>    
              </div>
            </div>

            <div className="col-md-4 col-sm-6" id="5">
              <img src="images/projects/whereTo.png" className="work-img" alt="" />
            </div>

            <div className="col-md-4 col-sm-6" id="6">
              <div className="ix4"> 
                <a href="images/projects/ix4/main.png">
                  <img src="images/projects/ix4/main.png" className="work-img" alt="Ix4" />
                </a>
                <a href="images/projects/ix4/i1.png"></a>
                <a href="images/projects/ix4/i2.png"></a>   
              </div>
            </div>

            <div className="col-md-4 col-sm-6" id="7">
              <img src="images/projects/RESTaurant.png" className="work-img" alt="" />
            </div>

            <div className="col-md-4 col-sm-6" id="8">
              <div className="hike"> 
                <a href="images/projects/hike/main.png">
                  <img src="images/projects/hike/main.png" className="work-img" alt="Ix4" />
                </a>
                <a href="images/projects/hike/h1.png"></a>
                <a href="images/projects/hike/h2.png"></a>
                <a href="images/projects/hike/h3.png"></a>
                <a href="images/projects/hike/h4.png"></a>   
              </div>
                {/*<img src="images/projects/hike.png" class="work-img" alt=""> */}
            </div>
        </div>
      </div>
    )
  }
}


export default Work;