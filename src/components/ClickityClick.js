// Code ClickityClick Component Here
import React, { Component } from "react";

class ClickityClick extends Component {
  constructor() {
    super();

    this.state = {
      hasBeenClicked: false
    };
    // console.log(this.state.hasBeenClicked)

  }

  handleClick = () => {
      // if (this.state.hasBeenClicked === false) {
      //     this.setState({
      //         hasBeenClicked: true
      //     })
      // } else {
      //     this.setState({
      //         hasBeenClicked: false
      //     })
      // }

      this.setState(previousState => {
        console.log(previousState)  
        return {
          hasBeenClicked: !previousState.hasBeenClicked
        }
      })






    // console.log(`Before setState: ${this.state.hasBeenClicked}`) // false

    // this.setState({
    //     hasBeenClicked: true
    //     // If we want to access our new state after it has been updated, we can optionally add a callback as a second argument to the this.setState() function. This callback will fire once the state has been updated, ensuring that this.state is now the new, shiny updated state.
    // }, () => console.log(this.state.hasBeenClicked));

    // console.log(`After setState: ${this.state.hasBeenClicked}`) // false
  };

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : "not"} been clicked!</p>

        <button onClick={this.handleClick}>Click me!</button>
        <h1>{this.state.hasBeenClicked}</h1>
      </div>
    );
  }
}

export default ClickityClick;
