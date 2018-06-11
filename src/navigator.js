import React from 'react';
import './index.css';

export class Navigator extends React.Component {

  render()  {
      return(
        <div className= "navigator">
          <div
            className="tab"
            onClick={() => this.props.onClick("fractal")}
            >
            <p>Fractal</p>
          </div>
          <div
            className="tab"
            onClick={() => this.props.onClick("processes")}
            >
            <p>Processes</p>
          </div>
        </div>
      );
  }
}
