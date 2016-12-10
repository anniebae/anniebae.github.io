import React, { Component } from 'react';
// import Link from 'react-router/Link'
import Carousel from './Carousel'
import  './styles.css'



export default class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slug: 'whiskers',
      index: 0
    }
    this.handleClick = this.handleClick.bind(this)
    this.nextImage = this.nextImage.bind(this)
  }

  static defaultProps = {
    projects: [
      {
        name: 'Travelography', 
        slug: 'travelography',
        images: [ 
          './images/projects/t1.png',
          './images/projects/t2.png',
          './images/projects/t3.png'
        ]
      }, {
        name: 'Whiskers',
        slug: 'whiskers',
        images: [
          './images/projects/whiskers1.png',
          './images/projects/whiskers2.png',
          './images/projects/whiskers3.png',
          './images/projects/whiskers4.png'
        ]
      }
    ]
  }

  handleClick(slug) {
    this.setState({ slug })
  }

  nextImage() {
    const count = this.props.projects
      .filter(x => x.slug === this.state.slug)
      .map(x => x.images.length)[0]
    this.setState({ 
      index: count - 1 === this.state.index 
        ? 0 
        : this.state.index + 1 
      })
  }

  render() {
    return (
      <div>
        <div>Projects</div>

        <div className="carousel">
          {this.props.projects.map(x =>
              <div 
                key={x.slug}
                onClick={_ => this.handleClick(x.slug)}>
                {x.name}
              </div>
          )}

          {this.props.projects.map(x =>
            <div key={x.name}>
              <div>
                {x.slug === this.state.slug 
                  ? <Carousel onClick={this.nextImage}
                      index={this.state.index}
                      images={x.images} />
                  : null}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }



}
