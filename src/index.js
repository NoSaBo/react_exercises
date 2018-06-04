import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Imagenes extends React.Component {
  renderImagenes(n) {
    if (n <= 0) {
      return;
    }
    return(
      <div className="row">
        <div className="column">
          <div className="ar_iz" ></div>
          <div className="ar_de" ></div>
        </div>
        <div className="column">
          <div className="ab_iz" ></div>
          <div className="any" >
            {this.renderImagenes(n-1)}
          </div>
        </div>
      </div>
    )
  }
  render() {
    return(
      <div className="any">
        {this.renderImagenes(this.props.n)}
      </div>
    )
  }
}

class Canvas extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      n: 10,

    };
  }

  createTable = () => {
      let table = []

      for (let i = 1; i <= this.state.n; i++) {
        let children = []

        children.push(<td>{i}</td>)
        children.push(<td>{calculateYellowPixels(i)}</td>)

        table.push(<tr>{children}</tr>)
      }
      return table
    }

  render()  {
      return(
        <div>
          <div className="canvas">
            <Imagenes
              n= {this.state.n}
            />
          </div>
          <div>
            <table className="tableinfo">
              <tr>
                <th>n</th>
                <th>Pixels</th>
              </tr>
              {this.createTable()}
            </table>
          </div>
        </div>
      );
  }
}

ReactDOM.render(<Canvas />, document.getElementById('root'));


function calculateYellowPixels(n) {
  let size = 512;
  let count = 0;
  for (let i = 1; i <= n; i++) {
    size = size / 2;
    count = count + (size ** 2);
  }
return count;
}
