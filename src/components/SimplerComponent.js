// Code SimplerComponent Here
import React, {Component} from 'react';
export default class SimpleComponent extends Component {

  handleClick = () => {
    return <div>So nice I can say it twice!</div>
  }

  return(
    <div onClick={this.handleClick}>I am just happy</div>
  )
}
