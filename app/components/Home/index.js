import React, { Component } from 'react';
import Styles from './styles.scss';
import {Route, Router, IndexRoute, browserHistory, Link} from 'react-router';
import {render} from 'react-dom';


const css = {
  slideshow: { 
    position: 'relative', 
    width: '740px', 
    height: '557px'
  },
  img: { 
    position: 'relative', 
    top: '0px', 
    left: '0px',
    zIndex: 4, 
    opacity: 0, 
    width: '740px', 
    height: '557px' 
  }
}

class Home extends Component {

  render() {
    return (
      <div id="body">
        <div className="container">
          <section>
            <p>
              <button id="trigger-overlay" type="button">
              </button>
            </p>
          </section>
        </div>
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
        
        <header>
          <span className="header-name">ANNIE BAE</span>
        </header>

        <div className="slideshow" style={css.slideshow}>
          <img src="http://placekitten.com/223/291" alt="ab1" style={css.img} />
          
        </div>

        <div className="social">
          <ul>
            <li>
              <a href="https://github.com/anniebae" target="_blank"><img src="images/github.png" alt="" /></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/anniebae" target="_blank"><img src="images/linkedin.png" alt="" /></a>
            </li>
            <li>
              <a href="https://twitter.com/bae_annie" target="_blank"><img src="images/twitter.png" alt="" /></a>
            </li>
            <li>
              <a href="https://www.instagram.com/anniebae" target="_blank"><img src="images/instagram.png" alt="" /></a>
            </li>
          </ul>
        </div>

        <p className="email">
          <a href="mailto:bae.annie@gmail.com?subject=Hiya&amp;body=Hey Annie! I stumbled upon your website and wanted to say hello :)">
            bae[dot]annie[at]gmail[dot]com
          </a>
        </p>

        <div className="copyright">
          <span>© 2016 anniebae</span>
        </div>
      </div>
    )
  }
}

export default Home;

  