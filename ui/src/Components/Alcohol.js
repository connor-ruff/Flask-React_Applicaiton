import React, { Component } from 'react'

export class Alcohol extends Component {



    render() {
        const id = 221;

        return (
            <div>
                <form >
            
                    <input type="checkbox" onChange={this.props.IncludeNut.bind(this, id)}/>
                    <label> Alcohol </label>

                    <select name="operand" id="operand" onChange={this.props.setNutOp.bind(this, id)}>
                        <option value="lt"> &lt; </option>
                        <option value="gt"> &gt; </option>
                        <option value="eq"> = </option>
                    </select>
                   
                    <input type="text" 
                        name="threshold"
                        placeholder="Enter Threshold..."
                        style={{flex: '10', padding: '5px'}}
                        padding='5px' 
                        onChange={this.props.setNutVal.bind(this, id)}

                    />

                </form>
                
            </div>
        )
    }

}



export default Alcohol
