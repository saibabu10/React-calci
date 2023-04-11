import React, { Component } from 'react'
import './Calculator.css';
export class Calculator extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        expression:"", 
      };
    }
    numberIsPressed = (event) =>
    {
      let inputString = this.state.expression + event.currentTarget.value;
      this.setState({expression: inputString}); 
    };
    operatorIsPressed = (event) =>
    {
        let inputString = this.state.expression;
        if(inputString !== "" && inputString.length>0)
        {
            let lastIndexChar = inputString.charAt(inputString.length-1);
            if(lastIndexChar !== event.currentTarget.value && lastIndexChar.match(/^([0-9])$/))
            {
            inputString = this.state.expression + event.currentTarget.value;
            this.setState({expression:inputString});
            }
        }
    };
    calculateTheResult = () =>
    {
        let inputExpression = this.state.expression;
        if(inputExpression !== "" && inputExpression.length > 0)
        {
          let lastIndexChar = inputExpression.charAt(inputExpression.length-1);
          if(!lastIndexChar.match(/^([0-9])$/))
          {
inputExpression = inputExpression.substring(0,inputExpression.length-1);
          }
          let finalOutput = eval(inputExpression);
          this.setState({expression:finalOutput.toString()});
        }
    };
    clearButton = () =>
    {
        this.setState({expression: ""});
    };
  render() {
    return (
      <form className='border'>
        <div className='text'>
            <br/>
            <input type='textbox' value={this.state.expression}/>
        </div>
        <div className='button'>
            <button value="1" onClick={this.numberIsPressed}>1</button>
            <button value="2" onClick={this.numberIsPressed}>2</button>
            <button value="3" onClick={this.numberIsPressed}>3</button>
            <button value="4" onClick={this.numberIsPressed}>4</button>
            <button value="5" onClick={this.numberIsPressed}>5</button>
            <button value="6" onClick={this.numberIsPressed}>6</button>
            <button value="7" onClick={this.numberIsPressed}>7</button>
            <button value="8" onClick={this.numberIsPressed}>8</button>
            <button value="9" onClick={this.numberIsPressed}>9</button>
            <button value="0" onClick={this.numberIsPressed}>0</button>
            <button value="+" onClick={this.operatorIsPressed}>+</button>
            <button value="-" onClick={this.operatorIsPressed}>-</button>
            <button value="*" onClick={this.operatorIsPressed}>*</button>
            <button value="/" onClick={this.operatorIsPressed}>/</button>
            <button value="Clear" onClick={this.clearButton}>CLR</button>
            {/* <button value="Delete" onClick={}>DEL</button> */}
            {/* <button value="dot" onClick={}>.</button> */}
            <button value="Equalto" onClick={this.calculateTheResult}>=</button>
        </div>
      </form>
    )
  }
}

export default Calculator