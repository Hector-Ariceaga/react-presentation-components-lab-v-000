// Code SimplerComponent Here
const SimpleComponent = () => {
  handleClick = (e) => {
    e.target.append('!')
  }

  return(
    <div onClick={this.handleClick}>I am just happy</div>
  )
}
