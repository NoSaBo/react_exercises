import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Fractal} from './fractal.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dimension: 512,
    };
  }

  lambda(nuevaDimension) {
    this.setState({
      dimension: nuevaDimension,
    });
  }

  render()  {
      return(
        <div>
          <Fractal
            dimension= {Number(this.state.dimension)}
            onUpdate={(nuevaDimension) => this.lambda(nuevaDimension)}
          />
        </div>
      );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
