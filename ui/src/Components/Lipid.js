import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'

export class Lipid extends Component {
    render() {
        const id = 204;
        
        return (
            <Container>  
            <Row id="rowLip">
                <Col> 
                    <input type="checkbox" onChange={this.props.IncludeNut.bind(this, id)}/>{' '}
                    <label> Lipid </label>
                
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
                    <label>(g)</label>
                </Col>
            </Row>
        </Container>
        )
    }

}



export default Lipid