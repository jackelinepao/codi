import React, { Component } from 'react';

export default class Tarjeta extends Component {
  render() {
    return (
      <div>
          <label htmlFor="">Nombre Pabellon: {this.props.nombrePabellon}</label><br/>
          <label htmlFor="">Encargado: {this.props.encargado}</label><br/>
          <label htmlFor="">Area: {this.props.area}</label>
      </div>
    );
  }
}
