import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

export class GoButton extends Component {
    render() {
        return (
            <div style={styleThis}>


                <Button variant="primary" onClick={this.props.getFacts.bind(this)}>COMPUTE!</Button>
            </div>
        )
    }
}

const styleThis = {
    textAlign: "left"
}

export default GoButton
