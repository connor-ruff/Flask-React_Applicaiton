import React, { Component } from 'react'

export class GoButton extends Component {
    render() {
        return (
            <div style={styleThis}>

                <button>COMPUTE!</button>
            </div>
        )
    }
}

const styleThis = {
    textAlign: "left"
}

export default GoButton
