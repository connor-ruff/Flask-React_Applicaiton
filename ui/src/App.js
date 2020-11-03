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
      apiURL : 'http://localhost:5000/foods/',
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
      ],
      nutCols : [
        ['rowAlc','#ffffff'], ['rowProt','#F3F3F3'], ['rowCarb','#ffffff'], ['rowSug','#F3F3F3'], ['rowLip','#ffffff'], ['rowAsh','#F3F3F3'], ['rowEn','#ffffff'], ['rowFib','#F3F3F3']
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

    
    // Clear Display and Reset any Error Message
    for (var entry in this.state.nutCols){
      document.getElementById(this.state.nutCols[entry][0]).style.backgroundColor = this.state.nutCols[entry][1]
    }
    document.getElementById("errorMessage").innerHTML = ''

    var dispHead = document.getElementById("dispHeader")
    dispHead.innerHTML = ""


    // Send Over Data
    var toSend = {};
    var nutList = [];
    for (var index in this.state['nutrients']){
      if (this.state['nutrients'][index].include){

        // Check if numeric value
        if(isNaN(this.state['nutrients'][index].amount)){
          this.erroneousInput( this.state['nutrients'][index]['id'])
        }
        // Check if impossible limit is set
        if (this.state['nutrients'][index].amount < 0){
          this.erroneousInput( this.state['nutrients'][index]['id'])
        }
        if(this.state['nutrients'][index].amount === 0 && this.state['nutrients'][index].operand === "lt" ){
          this.erroneousInput( this.state['nutrients'][index]['id'])
        }

        var temp = {};
        temp['id'] = this.state['nutrients'][index].id;
        temp['amount']  = this.state['nutrients'][index].amount;
        temp['operand'] = this.state['nutrients'][index].operand;
        nutList.push(temp);
      }
    }

    toSend['data'] = nutList;

    if (!(nutList === undefined || nutList.length === 0)){
      axios.post(this.state.apiURL, toSend)
        .then(response => {
          this.showData(response.data['data'])
        })
    }
  }


  showData(data){

      var disp = document.getElementById("dispHeader");


      for (var elem in data){
        var foodObj = data[elem];
  
        // Add A New row
        var newRow = document.createElement("tr")
        disp.appendChild(newRow)

        // Name Entry
        var nameTD = document.createElement("td")
        var textNode = document.createTextNode(foodObj['Name'])
        nameTD.appendChild(textNode)
        newRow.appendChild(nameTD)

        // Measure Entry
        var measTD = document.createElement("td")
        textNode = document.createTextNode(foodObj['Measure'])
        measTD.appendChild(textNode)
        newRow.appendChild(measTD)

        var nutTD ;
        for (var nut in foodObj['Nutrients']){
          nutTD = document.createElement("td")
          textNode = document.createTextNode(foodObj['Nutrients'][nut]['NutrientValue'])
          nutTD.appendChild(textNode)
          newRow.appendChild(nutTD)
        }

      }
      
  
  }

  erroneousInput(errorNut){
    
  
    var IDtoEdit;

  
    var errorMessage = ('Included inputs must be nonnegative real numbers and no nutrients can have values less than 0');
 

    document.getElementById("errorMessage").innerHTML = errorMessage;

    switch(errorNut){
      case 221:
        IDtoEdit = "rowAlc";
        break;
      case 203:
        IDtoEdit = "rowProt";
        break;
      case 205:
        IDtoEdit = "rowCarb";
        break;
      case 269:
        IDtoEdit = "rowSug";
        break;
      case 204:
        IDtoEdit = "rowLip";
        break;
      case 207:
        IDtoEdit = "rowAsh";
        break;
      case 208:
        IDtoEdit = "rowEn";
        break;
      case 291:
        IDtoEdit = "rowFib";
        break;
      default:
        break;

    }

    var panel = document.getElementById(IDtoEdit);
    panel.style.backgroundColor = '#ff000080' 

  }

 

  render(){
    return (
      
    
      <div className="App" id="topLevelDiv">
        <div className="container-fluid">
       
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
