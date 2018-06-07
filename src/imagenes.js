import React from 'react';

export class Imagenes extends React.Component {
  renderImagenes(n) {
    if (n < 0) {
      return(
        <div className="ar_iz" ></div>
      )
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
