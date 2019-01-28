// Code SimplerComponent Here


const SimplerComponent = props => {

  handleClick = (e) => {
    e.target.style.background = 'red'
  }

  return(
    <div onClick={this.props.handleClick}>I am just happy</div>
  )
}

export default SimplerComponent
