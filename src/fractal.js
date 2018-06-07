import React from 'react';
import {Canvas} from './canvas.js';

class Controls extends React.Component {
  state = {
    texto: '',
  };

  handleTextChange = (e) => {
    console.log('input :',e.target.value);
    this.setState({texto: e.target.value});
  };

  handleClickChange = (e) =>  {
    this.props.onUpdate(parseInt(this.state.texto, 10));
  };

  render() {
    return (
      <div className="input">
        <input
          type="text"
          value={this.state.texto}
          onChange={this.handleTextChange}
          style={isButtonDisabled(this.state.texto) &&
            notEmpty(this.state.texto) ? {borderColor: "#ff0000"} : {}}
        />
        <button
          onClick={this.handleClickChange}
//          disabled={isButtonDisabled(this.state.texto)}
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
          dimension= {this.props.dimension}
          n= {calculateN(this.props.dimension)}
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
  } else num = Number(num);

  if (num == 0 || num == 1) return true;
  while (num != 1) {
      if (num%2 != 0) return true;
      num = num/2;
  }
  return false;
}

function calculateN(dimension) {
  let i = 0;
  let dim = dimension;
  while (dim > 1) {
      i++;
      dim = Math.ceil(dim/2);
      if (dim == 1) i++;
  }
  return i;
}

function notEmpty(text) {
  if (text == "") return false;
  else return true;
}
