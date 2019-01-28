// Code SimplerComponent Here
import React, {Component} from 'react';

export default class SimplerComponent extends Component {

  handleClick = () => {
    //does a thing
  }
  render(){
    return(
      <div onClick={this.handleClick}>I am just happy</div>
    )
  }
}
