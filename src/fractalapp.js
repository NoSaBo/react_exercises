import React from 'react'
import cookie from 'react-cookies';
import {Fractal} from './fractal.js';

export class FractalApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
    if (!cookie.load('dimensionA')) {
      this.setState({
        dimensionA: 512,
        dimensionB: 512,
      });
    } else {
      this.setState({
        dimensionA: cookie.load('dimensionA'),
        dimensionB: cookie.load('dimensionB'),
      });
    }
  }

  lambda(nuevaDimensionA, nuevaDimensionB) {
    this.setState({
      dimensionA: nuevaDimensionA,
      dimensionB: nuevaDimensionB,
    });
    cookie.save('dimensionA', nuevaDimensionA, { path: '/'});
    cookie.save('dimensionB', nuevaDimensionB, { path: '/'});
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
