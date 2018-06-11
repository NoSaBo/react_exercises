import React from 'react';
import ReactDOM from 'react-dom';
import cookie from 'react-cookies';
import './index.css';
import {Navigator} from './navigator.js';
import {FractalApp} from './fractalapp.js';
import {ProcessesApp} from './processesapp.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tabname: "fractal",
    };
  }

  lambda(name) {
    this.setState({tabname: name});
  }

  render()  {
    let elementTab;
    if (this.state.tabname == "fractal") {
      elementTab = (
        <div>
          <FractalApp />
        </div>
      )
    } else if (this.state.tabname == "processes") {
      elementTab = (
        <div>
          <ProcessesApp />
        </div>
      )
    }

      return(
        <div>
          <div>
            <Navigator
              onClick={(name) => this.lambda(name)}
            />
          </div>
          <div>
            {elementTab}
          </div>
        </div>
      );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
