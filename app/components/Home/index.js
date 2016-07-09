import React, { Component } from 'react';
import Styles from './styles.scss';

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
              <li><a href="#" id="btn-home">Home</a></li>
              <li><a href="#" id="btn-about">About</a></li>
              <li><a href="#" id="btn-work">Work</a></li>
            </ul>
          </nav>
        </div>
        
        <header>
          <span className="header-name">ANNIE BAE</span>
        </header>

        <div className="slideshow">
          <img src="http://placekitten.com/209/293" alt="ab1" />
          
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

  