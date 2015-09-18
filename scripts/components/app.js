import React from 'react';
var lista = require('../lista.json').people;
var sortBy = require('sort-by');

console.log(lista);

var Trabajador = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired
  },
  render() {
    return(
      <li>
	{this.props.data.firstName} {this.props.data.lastName} email: <a href={`mailto: ${this.props.data.email}`}>{this.props.data.email}</a> cargo: <b>{this.props.data.role}</b>
      </li>
    );
  }
});

var ListaTrabajadores = React.createClass({
  render(){
    var listaTrabajadores = lista
				.filter((item) => { return item.role == "Front-end Development" })
				.map( (trabajador, idx) => { return <Trabajador key={idx} data={trabajador} /> });
    return(
      <ul>
	{listaTrabajadores}
      </ul>
    );
  }
});

module.exports = ListaTrabajadores;
