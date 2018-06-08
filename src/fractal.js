import React from 'react';
import {Canvas} from './canvas.js';

class Controls extends React.Component {
  state = {
    texto1: '',
    texto2: '',
  };
//Hacer reutiulizable hadleTextChange!!!
  handleTextChange1 = (e) => {
    console.log('input :',e.target.value);
    this.setState({texto1: e.target.value});
  };

  handleTextChange2 = (e) => {
    console.log('input :',e.target.value);
    this.setState({texto2: e.target.value});
  };

  handleClickChange = (e) =>  {
    this.props.onUpdate(parseInt(this.state.texto1, 10), parseInt(this.state.texto2, 10));
  };

  render() {
    return (
      <div className="input">
        <input
          type="text"
          value={this.state.texto1}
          onChange={this.handleTextChange1}
          style={isButtonDisabled(this.state.texto1) &&
            notEmpty(this.state.texto1) ? {borderColor: "#ff0000"} : {}}
        />
        <input
          type="text"
          value={this.state.texto2}
          onChange={this.handleTextChange2}
          style={isButtonDisabled(this.state.texto2) &&
            notEmpty(this.state.texto2) ? {borderColor: "#ff0000"} : {}}
        />
        <button
          onClick={this.handleClickChange}
          disabled={isButtonDisabled(this.state.texto1) || isButtonDisabled(this.state.texto2)}
        >
          Update
        </button>
      </div>
    );
  }
}

export class Fractal extends React.Component {
  render() {
    return(
      <div>
        <Controls onUpdate={this.props.onUpdate}/>
        <Canvas
          dimensionA= {this.props.dimensionA}
          dimensionB= {this.props.dimensionB}
          n= {calculateN(this.props.dimensionA, this.props.dimensionB)}
        />
      </div>
    );
  }
}

function isButtonDisabled(texto) {
  return !texto || condition(texto)
}

function condition(num){

//  if (num == "") return true;
  if (isNaN(num)) {
    return true;
  } else return false;//num = Number(num);
/*
  if (num == 0 || num == 1) return true;
  while (num != 1) {
      if (num%2 != 0) return true;
      num = num/2;
  }
  return false;
*/
}

function calculateN(a, b) {
  if (calculaten(a) <= calculaten(b)) return calculaten(a) + 1;
  else return calculaten(b) + 1;
}

function calculaten(a) {
  let i=0;
  while (a > 1) {
    i++;
    a = Math.ceil(a/2);
  }
  return i;
}

function notEmpty(text) {
  if (text == "") return false;
  else return true;
}
