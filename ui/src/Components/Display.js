import React, { Component } from 'react'
import '../App.css';

export class Display extends Component {
    render() {


        return (
            <div>
                <h3>Display</h3>
                <table className="tableClass">
                    <thead>
                    <tr>
                        <th>Food Name / Description</th>
                        <th>Serving Size</th>
                        <th>Protein (g)</th>
                        <th>Lipids (g)</th>
                        <th>Carbs (g)</th>
                        <th>Ash (g)</th>
                        <th>Energy (kcal)</th>
                        <th>Alcohol (g)</th>
                        <th>Sugar (g)</th>
                        <th>Fiber (g)</th>

                    </tr>
                    </thead>
                    <tbody id="dispHeader" >

                    </tbody>
                </table>
            </div>
        )
    }
}

export default Display
