// Code SimplerComponent Here


const SimplerComponent = () => {

  handleClick = () => {
    //does a thing
  }
  render(){
    return(
      <div onClick={this.handleClick}>I am just happy</div>
    )
  }
}
