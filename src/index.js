import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Fractal} from './fractal.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dimensionA: 512,
      dimensionB: 512,
    };
  }

  lambda(nuevaDimensionA, nuevaDimensionB) {
    this.setState({
      dimensionA: nuevaDimensionA,
      dimensionB: nuevaDimensionB,
    });
  }

  render()  {
      return(
        <div>
          <Fractal
            dimensionA= {Number(this.state.dimensionA)}
            dimensionB= {Number(this.state.dimensionB)}
            onUpdate={(nuevaDimensionA, nuevaDimensionB) => this.lambda(nuevaDimensionA, nuevaDimensionB)}
          />
        </div>
      );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
