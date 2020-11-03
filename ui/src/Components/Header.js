import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import '../App.css';



function Header(){
    return (

        <Jumbotron fluid style={{backgroundImage: '../banana.jpg', backgroundSize: 'cover'}}>
               
                    <h1 style={headerStyle}>Nutrient Specification</h1>
                    <p style={subStyle}>Select nutrient limits to see foods that meet the criteria</p>
                    <p style={subStyle}>Select checkbox to include specification in results</p>
                
           
        </Jumbotron>
    )
}

const headerStyle = {
    color: 'white',
    fontSize: '80px'

  }

const subStyle = {
    color: 'white',
    fontSize: '20px'
}

export default Header;