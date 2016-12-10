import React from 'react'

const Carousel = props => {
  return (
    <div>
      {props.images.map((x, i) =>
        props.index === i
          ? <img 
              onClick={props.onClick}
              key={x} 
              src={x} 
              className="project-img" />
          : null
      )}
    </div>
  )
}

export default Carousel