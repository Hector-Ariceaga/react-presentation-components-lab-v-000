// Code SimplerComponent Here

const SimpleComponent = () => {
  
  handleClick = () => {
    return <div>'So nice I can say it twice!'</div>
  }

  return(
    <div onClick={this.handleClick}>I am just happy</div>
  )
}

export default SimpleComponent
