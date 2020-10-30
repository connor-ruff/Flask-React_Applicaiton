import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'

export class Energy extends Component {
    render() {
        const id = 208;
        return (
            <Container>  
            <Row id="rowEn">
                <Col> 
                    <input type="checkbox" onChange={this.props.IncludeNut.bind(this, id)}/>{' '}
                    <label> Energy </label>
                
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
                <Col>
                    <label>(kcal)</label>
                </Col>
            </Row>
        </Container>
        )
    }

}



export default Energy