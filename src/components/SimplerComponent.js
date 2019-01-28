// Code SimplerComponent Here
import React from 'react'

const SimplerComponent = props => {

  handleClick = () => {
    <div>wow</div>
  }
  return(
    <div onClick={props.handleClick}>I am just happy</div>
  )
}

export default SimplerComponent
