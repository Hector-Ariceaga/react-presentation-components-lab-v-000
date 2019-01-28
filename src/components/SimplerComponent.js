// Code SimplerComponent Here


const SimplerComponent = () => {

  handleClick = (e) => {
    e.target.style.background = 'red'
  }

  return(
    <div onClick={this.handleClick}>I am just happy</div>
  )
}

export default SimplerComponent
