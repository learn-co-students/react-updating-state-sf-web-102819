import React, {Component} from 'react';
 
class ButtonCounter extends Component {
  constructor() {
    super()
    // initial state has count set at 0
    this.state = {
      count: 0
    }
  }
 
  handleClick = () => {
    // when handleClick is called, newCount is set to whatever this.state.count is plus 1 PRIOR to calling this.setState
    // let newCount = this.state.count + 1
    // this.setState({
    //   count: newCount
    // })



    // Here, there is no need for a separate variable assignment like let newCount = this.state.count + 1. It is important that we still return an object that was in the same structure as before as the return value of this function becomes the new state.
     this.setState(previousState => {
      console.log(previousState)  
      return {
            count: previousState.count + 1
        }
    })
  }
 
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }
}
 
export default ButtonCounter