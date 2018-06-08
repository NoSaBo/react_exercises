import React from 'react';
import {Imagenes} from './imagenes.js';

export class Canvas extends React.Component {

  createTable = () => {
      let table = []

      for (let i = 1; i <= this.props.n; i++) {
        let children = []

        children.push(<td>{i}</td>)
        children.push(<td>{calculateYellowPixels(i, this.props.dimensionA, this.props.dimensionB)}</td>)

        table.push(<tr>{children}</tr>)
      }
      return table
    }

  render()  {
      return(
        <div>
          <div className="canvas" style={{width: this.props.dimensionA, height: this.props.dimensionB}}>
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

function calculateYellowPixels(n, dimensionA, dimensionB) {
  let a = dimensionA;
  let b = dimensionB;
  let  area = 0;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if(a == 1 || b ==1) area = a * b;
    else area = Math.floor(a / 2) * Math.floor(b / 2);
    count += area;
    a = Math.ceil(a/2);
    b = Math.ceil(b/2);
  }
return count;
}
