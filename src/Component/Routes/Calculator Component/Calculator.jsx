import React, { Component } from 'react'
import './Calculator.css'
export class Calculator extends Component {
  addition = () =>
  {

  }
  subtraction = () =>
  {
    
  }
  Multiply = () =>
  {
    
  } 
   addition = () =>
  {
    
  }
  Divide = () =>
  {
    
  }
  clear = () =>
  {
    
  }

  render() {
    return (
      <div className='main'>Calculator
      <br/>
       <input type="text" placeholder='0' />
      <div className="numbers">
         
      <button >1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>0</button>
      <button onClick={addition()}>+</button>
      <button onClick={subtraction()}>-</button>
       <button onclick={Multiply()}>*</button>
       <button onClick={Divide()}>/</button>
       <button onClick={clear()}>C</button>
       </div>
    </div>
 )
  }
}

export default Calculator