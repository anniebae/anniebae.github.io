import React from 'react'

const Dropdown = props => {
  return (
    <div>
      <ul>
        {props.projects.map(x => 
          <li 
            onClick={_ => props.handleClick(x.slug)}
            key={x.slug}>{x.name}</li>
        )}
      </ul>
    </div>
  )
}

export default Dropdown
