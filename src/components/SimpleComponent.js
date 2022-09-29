// Code SimpleComponent Here
import React from 'react'

export default class SimpleComponent extends React.Component {

    constructor(){
        super()

        this.state = {
            mood: "happy"
        }
    }

    handleClick = () => {
        const me = this.state.mood === "happy" ? "sad" : "happy"
        this.setState({mood: me})
    }

    render(){
        return(
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
        )
    }
}