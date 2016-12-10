import React, { Component } from 'react'


export default class Home extends Component {
  
  static defaultProps = {
    projects: [
      {
        name: 'Travelography', 
        images: [ 
          './images/projects/t1.png',
          './images/projects/t2.png',
          './images/projects/t3.png'
        ]
      }, {
        name: 'Whiskers',
        images: [
          './images/projects/whiskers1.png',
          './images/projects/whiskers2.png',
          './images/projects/whiskers3.png',
          './images/projects/whiskers4.png'
        ]
      }

    ]
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <div className="App-header">
          <img src='./IMG_6223.jpg' className="App-logo" alt="logo" />
          <h2>Annie Bae</h2>
        </div>

        <div className="carousel">
          {this.props.projects.map(x =>
            <div key={x.name}>
              <div>{x.name}</div>
              <div>
                {x.images.map(y => 
                  <img key={y} src={y} />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}