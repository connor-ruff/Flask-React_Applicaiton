import React, {Component} from 'react';
import axios from 'axios';
import Header from './Components/Header';
import './App.css';
import Alcohol from './Components/Alcohol';
import Protein from './Components/Protein';
import Lipid from './Components/Lipid';
import Carb from './Components/Carbs';
import Sugar from './Components/Sugar';
import Ash from './Components/Ash';
import Energy from './Components/Energy';
import Fiber from './Components/Fiber';
import GoButton from './Components/GoButton'
import Display from './Components/Display'

class App extends Component {

    state= {
      nutrients: [
          {
            id: 221,
            name: 'Alcohol / Ethyl',
            include: false,
            amount: 0.0,
            operand: "lt"
          },
          {
            id: 203,
            name: 'Protein',
            include: false,
            amount: 0.0,
            operand: "lt"
          },
          {
            id: 204,
            name: 'Lipids (Fat)',
            include: false,
            amount: 0.0,
            operand: "lt"
          },
          {
            id: 205,
            name: 'Carbs',
            include: false,
            amount: 0.0,
            operand: "lt"
          },
          {
            id: 269,
            name: 'Sugars',
            include: false,
            amount: 0.0,
            operand: "lt"
          },
          {
            id: 207,
            name: 'Ash',
            include: false,
            amount: 0.0,
            operand: "lt"
          },
          {
            id: 208,
            name: 'Energy',
            include: false,
            amount: 0.0,
            operand: "lt"
          },
          {
            id: 291,
            name: 'Fiber',
            include: false,
            amount: 0.0,
            operand: "lt"
          }
      ]
    }

  IncludeNut = (id) => {
    this.setState({nutrients : this.state.nutrients.map(nutrients => {
      if (nutrients.id === id){
        nutrients.include = !nutrients.include;
      }
      return nutrients;
    })})
  }

  setNutVal =  (id, t) => {
      var val = parseFloat(t.target.value);
      this.setState({nutrients: this.state.nutrients.map(nutrients => {
        if(nutrients.id === id){
          nutrients.amount = val ;
        }
        return nutrients;
      })})
  }

  setNutOp = (id, t) => {
    this.setState({nutrients: this.state.nutrients.map(nutrients => {
      if (nutrients.id === id){
        nutrients.operand = t.target.value;
      }
      return nutrients;
    } )})
  }

  getFacts = () => {

    var toSend = {};
    var nutList = [];
    for (var index in this.state['nutrients']){
      if (this.state['nutrients'][index].include){
        var temp = {};
        temp['id'] = this.state['nutrients'][index].id;
        temp['amount']  = this.state['nutrients'][index].amount;
        temp['operand'] = this.state['nutrients'][index].operand;
        nutList.push(temp);
      }
    }

    toSend['data'] = nutList;

    
    const article = { test: 'message', second: 'okayathen'};
    axios.post('http://127.0.0.1:5000/foods/', toSend)
      .then(response => console.log(response.data))
  }

  render(){
    return (
      
      <div className="App">
        <div className="container">
       
            <Header />

           
            <Alcohol IncludeNut={this.IncludeNut} setNutVal={this.setNutVal} setNutOp={this.setNutOp}/>
          

            <Protein IncludeNut={this.IncludeNut} setNutVal={this.setNutVal} setNutOp={this.setNutOp}/>

            <Carb IncludeNut={this.IncludeNut} setNutVal={this.setNutVal} setNutOp={this.setNutOp}/>

            <Sugar IncludeNut={this.IncludeNut} setNutVal={this.setNutVal} setNutOp={this.setNutOp}/>

            <Lipid IncludeNut={this.IncludeNut} setNutVal={this.setNutVal} setNutOp={this.setNutOp}/>

            <Ash IncludeNut={this.IncludeNut} setNutVal={this.setNutVal} setNutOp={this.setNutOp}/>

            <Energy IncludeNut={this.IncludeNut} setNutVal={this.setNutVal} setNutOp={this.setNutOp}/>

            <Fiber IncludeNut={this.IncludeNut} setNutVal={this.setNutVal} setNutOp={this.setNutOp}/>

            <br></br>
            <GoButton getFacts={this.getFacts} />
            <br></br>
            <Display />
        
        </div>
      </div>
      
    );
  }
}

export default App;
