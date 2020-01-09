import React, { Component } from 'react'

class ClickityClick extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    handleClick = () => {
        this.setState(previousState => {
            return {
                count: previousState.count + 1
            }
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}

export default ClickityClick
