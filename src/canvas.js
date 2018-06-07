import React from 'react';
import {Imagenes} from './imagenes.js';

export class Canvas extends React.Component {

  createTable = () => {
      let table = []

      for (let i = 1; i <= this.props.n; i++) {
        let children = []

        children.push(<td>{i}</td>)
        children.push(<td>{calculateYellowPixels(i, this.props.dimension)}</td>)

        table.push(<tr>{children}</tr>)
      }
      return table
    }

  render()  {
      return(
        <div>
          <div className="canvas" style={{width: this.props.dimension, height: this.props.dimension}}>
            <Imagenes
              n= {this.props.n}
            />
          </div>
          <div>
            <table className="tableinfo">
              <tbody>
                <tr>
                  <th>n</th>
                  <th>Pixels</th>
                </tr>
                {this.createTable()}
              </tbody>
            </table>
          </div>
        </div>
      );
  }
}

function calculateYellowPixels(n, dimension) {
  let size = dimension;
  let  area = 0;
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (size == 1) area = 1;
    else area = Math.floor(size / 2);
    size = size - Math.floor(size / 2);
    count = count + Math.ceil(area ** 2);
  }
return count;
}
