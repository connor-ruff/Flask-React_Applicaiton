import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'

export class Ash extends Component {
    render() {
        const id = 207;
        return (
            <Container>  
            <Row>
                <Col> 
                    <input type="checkbox" onChange={this.props.IncludeNut.bind(this, id)}/>{' '}
                    <label> Ash </label>
                
                </Col>
                <Col>
                    <select name="operand" id="operand" onChange={this.props.setNutOp.bind(this, id)}>
                        <option value="lt"> &lt; </option>
                        <option value="gt"> &gt; </option>
                        <option value="eq"> = </option>
                    </select>
                </Col>
                <Col>
                    <input type="text" 
                        name="threshold"
                        placeholder="Enter Threshold..."
                        style={{flex: '10', padding: '0px'}}
                        padding='5px' 
                        onChange={this.props.setNutVal.bind(this, id)}
                    />
                </Col>
            </Row>
        </Container>
        )
    }

}



export default Ash